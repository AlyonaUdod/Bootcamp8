import React from 'react';
import {NavLink} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import Email from '../Email/Email.jsx'
import Address from '../Address/Address.jsx';
import Phone from '../Phone/Phone.jsx'

const Home = (props) => {
    console.log(props)
    return (
        <div>
            <h2> It's Home!</h2>
            {props.text}
            <ul>
                <li>
                    <NavLink to={`${props.match.path}address`}>Address</NavLink> 
                </li>
                <li>
                    <NavLink to='/phone'>Phone</NavLink>
                </li>
                <li>
                    <NavLink to='/email'>E-mail</NavLink>
                </li>
            </ul>
            <Switch>
                <Route path={`${props.match.path}address`} component={Address}/>
                <Route path={`${props.match.path}phone`} component={Phone}/>
                <Route path={`${props.match.path}email`} component={Email}/>
            </Switch>

        </div>
    );
};

export default Home;