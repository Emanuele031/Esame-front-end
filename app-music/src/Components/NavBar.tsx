import React, { useState } from "react";
import {
  FaApple,
  FaVolumeUp,
  FaUser,
  FaBackward,
  FaPlay,
  FaPause,
  FaForward,
  FaRandom,
  FaRedoAlt,
  FaBars,
} from "react-icons/fa";
import { Button, Navbar, Container, } from "react-bootstrap";

const AppNavbar: React.FC = () => {
  const [volume, setVolume] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setVolume(Number(event.target.value));
  };

  const handleTogglePlay = (): void => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Navbar per schermi grandi */}
      <Navbar
        expand="md"
        className="d-none d-md-flex bg-dark py-0"
      >
        <Container fluid className="p-3 d-flex align-items-center justify-content-between">
          
          <div className="d-none d-lg-flex align-items-center">
            <Button variant="link" className="text-secondary mx-3 p-0">
              <FaRandom style={{ fontSize: "16px" }} />
            </Button>
            <Button variant="link" className="text-secondary mx-2 p-0">
              <FaBackward style={{ fontSize: "16px" }} />
            </Button>
            <Button variant="link" className="p-0" onClick={handleTogglePlay}>
              {isPlaying ? (
                <FaPause className="text-white mx-3" style={{ fontSize: "18px" }} />
              ) : (
                <FaPlay className="text-white mx-3" style={{ fontSize: "18px" }} />
              )}
            </Button>
            <Button variant="link" className="text-secondary mx-2 p-0">
              <FaForward style={{ fontSize: "16px" }} />
            </Button>
            <Button variant="link" className="text-secondary mx-3 p-0">
              <FaRedoAlt style={{ fontSize: "16px" }} />
            </Button>
          </div>

         
          <div
            className="d-flex justify-content-center align-items-center position-absolute"
            style={{
              width: "42%",
              height: "100%",
              backgroundColor: "#4D4D4D",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <FaApple className="text-white" style={{ fontSize: "24px" }} />
          </div>

          
          <div className="d-flex align-items-center mx-3 ms-auto">
            <div className="d-none d-lg-flex align-items-center me-4">
              <FaVolumeUp className="text-secondary me-2 text-white-50" style={{ fontSize: "14px" }} />
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="form-range text-white-50"
                style={{ width: "80px", height: "3px" }}
              />
            </div>
            <Button variant="danger" className="d-flex align-items-center" style={{ height: "30px", fontSize: "14px" }}>
              <FaUser className="me-2" style={{ fontSize: "16px" }} />
              Accedi
            </Button>
          </div>
        </Container>
      </Navbar>

      {/* Navbar per schermi piccoli (mobile) */}
      <Navbar expand="md" className="d-flex d-md-none bg-dark">
        <Container fluid className="d-flex justify-content-between align-items-center py-2">
          
          <Button variant="link" className="text-danger p-0">
            <FaBars style={{ fontSize: "20px" }} />
          </Button>

          
          <FaApple className="text-white ms-5" style={{ fontSize: "24px" }} />

         
          <Button variant="danger" size="sm" className="d-flex align-items-center">
            <FaUser className="me-1" style={{ fontSize: "14px" }} />
            Accedi
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
