'use client';

import { Container, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap';
import { useState } from 'react';

export default function ReservationSection() {
  const [partySize, setPartySize] = useState('2 people');
  const [date, setDate] = useState('2025-10-08');
  const [time, setTime] = useState('7:00 PM');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Reservation search placeholder');
  };

  return (
    <section className="reservation-section py-5">
      <Container>
        <div className="reservation-card mx-auto">
          <h2 className="reservation-title text-center mb-4">Make a Reservation</h2>
          <Form className="reservation-form" onSubmit={handleSubmit}>
            <Row className="g-3 justify-content-center">
              <Col md={4} sm={6}>
                <FloatingLabel controlId="partySize" label="Party Size">
                  <Form.Select 
                    value={partySize} 
                    onChange={(e) => setPartySize(e.target.value)}
                    aria-label="Party size"
                  >
                    <option>1 person</option>
                    <option>2 people</option>
                    <option>3 people</option>
                    <option>4 people</option>
                    <option>5 people</option>
                    <option>6 people</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col md={4} sm={6}>
                <FloatingLabel controlId="resDate" label="Date">
                  <Form.Control 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                    aria-label="Reservation date"
                  />
                </FloatingLabel>
              </Col>
              <Col md={4} sm={6}>
                <FloatingLabel controlId="resTime" label="Time">
                  <Form.Select 
                    value={time} 
                    onChange={(e) => setTime(e.target.value)}
                    aria-label="Reservation time"
                  >
                    <option>5:00 PM</option>
                    <option>5:30 PM</option>
                    <option>6:00 PM</option>
                    <option>6:30 PM</option>
                    <option>7:00 PM</option>
                    <option>7:30 PM</option>
                    <option>8:00 PM</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>
            <div className="text-center mt-4">
              <Button type="submit" variant="dark" className="btn-reserve px-5 py-3">
                Find a Table
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </section>
  );
}