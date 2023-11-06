import './Trust.css';
import { Slide } from 'react-reveal';
import woman  from '../Images/Rectangle 410.png';
import Tile from '../UI/Tile/Tile';

export default function Trust(){
    return(
        <section>
        <Slide left>
            <img src = {woman} alt=''/>
        </Slide>


            <div className='left'>
            <Slide down>
            <div className='t-tile'>
            <h2>Our Confidence</h2>

                <Tile 
                    title = 'Secured Funds'
                    description = 'Your money is always secured.'
                />

                <Tile 
                    title = 'Secure Transactions'
                    description = 'We are given to your security, your account is protected with 2FA.'
                />

                 <Tile 
                    title = 'Customer Service'
                    description = 'We are ready to ensure you have the best customer experience 24/7 at all times.'
                />
                </div>
                </Slide>

            <Slide left>
            <div className='b-tile'>
                <Tile 
                    title = 'Fraud Protection'
                    description = 'Our security team is given to the safety of your account.'
                />
                
                 <Tile 
                    title = 'Data Security'
                    description = 'We protect your information and it is always secured. Web collect  and use your information formally, lawfully and transparently.'
                />
            </div>
            </Slide>
            </div>
        </section>
    );
};