import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';

export default function MenusSection() {
  return (
    <section className="menus-section pt-5 pb-6">
      <Container>
        <hr className="menus-top-border mb-5" />

        <Row className="gy-4 align-items-center">
          <Col lg={6}>
            <div className="menus-image-wrapper">
              <Image 
                src="/menus.webp" 
                alt="Dining table" 
                className="img-fluid menus-image"
                width={600}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </Col>

          <Col lg={6} className="d-flex align-items-center">
            <div className="menus-content text-center text-lg-start ms-lg-5">
              <h2 className="menus-title mb-4">Menus</h2>
              <p className="menus-description mb-4">
                The name &ldquo;et al.&rdquo; captures the spirit of our restaurant, which features a seasonal menu
                reflecting the melting pot of cultural ingredients and cooking techniques in Hawaii and abroad.
              </p>

              <div className="menus-schedule mb-4">
                <p className="menu-label">BRUNCH</p>
                <p className="menu-time">7am – 2:30pm, daily</p>

                <p className="menu-label mt-3">DINNER</p>
                <p className="menu-time mb-1">Sunday – Thursday, 4pm – 8:30pm</p>
                <p className="menu-time">Friday – Saturday, 4pm – 8:45pm</p>

                <p className="menu-label mt-3">PAU HANA</p>
                <p className="menu-time">Daily, 2:30pm to 5:30pm</p>
              </div>

              <Button href="#" variant="" className="btn-menu px-4 py-3">View Menus</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}