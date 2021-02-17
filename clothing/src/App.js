import React from 'react';
import { Switch , Route ,Link} from 'react-router-dom';
import './App.css';
import {Homepage} from './pages/homepage/homepage.component';
import {Shoppage} from './pages/shop/shop.component';
import  {Header} from './component/header-component/header.component';
function App() {
  return (
    <div >
    <Header/>
       <Switch>
     <Route exact path ='/' component={Homepage}/>
     <Route path ='/shop' component={Shoppage}/>
     
     </Switch>
     
     </div>
    
  );
}

export default App;
