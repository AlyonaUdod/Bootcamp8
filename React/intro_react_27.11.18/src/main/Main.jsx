import React from 'react';
import './Main.css';
import UserInfo from '../userInfo/UserInfo.jsx'
import News from '../news/News.jsx'

const Main = () => {
    return (
        <main className='Main'>
        <UserInfo/>
        <News/>
        </main>
    );
};

export default Main;