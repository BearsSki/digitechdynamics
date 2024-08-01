import React from 'react';
import './AppDev.css';
import Section from './Section';
import Title from './Title'; // Assuming you have a Title component
import PricingList from './PricingList';
import { LeftLine, RightLine } from './design/Pricing';
import goLiveRevamp from '/Users/seansmythe/Desktop/DigiTech_Web_Final/main/src/assets/goLiveRevamp.png';

const AppDev = () => {
  return (
    <Section id="appdev" className="py-8">
      <div className="container">
        <Title className="mb-5 md:justify-center text-4xl md:text-6xl text-white">Our Apps</Title>
        <div>
          <div className="banner">
            <div className="slider" style={{ '--quantity': 4 }}>
              <div className="item" style={{ '--position': 1 }}><img src="images/dragon_1.jpg" alt="" /></div>
              <div className="item" style={{ '--position': 2 }}><img src={goLiveRevamp} alt="Go Live Revamp" /></div>
              <div className="item" style={{ '--position': 3 }}><img src="images/dragon_3.jpg" alt="" /></div>
              <div className="item" style={{ '--position': 4 }}><img src="images/dragon_4.jpg" alt="" /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative z-2 mt-2">
        <Title className="mb-2 md:justify-center text-4xl md:text-6xl text-white">
          {"App stats"}
        </Title>

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </Section>
  );
};

export default AppDev;
