import React, { useEffect, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa'; 

const NuoveUsciteSection: React.FC = () => {
  const [nuoveUscite, setNuoveUscite] = useState<any[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [isMobile, setIsMobile] = useState<boolean>(false);

  
  const fetchNewReleases = async (query: string) => {
    try {
      setLoading(true);
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      const data = await response.json();
      setNuoveUscite(data.data.slice(0, 12)); 
      setLoading(false);
    } catch (error) {
      console.error('Errore durante il recupero dei dati:', error);
      setLoading(false);
    }
  };

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  
  useEffect(() => {
    fetchNewReleases('music');
  }, []);

  
  const displayedReleases = isMobile ? nuoveUscite.slice(0, 6) : nuoveUscite;

  return (
    <div className="mb-4">
      <h3 className="text-white text-left d-flex align-items-center" style={{ fontSize: '1.5rem' }}>
  Nuove uscite
  <span className="ms-2 mt-0">
    <FaAngleRight />
  </span>
</h3>

      <div className={`row ${isMobile ? 'row-cols-3' : 'row-cols-md-6'} g-3`}>
        {loading ? (
          <div className="col-12 text-center">
            <p className="text-white">Caricamento in corso...</p>
          </div>
        ) : (
          displayedReleases.map((release, index) => (
            <div className="col" key={index}>
              <div className="card bg-white text-center text-white">
                <img 
                  src={release.album.cover_big} 
                  alt={release.album.title} 
                  className="card-img-top" 
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    aspectRatio: '1/1', 
                    borderRadius: '8px', 
                  }} 
                />
              </div>
              <div className='card-body'>
                <p className="card-text text-white d-flex mb-0" style={{ fontSize: '13px' }}>
                  {release.album.title}
                </p>
                <p className="card-text text-white-50 d-flex mt-0" style={{ fontSize: '12px' }}>
                  {release.artist.name}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NuoveUsciteSection;
