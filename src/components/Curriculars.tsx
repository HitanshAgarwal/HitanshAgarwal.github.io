import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface Curricular {
  title: string;
  description: string;
  club: string;
  time: string;
}

const curriculars: Curricular[] = [
  {
    title: "Human Resources Coordinator",
    description:
      "Supervised 70 committee members by coordinating timelines and departmental activities.",
    club: "IAESTE LC Manipal",
    time: "Oct 24 - Present",
  },
  {
    title: "Management Committee Member",
    description:
      "Developed strategic plans for the coding and app development domains of the club for the upcoming tenure.",
    club: "IECSE Manipal",
    time: "Sep 24 - Present",
  },
  {
    title: "Advisory Board",
    description:
      "Designed an application development curriculum alongside the Head of the Domain.",
    club: "ACM Manipal Chapter",
    time: "Aug 24 - Present",
  },
  {
    title: "Organizing Committee Member",
    description:
      "Organized and coordinated the Revels Proshow 2025, managing event logistics and artist coordination for the flagship cultural festival.",
    club: "Revels Proshow 2025",
    time: "Jan 25 - Mar 25",
  },
];

const Curriculars: React.FC = () => (
  <Container className="py-5" id="curriculars" style={{ width: "100%" }}>
    <h2 className="text-center mb-4">Extra Curriculars</h2>
    {curriculars.map((curricular, idx) => (
      <Row key={idx} className="mx-4">
        <Col md={2}>
          <p>{curricular.club}</p>
        </Col>
        <Col md={2}>
          <p>{curricular.title}</p>
        </Col>
        <Col md={3}>
          <p>{curricular.time}</p>
        </Col>
        <Col md={5}>
          <p>{curricular.description}</p>
        </Col>
      </Row>
    ))}
  </Container>
);

export default Curriculars;
