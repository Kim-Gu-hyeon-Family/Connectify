import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3030/api/auth',
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            logout();
        }

        return Promise.reject(error);
    }
);

const logout = () => {
    localStorage.removeItem('accessToken');
    window.location.href = '/signin';
};

const UserApi = {
    signup: (email, username, password) => axiosInstance.post('/signup', { email, username, password }),
    signin: (email, password) => axiosInstance.post('/signin', { email, password }),
    logout: () => axiosInstance.post('/logout'),
};

export default UserApi;
