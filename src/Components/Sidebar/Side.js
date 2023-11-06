import { useState } from 'react';
import { Sling } from 'hamburger-react';
import './Side.css';
import slogo from '../Images/Logo Green 2.png'

export default function Side(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    
    return(
        <div className='s-bar'>
        <img src = {slogo} alt=''/>

        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-toggle" onClick={toggleMenu}>
        <Sling 
        size={30} 
        color="#0ACF83" 
        />
        </div>
        <nav className="menu-items">
        <ul>
          <li>
            <a href="/">Company</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Product</a>
          </li>
        </ul>
        <button type = 'submit'
        className="create">Get the App</button>
        </nav>
        </div>

        </div>
    )
}