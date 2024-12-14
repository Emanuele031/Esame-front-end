import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterBottom: React.FC = () => {
  const currentYear: number = new Date().getFullYear(); // Calcola l'anno corrente

  return (
    <footer style={{ backgroundColor: "#323232" }} className="text-muted mt-5">
      <Container>
        <Row className=" pt-3 text-start text-white">
          <Col xs={12} className="ps-0">
            <div className="mb-2">
              <small>Italia | English (UK)</small>
            </div>
            <div>
              <small>
                Copyright &copy; {currentYear} Apple Inc. Tutti i diritti riservati.
              </small>
            </div>
            <div className="mt-0">
              <a href="#" className="text-white text-decoration-none">
                Condizioni dei servizi internet
              </a>
              <span className="mx-2 text-white-50">|</span>
              <a href="#" className="text-white text-decoration-none">
                Apple Music e privacy
              </a>
              <span className="mx-2 text-white-50">|</span>
              <a href="#" className="text-white text-decoration-none">
                Avviso sui cookie
              </a>
              <span className="mx-2 text-white-50">|</span>
              <a href="#" className="text-white text-decoration-none">
                Supporto
              </a>
              <span className="mx-2 text-white-50">|</span>
              <a href="#" className="text-white text-decoration-none">
                Feedback
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterBottom;
