import React, { useState } from 'react';
import './CreatePost.css';
import { useNavigate } from 'react-router-dom'; // React Router 사용 시

const CreatePost = () => {
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate(); // 페이지 이동을 위한 함수

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Text:', text);
        console.log('Image:', image);
    };

    const handleGoBack = () => {
        navigate('/'); // 메인 페이지 경로로 이동
    };

    return (
        <div className='create'>
            <h1 className='h1'>채팅 만들기</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="text">Text:</label>
                    <textarea
                        id="text"
                        value={text}
                        onChange={handleTextChange}
                        required
                    />
                </div>
                <button type="submit">Post</button>
            </form>
            <button className="back-button" onClick={handleGoBack}>
                Go Back to Main
            </button>
        </div>
    );
};

export default CreatePost;
