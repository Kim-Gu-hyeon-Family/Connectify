import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

const Main = () => {
    return (
        <div className="main-container">
            <h1 className='main-h1'>Connectify</h1>
            <p className='p'>같은 취미를 공유하는 사람들을 연결하세요!</p>
            <div className="button-container">
                <Link to="/profile" className="main-button">계정 프로필 확인</Link>
                <Link to="/CreatePost" className="main-button">게시물 올리기</Link>
                <Link to="/posts" className="main-button">게시물 확인</Link>
            </div>
        </div>
    );
};

export default Main;