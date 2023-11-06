import './Banner.css';
import { Slide } from 'react-reveal';

export default function Banner(){
    return(
        <Slide right>
        <div className='banner'>
            <Slide left>
            <h1>Built for Africans <span className='b-span'>by Africans</span></h1>
            </Slide>
            <Slide right>
            <p>We believe we can make banking better <span className='b-span'>for you, You have nothing to worry about.</span></p>
            </Slide>
        </div>
        </Slide>
    );
};