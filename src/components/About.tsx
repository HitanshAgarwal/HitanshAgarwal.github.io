import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

const About: React.FC = () => (
  <div
    className="about-section d-flex align-items-center"
    id="about"
    style={{ width: "100%" }}
  >
    <Container fluid>
      <Row className="justify-content-center text-center mx-4">
        <Col>
          <h2>About Me</h2>
          <p>
            I am a passionate and driven junior at Manipal Institute of
            Technology, specializing in Software Engineering with a strong
            interest in Web and App Development, as well as Data Analytics. My
            academic journey is guided by a curiosity for how technology and
            design converge to solve real-world problems and create meaningful
            digital experiences.
          </p>
          <p>
            Alongside development, I actively explore the creative side of
            technology through tools like Blender 3D, Figma, and Canva. These
            platforms enable me to design intuitive interfaces, craft compelling
            visuals, and experiment with 3D modeling—skills that complement my
            technical projects and broaden my creative perspective.
          </p>
          <p>
            Outside the world of tech, I’m an avid follower of Formula 1 and
            cricket, both of which inspire my appreciation for performance,
            precision, and strategy. I also enjoy reading fiction, which keeps
            my imagination active and fuels a creative mindset.
          </p>
          <p>
            I enjoy building solutions that blend functionality with thoughtful
            design, and I’m always eager to learn, experiment, and grow as a
            developer and designer.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
