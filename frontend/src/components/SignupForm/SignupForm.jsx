import React, { useState } from 'react';
import FormInput from '../Formlnput/FormInput';
import UserApi from '../../api/UserApi';
import { useNavigate, Link } from 'react-router-dom';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await UserApi.signup(email, username, password);
            console.log(response);
            if (response.status === 201) {
                alert('회원가입에 성공하였습니다.');
                navigate('/signin');
            }
        } catch (error) {
            console.error(error);
            alert('회원가입에 실패하였습니다.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>회원가입</h1>
            <FormInput label="이메일" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormInput label="이름" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <FormInput
                label="비밀번호"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div>
                <button type="submit">회원가입</button>
                <br />
                <Link to={'/signin'} style={{ textDecoration: 'underline' }}>
                    계정이 이미 있으신가요?
                </Link>
            </div>
        </form>
    );
};

export default SignupForm;
