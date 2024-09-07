import React, { useState } from 'react';
import FormInput from '../Formlnput/FormInput';
import UserApi from '../../api/UserApi';
import { useNavigate, Link } from 'react-router-dom';

const SigninForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await UserApi.signin(email, password);
            if (response.status === 200) {
                const { accessToken } = response.data;

                localStorage.setItem('accessToken', accessToken);

                alert('로그인에 성공하였습니다.');
                navigate('/connectify');
            }
        } catch (error) {
            console.error('Login error:', error);
            if (error.response && error.response.status === 401) {
                alert('잘못된 이메일 또는 비밀번호입니다.');
            } else {
                alert('로그인에 실패하였습니다.');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>로그인</h1>
            <FormInput label="이메일" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormInput
                label="비밀번호"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div>
                <button type="submit">로그인</button>
                <br />
                <Link to={'/signup'} style={{ textDecoration: 'underline' }}>
                    계정이 없으신가요?
                </Link>
            </div>
        </form>
    );
};

export default SigninForm;
