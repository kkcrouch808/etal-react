import { Container, Row, Col } from 'react-bootstrap';

export default function WelcomeSection() {
  return (
    <section className="welcome-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={9} className="text-center">
            <h1 className="welcome-title mb-4">Welcome</h1>
            <p className="welcome-description mb-5">
              et al. is a full service restaurant, bar and neighborhood eatery 
              offering an imaginative menu of multi-regional dishes drawing 
              inspiration from local produce and ingredients at the peak of 
              seasonal flavor.
            </p>
            <hr className="welcome-divider mx-auto mb-5" />
            <p className="location-description">
              Found in KAHALA MKT. by Foodland, et al. derives its name from 
              the latin term meaning &ldquo;and others,&rdquo; and the phrase reflects not only 
              the multitude of flavors and ingredients on the menu and inviting 
              nature of the restaurant, but speaks to the award-winning space as a 
              gathering place of community, friends, family and others.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}