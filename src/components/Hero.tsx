import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

interface HeroProps {
  toggleBackground: () => void;
}

const Hero: React.FC<HeroProps> = ({ toggleBackground }) => (
  <div
    className="d-flex align-items-center"
    id="hero"
    style={{ height: "30vh", width: "80%" }}
  >
    <Container fluid>
      <Row className="justify-content-center text-left">
        <Col>
          <motion.div
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 12px rgba(256, 256, 256, 0.5)",
            }}
            style={{ textShadow: "0 0 0 rgba(0, 0, 0, 0)" }}
          >
            <h1
              className="display-4"
              style={{ paddingLeft: "10%", cursor: "pointer" }}
              onClick={toggleBackground}
            >
              Hi, I'm Hitansh Agarwal
            </h1>
          </motion.div>
          <a
            href="../public/resume.pdf"
            target="_blank"
            style={{ paddingLeft: "11%" }}
          >
            View Resume
          </a>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Hero;
