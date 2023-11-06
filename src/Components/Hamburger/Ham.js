import { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import './Ham.css';


const Ham = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='Ham'>
      <Hamburger
        rounded
        toggled={isOpen}
        toggle={handleMenuToggle}
        color="#08A669"
        size={27}
      />
      {isOpen &&(
        <div className='mb'>
        <div className='menu'>
          <a href='/'>Company</a>
          <a href='/'>Blog</a>
          <a href='/'>Product</a>
           </div>

          <button type='submit'>Create free account</button>
       
        </div>
      )}
    </div>
  );

};

export default Ham;