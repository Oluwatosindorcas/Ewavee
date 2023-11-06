import React, { useState } from 'react';

const tabData = [
        { id: 1, title: 'Ewave Finance', content: 'Ewave finance is a product of ewave financial technology ltd, and is not a bank. We offer our products and services in partnership with licensed transmitters and banking patrons in there respective jurdisdiction.' },
        { id: 2, title: 'Terms of Service', content: 'Terms of Service' },
        { id: 3, title: 'FAQ', content: 'FAQs' },
        { id: 4, title: 'Privacy Policy', content: 'Privacy Policy' },
        { id: 5, title: 'AML Policy', content: 'Policy' },
    ]




const VerticalTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      {/* Render tab headings */}
      <div>
        {tabData.map((tab, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            className={activeTab === index ? 'active' : ''}
          >
            {tab.title}
          </div>
        ))}
      </div>

      {/* Render tab content */}
      <div>
        {tabData.map((tab, index) => (
          <div
            key={index}
            className={activeTab === index ? 'tab-content active' : 'tab-content'}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTab;
