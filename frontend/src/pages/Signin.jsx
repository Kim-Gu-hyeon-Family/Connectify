import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
import UserApi from '../api/UserApi';
import useAuth from '../hooks/useAuth';
import Button from '../components/Button';
import styles from './Auth.module.css';

const Signin = () => {
    const { email, setEmail, password, setPassword, handleSignIn } = useAuth(
        UserApi.signin,
        null,
        '로그인에 성공하였습니다.',
        null,
        '/connectify',
        null
    );

    return (
        <form onSubmit={handleSignIn} className={styles.formContainer}>
            <h1 className='h1'>로그인</h1>
            <FormInput label="이메일" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormInput
                label="비밀번호"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div>
                <Button type="submit">로그인</Button>
                <br />
                <Link to={'/signup'} className={styles.link}>
                    계정이 없으신가요?
                </Link>
            </div>
        </form>
    );
};

export default Signin;
