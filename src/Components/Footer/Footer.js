import { Slide } from 'react-reveal';
import './Footer.css';
import face from '../Images/Facebook.png';
import insta from '../Images/Instagram.png';
import In from '../Images/LinkedIn.png';
import bird from '../Images/Twitter.png';
import ball from '../Images/XMLID_3_.png';

export default function Footer(){
    return(
        <Slide up>
        <footer>
        <Slide left>
        <div className='u-d'>
        <h2>Ewave</h2>
        <p>copyright 2022</p>
        </div>
        </Slide>

        <Slide right>
        <div className='i-d'>
        <img src={face} alt=''/>
        <img src={insta} alt=''/>
        <img src={In} alt=''/>
        <img src={bird} alt=''/>
        <img src={ball} alt=''/>
        </div>
        </Slide>
        </footer>
        </Slide>
    );
};