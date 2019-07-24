import React from 'react';
import './App.css';
import Navbar from './component/Navbar'
import Home from './component/Home/Home'

import { Route } from 'react-router-dom';
import Rooms from './component/Rooms';
class App extends React.Component {
  onScrollPage=()=>{
    alert(window.pageYOffset)
  }
  render() {
    return (
      <div className='backgroundHome'>
        <Navbar/>
        <Route path='/' component={Home} exact />
        <Route path='/rooms' component={Rooms} exact />

      
        {/* </div> */}
        
       
      </div>
    );
  }
}
export default App;
