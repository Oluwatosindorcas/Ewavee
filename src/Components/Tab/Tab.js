import { useState } from 'react';
import './Tab.css';
import { Fade } from 'react-reveal';

export default function Tab(){

    const tabs = [
        { id: 1, title: 'Ewave Finance', content: 'Ewave finance is a product of ewave financial technology ltd, and is not a bank. We offer our products and services in partnership with licensed transmitters and banking patrons in there respective jurdisdiction.' },
        { id: 2, title: 'Terms of Service', content: 'Terms of Service' },
        { id: 3, title: 'FAQ', content: 'FAQs' },
        { id: 4, title: 'Privacy Policy', content: 'Privacy Policy' },
        { id: 5, title: 'AML Policy', content: 'Policy' },
    ]


    const [activeTab, setActiveTab] = useState(0);


    return(
        <Fade>
        <div className='tab-d'>
        <div className='tab-menu'>
            {tabs.map ((tab, index) => (
                <div 
                key = {index}
                className = {`tab ${activeTab === index ? 'active' : ''}`}
                onClick = {() => setActiveTab(index)}
                >
                    {tab.title}
                </div>
            ))}
        </div>

        <div className='line'></div>

        <div className='tab-content'>
            {tabs[activeTab].content}
        </div>

        </div>
        </Fade>
    );
};