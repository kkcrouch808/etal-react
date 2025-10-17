import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={3} className="mb-5 mb-lg-0">
            <h2 className="footer-heading">Visit</h2>
            <p className="footer-text">
              et al.<br />
              KAHALA MKT.<br />
              4210 Waialae Ave.<br />
              Suite 401<br />
              Honolulu, HI 96816
            </p>
            <p className="mb-4">
              <a className="footer-link" href="#">Google Maps</a>
            </p>
            <p className="footer-text">(808) 732-2144</p>
          </Col>
          
          <Col lg={3} className="mb-5 mb-lg-0">
            <h2 className="footer-heading">Hours</h2>
            <p className="footer-text">Sunday - Thursday: 7am - 9pm</p>
            <p className="footer-text">Friday & Saturday: 7am - 10pm</p>
          </Col>
          
          <Col lg={3} className="mb-5 mb-lg-0">
            <h2 className="footer-heading">Links</h2>
            <ul className="list-unstyled footer-links">
              <li><a className="footer-link" href="#">Menus</a></li>
              <li><a className="footer-link" href="#">Reservations</a></li>
              <li><a className="footer-link" href="#">Takeout + Delivery</a></li>
              <li><a className="footer-link" href="#">Contact</a></li>
              <li><a className="footer-link" href="#">Privacy Policy</a></li>
            </ul>
          </Col>
          
          <Col lg={3} className="mb-5 mb-lg-0 d-flex justify-content-lg-end">
            <Image 
              src="/EtAl-Logo-Footer.webp" 
              alt="et al." 
              className="footer-logo"
              height={50}
              width={120}
            />
          </Col>
        </Row>
        
        <Row className="mb-5">
          <Col lg={3} className="mb-5 mb-lg-0">
            <h2 className="footer-heading">Social</h2>
            <a href="#" className="footer-social" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </Col>
          
          <Col lg={3} className="mb-5 mb-lg-0">
            <h2 className="footer-heading">Services</h2>
            <p className="footer-text">
              For private events,<br />
              please <a href="#" className="footer-link">click here</a> to email us.
            </p>
          </Col>
        </Row>
        
        <hr className="footer-divider" />
        
        <div className="footer-copyright mt-4">
          © et al. All rights reserved. <a href="#" className="footer-link">Credits</a>
        </div>
      </Container>
    </footer>
  );
}