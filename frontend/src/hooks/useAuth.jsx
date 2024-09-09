import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = (apiMethod, successMessage, redirectPath) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await apiMethod(email, username, password);
            if (response.status === 200 || response.status === 201) {
                alert(successMessage);
                navigate(redirectPath);
            }
        } catch (error) {
            console.error(error);
            alert('오류가 발생하였습니다. 다시 시도해 주세요.');
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        username,
        setUsername,
        handleSubmit,
    };
};

export default useAuth;
