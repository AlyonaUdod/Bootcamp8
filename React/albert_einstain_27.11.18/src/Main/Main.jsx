import React from 'react';
import Description from '../Description/Description.jsx';
import Quate from '../Quate/Quate.jsx';
import Timeline from '../Timeline/Timeline.jsx';
import './Main.css'

const Main = () => {
    return (
        <main>
            <Description/>
            <Quate/>
            <Timeline/>
            <div id="link">
                <a id="tribute-link" href="http://www.shmoop.com/albert-einstein/timeline.html" target="_blank">Full timeline at Shmoop!</a>
            </div>
        </main>
    );
};

export default Main;