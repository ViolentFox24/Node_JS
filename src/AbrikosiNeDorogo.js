import React, { Component } from 'react';
import './App.css';

const App = () => {
    return (
      <div>
      <Header/>
      <Menu/>
      <Bear/>
       </div>);
  }

  const Menu = () => {
    return (
     <div>
       <ul>
         <li>css</li>
         <li>html</li>
         <li>JS</li>
       </ul>
     </div>);
 }
 
 const Header = () => {
   return (<div>
     <a href='#s'>Horse</a>
     <a href='#s'>Chiken</a>
     <a href='#s'>Pig</a>
   </div>);
 }
 
 const Bear = () => {
   return (<div>
     <p>Bavaria</p>
     <p>Jigyli</p>
     <p>Garaj</p>
     <p>Cozel</p>
     <p>Melnik</p>
   </div>);
 }
 
   export default App;