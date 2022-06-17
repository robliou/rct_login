
import '../styles/Home.css';

import {useState} from 'react';
import {NavLink} from 'react-router-dom'


const breakpoints = [480, 768, 992, 1200];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
//From the Odyssey lift-off-pt3 doc


const Home = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };




    return (
     
        <div className="wrapper">
 
               <div id="banner">
        <h1 id="h1prop"> 
          <strong>  Welcome to the <br></br> RCT.AI Demo. <br></br> You are now logged in! <br /> </strong>
           
        </h1>    
        
                </div>
        
    </div>    
    )
}

export default Home;
