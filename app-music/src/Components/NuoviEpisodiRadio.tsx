import React from 'react';
import radioImage1 from '../assets/images/2a.png'; 
import radioImage2 from '../assets/images/2b.png'; 
import radioImage3 from '../assets/images/2c.png'; 
import radioImage4 from '../assets/images/2d.png'; 
import radioImage5 from '../assets/images/2e.png'; 
import radioImage6 from '../assets/images/2f.png'; 
import { FaAngleRight } from 'react-icons/fa'; 

const NuoviEpisodiRadioSection: React.FC = () => {
  return (
    <div className="mb-4">
     <h3 className="text-white text-left d-flex align-items-center mb-0" style={{ fontSize: '1.5rem' }}>
  Nuovi episodi radio
  <span className="ms-2 mt-0">
    <FaAngleRight />
  </span>
</h3>

      <div className="row row-cols-2 row-cols-md-6 g-3 mt-0" style={{ fontSize: '12px'}}>
        
        <div className="col-4 col-md-2">
          <div className="card">
            <img src={radioImage1} className="card-img-top w-100" alt="Radio Show 1" style={{ height: 'auto', aspectRatio: '1.1' }} />
          </div>
          <p className='d-flex'>Pròlogo con Abuelo</p>
        </div>
        
        <div className="col-4 col-md-2">
          <div className="card">
            <img src={radioImage2} className="card-img-top w-100" alt="Radio Show 2" style={{ height: 'auto', aspectRatio: '1.1' }} />
          </div>
          <p className='d-flex'>The Wanderer</p>
        </div>
       
        <div className="col-4 col-md-2">
          <div className="card">
            <img src={radioImage3} className="card-img-top w-100" alt="Radio Show 3" style={{ height: 'auto', aspectRatio: '1.1' }} />
          </div>
          <p className='d-flex'>Michael Bublé & Carly Pearce</p>
        </div>
       
        <div className="col-4 col-md-2 d-none d-md-block">
          <div className="card">
            <img src={radioImage4} className="card-img-top w-100" alt="Radio Show 4" style={{ height: 'auto', aspectRatio: '1.1' }} />
          </div>
          <p className='d-flex'>Stephan Moccio: The Zane Lowe Interview</p>
        </div>
        
        <div className="col-4 col-md-2 d-none d-md-block">
          <div className="card">
            <img src={radioImage5} className="card-img-top w-100" alt="Radio Show 5" style={{ height: 'auto', aspectRatio: '1.1' }} />
          </div>
          <p className='d-flex'>Chart Spotlight: Julia Michaels</p>
        </div>
       
        <div className="col-4 col-md-2 d-none d-md-block">
          <div className="card">
            <img src={radioImage6} className="card-img-top w-100" alt="Radio Show 6" style={{ height: 'auto', aspectRatio: '1.1' }} />
          </div>
          <p className='d-flex'>Travis Mills</p>
        </div>
      </div>
    </div>
  );
};

export default NuoviEpisodiRadioSection;
