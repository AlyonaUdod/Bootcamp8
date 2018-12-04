import React from 'react'; // React Statement Component
import './UserInfo.css';
import Gallery from '../gallery/gallery.jsx'

const UserInfo = () => {
    return (
        <div className="userInfo">
            <img src="http://www.bobthebuilder.com/en-us/Images/btb_where_to_watch_background_Bob_tcm1239-232957.png" alt="It's Bob" className="photo"/>
            <h2 className="name">Bob</h2>
            <h3 className="nickname">Builder</h3>
            <Gallery/>
        </div>
    );
};

export default UserInfo;