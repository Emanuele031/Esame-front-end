import React from 'react';


import NovitaSection from './NovitaSection';
import NuoviEpisodiRadioSection from './NuoviEpisodiRadio';
import NuoveUsciteSection from './NuoveUsciteSection';
import AltroDaEsplorareSection from './AltroDaEsplorare';
import FooterBottom from './FooterBottom';

const MainContent: React.FC = () => {
  return (
    <div className="container-fluid py-3" style={{ backgroundColor: '#1F1F1F' }}>
      <NovitaSection />
      <NuoviEpisodiRadioSection />
      <NuoveUsciteSection />
      <AltroDaEsplorareSection />
      <FooterBottom />
    </div>
  );
};

export default MainContent;
