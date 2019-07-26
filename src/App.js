import React from 'react';
import './App.css';
import Navbar from './component/Navbar'
import Home from './component/Home/Home'

import { Route } from 'react-router-dom';
import Rooms from './component/Rooms';
import {changeMenu} from './1.action'
import {connect} from 'react-redux'
import ScrollToTop from './component/scrollToTop';
import RoomDetails from './component/RoomsDetail';
import { Footer } from './component/Footer';
import Contact from './component/Contact'
class App extends React.Component {
  componentDidMount=()=>{
    var stringPath = window.location.pathname.slice(1, window.location.pathname.length);
    
    // this.props.changeMenu(stringPath.charAt(0).toUpperCase() + stringPath.slice(1))
    this.props.changeMenu(window.location.pathname)

  }
  render() {
    return (
      <div className='backgroundHome'>
        <Navbar/>
          <ScrollToTop>
          <Route path='/' component={Home} exact />
          <Route path='/rooms' component={Rooms}  exact/>
          <Route path='/contact' component={Contact}  exact/>
          <Route path='/rooms/:roomtype' component={RoomDetails}  />
          </ScrollToTop>
        <Footer/>
      
        {/* </div> */}
        
       
      </div>
    );
  }
}
export default connect(null, {changeMenu})(App);
