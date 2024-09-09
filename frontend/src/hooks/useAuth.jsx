import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = (
    signInMethod,
    signUpMethod,
    signInSuccessMessage,
    signUpSuccessMessage,
    signInRedirectPath,
    signUpRedirectPath
) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await signInMethod(email, password);
            if (response.status === 200) {
                alert(signInSuccessMessage);
                navigate(signInRedirectPath);
            }
        } catch (error) {
            console.error(error);
            alert('오류가 발생하였습니다. 다시 시도해 주세요.');
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await signUpMethod(email, username, password);
            if (response.status === 201) {
                alert(signUpSuccessMessage);
                navigate(signUpRedirectPath);
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
        handleSignIn,
        handleSignUp,
    };
};

export default useAuth;
