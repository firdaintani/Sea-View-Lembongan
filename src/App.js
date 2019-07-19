import React from 'react';
import './App.css';
import Navbar from './component/Navbar'
import Home from './component/Home/Home'
class App extends React.Component {
  onScrollPage=()=>{
    alert(window.pageYOffset)
  }
  render() {
    return (
      <div className='backgroundHome'>
        <Navbar/>
        <Home/>
      
       
      </div>
    );
  }
}
export default App;
