import './Header.css';
import gstore from '../Images/Mobile app store badge.png';
import astore from '../Images/Mobile app store badge apple.png';
import globe from '../Images/8764113_12495 [Converted]_Artboardxx.png';

export default function Header(){
    return(
        <header>
        <div>
            <h1>Borderless Cash</h1>
            <p>The borderless virtual bank for individuals and businesses in <span>the African ecosystem.</span></p>


            {/*This is for mobile*/}         
            <p className='h-s'>The borderless virtual bank for individuals <span>and businesses in the African ecosystem.</span></p>

            <div className='t'>
                <a href='/'><img className='g-img' src={gstore} alt=''/></a>
                <a href='/'><img className='a-img' src={astore} alt=''/></a>
            </div>
            </div>

            <img src={globe} alt=''/>

        </header>
    );
};