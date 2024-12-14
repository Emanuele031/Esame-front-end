import React from 'react';
import { Carousel } from 'react-bootstrap';
import chillImage from '../assets/images/1a.png';
import latinaImage from '../assets/images/1b.png';

const NovitaSection: React.FC = () => {
  return (
    <div className="mb-4">
      <h2 className="text-white text-left d-flex" style={{ fontSize: '2.25rem' }}>Novità</h2>

     
      <div className="d-block d-md-none">
        <Carousel interval={3000} controls={false} indicators={false} slide>
          
          <Carousel.Item>
            <div className="card bg-primary text-white" style={{ width: '80%', margin: '0 auto' }}>
              <img src={chillImage} className="card-img-top" alt="Apple Music Chill" />
              <div className="card-body">
                <h5 className="card-title">Apple Music Chill</h5>
                <p className="card-text">Rilassati e ascoltaci, al resto pensiamo noi.</p>
              </div>
            </div>
          </Carousel.Item>

          
          <Carousel.Item>
            <div className="card bg-danger text-white" style={{ width: '80%', margin: '0 auto' }}>
              <img src={latinaImage} className="card-img-top" alt="Música Latina" />
              <div className="card-body">
                <h5 className="card-title">Música Latina</h5>
                <p className="card-text">Ecco la nuova casa della musica latina.</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

     
      <div className="row d-none d-md-flex">
        <div className="col-md-6 mb-3">
          <div className="card bg-primary text-white">
            <img src={chillImage} className="card-img-top" alt="Apple Music Chill" />
            <div className="card-body">
              <h5 className="card-title">Apple Music Chill</h5>
              <p className="card-text">Rilassati, al resto pensiamo noi.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card bg-danger text-white">
            <img src={latinaImage} className="card-img-top" alt="Música Latina" />
            <div className="card-body">
              <h5 className="card-title">Música Latina</h5>
              <p className="card-text">Ecco la nuova casa della musica latina.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovitaSection;
