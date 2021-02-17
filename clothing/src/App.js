import React from 'react';
import { Switch , Route ,Link} from 'react-router-dom';
import './App.css';
import {Homepage} from './pages/homepage/homepage.component';

const Hatspage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

const homepage = (props) =>{
  
  return(
    <div>
    <button onClick ={() => props.history.push('/topics')}>topics</button>
      <h1>home pages</h1>
    </div>
  );
};

const topiclist = (props) =>{
  return(
    <div>
      <h1>topic list pages</h1>
      <Link to = {`${props.match.url}/13`}>to topic 13</Link>
      <Link to = {`${props.match.url}/18`}>to topic 18</Link>
    </div>
  );
};
const topicdetail = (props)=>{
  
  return(
    <div>
      <h1>topic detail page {props.match.params.topicid}</h1>
    </div>
  );
};

function App() {
  return (
    <div >
   
     <Route exact path ='/' component={homepage}/>
     <Route exact path ='/topics' component={topiclist}/>
     <Route path = '/topics/:topicid' component = {topicdetail}/>
    
     </div>
  );
}

export default App;
