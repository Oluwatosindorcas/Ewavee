import './Reminder.css';
import { Slide } from 'react-reveal';
import store1 from '../Images/Mobile app store badge.png';
import store2 from '../Images/Mobile app store badge apple.png';

export default function Reminder(){
    return(
        <Slide left>
        <div className='remind'>
            <Slide up>
            <h1>Get the App Now</h1>
            </Slide>

            <div className = 's-d'>
            <Slide left>
            <img className = 's1' src={store1} alt=''/>
            </Slide>
            <Slide right>
            <img className = 's2' src={store2} alt=''/>
            </Slide>
            </div>
        </div>
        </Slide>
    );
};