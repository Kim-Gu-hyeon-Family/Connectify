import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../../../components/FormInput/FormInput';
import UserApi from '../../../api/UserApi';
import useAuth from '../../../hooks/useAuth';
import Button from '../../../components/Button/Button';
import styles from '../Auth.module.css';

const Signup = () => {
    const { email, setEmail, username, setUsername, password, setPassword, handleSignUp } = useAuth(
        null,
        UserApi.signup,
        null,
        '회원가입에 성공하였습니다.',
        null,
        '/signin'
    );

    return (
        <form onSubmit={handleSignUp} className={styles.formContainer}>
            <h1 className='h1'>회원가입</h1>
            <FormInput
                label="이메일"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputField}
            />
            <FormInput
                label="이름"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.inputField}
            />
            <FormInput
                label="비밀번호"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.inputField}
            />
            <div>
                <Button type="submit">회원가입</Button>
                <br />
                <Link to={'/signin'} className={styles.link}>
                    계정이 이미 있으신가요?
                </Link>
            </div>
        </form>
    );
};

export default Signup;
