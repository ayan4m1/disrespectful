import { Row, Col } from 'react-bootstrap';

import image from 'images/disrespect.png';

export default function Home() {
  return (
    <Row>
      <Col className="d-flex justify-content-center">
        <img
          alt="Dr. Disrespect is a pedophile. He admitted to having inappropriate conversations with a minor in 2017 which he covered up until 2024."
          src={image}
        />
      </Col>
    </Row>
  );
}
