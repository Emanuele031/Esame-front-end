import React from 'react';
import { FaAngleRight } from 'react-icons/fa'; 

const AltroDaEsplorareSection: React.FC = () => {
  return (
    <div>
      <h3 className="text-white text-left d-flex mb-3" style={{ fontSize: '1.5rem' }}>Altro da esplorare</h3>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {[
          "Esplora per genere",
          "Decenni",
          "Attività e stati d'animo",
          "Worldwide",
          "Classifiche",
          "Audio spaziale",
          "Video musicali",
          "Nuovi artisti",
          "Hit del passato",
        ].map((text, index) => (
          <div className="col" key={index}>
            <button
              className="btn btn-outline w-100 d-flex justify-content-between align-items-center p-3"
              style={{
                color: '#CE4E5D',
                background: '#2A2A2A',
              }}
            >
              <span>{text}</span>
             
              <FaAngleRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AltroDaEsplorareSection;
