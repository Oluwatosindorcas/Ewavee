import './Doings.css';
import { Slide } from 'react-reveal';
import Card from '../UI/Card/Card';
import wallet from '../Images/wallet.png';
import card from '../Images/card.png';
import list from '../Images/list.png';
import exchange from '../Images/exchange.png';
import fly from '../Images/fly.png';
import star from '../Images/star.png';
import cap from '../Images/cap.png';
import world from '../Images/world.png';
import graph from '../Images/graph.png';

export default function Doings(){
    return(
        <main>
        <Slide right>
            <h1>Go Borderless with Us</h1>
        </Slide>


            <Slide left>        
            <div>
            <Card 
                image = {wallet}
                title = 'Multi-currency Wallet'
                description = 'Create local and international virtual accounts with us.'
            />

            <Card 
                image = {card}
                title = 'Virtual Cards'
                description = 'Credits, shop, pay and subscribe on your favorite platforms.'
            />

            <Card 
                image = {list}
                title = 'Bill and Utility Payments'
                description = 'Enjoy seamless & borderless payment of bills.'
            />
            </div>
            </Slide>

            <Slide right>
            <div>
            <Card 
                image = {exchange}
                title = 'Exchange Currency'
                description = 'Swap Currencies swiftly at awesome rates with more than 10+ currencies available.'
            />

            <Card 
                image = {fly}
                title = 'Fast Payouts'
                description = 'Send money to your friends, family and workers across continents.'
            />

            <Card 
                image = {star}
                title = 'Savings'
                description = 'Save and HODL in different currencies.'
            />
            </div>
            </Slide>

            <Slide left>
            <div>
                <Card 
                image = {cap}
                title = 'Financial Education'
                description = 'Get premium contents to become better in your finances.'
            />

            <Card 
                image = {world}
                title = 'Community'
                description = 'We want to be right beside you.'
            />

            <Card 
                image = {graph}
                title = 'Multiple Funding Options'
                description = 'Fund your wallet with any currency.'
            />
            </div>
            </Slide>

        </main>
    );
};