import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home.jsx'
import Contact from './Contact/Contact.jsx'
import About from './About/About.jsx'
import Menu from './Menu/Menu.jsx';
import './App.css'
import Email from './Email/Email.jsx'
import Address from './Address/Address.jsx';
import Phone from './Phone/Phone.jsx'


export default class App extends Component {
    state = {
        homeText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatum, sapiente, ad dolorem nam illum illo quibusdam tempora nesciunt officia ipsum cumque a accusamus itaque reprehenderit soluta ipsam provident blanditiis. Itaque laborum ullam facilis molestiae fuga quis error voluptas? Sapiente quaerat adipisci atque enim aut ratione, hic ipsum. Maiores voluptas quas et consequatur eius placeat voluptatem iure aspernatur modi enim! Eius laudantium ipsa nostrum nobis facilis rerum. Doloremque, excepturi. Possimus, laudantium sapiente reiciendis placeat eligendi perferendis minima facilis nemo itaque? Ab dolore laudantium illo atque officia sed voluptatem? Tempora, incidunt!'
    }
  render() {
    return (
      <div>
        <Menu/>
        <Switch>
            <Route exact path='/' render={(props) => <Home {...props} text={this.state.homeText}/>}/>
            <Route path='/about'component={About}/>
            <Route path='/contact' component={Contact}/> 
            {/* C Home пробрасывание роутинга не работает, потому что начальная страница просто /. В контакте будет путь /contact/address пример в Home */}
            <Route path='/address' component={Address}/>
            <Route path='/phone' component={Phone}/>
            <Route path='/email' component={Email}/>
        </Switch>
      </div>
    )
  }
}
