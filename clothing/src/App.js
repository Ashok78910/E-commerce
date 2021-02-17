import React from 'react';
import { Switch , Route ,Link} from 'react-router-dom';
import './App.css';
import {Homepage} from './pages/homepage/homepage.component';

const Hatspage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);




function App() {
  return (
    <div >
   
     <Route exact path ='/' component={Homepage}/>
     <Route exact path ='/hats' component={Hatspage}/>
     
    
     </div>
  );
}

export default App;
