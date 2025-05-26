import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";

interface Project {
  title: string;
  description: string;
  link: string;
  skills: string[];
}

const projects: Project[] = [
  {
    title: "F1 Predictor",
    description: "ML model to predict F1 qualifying results.",
    link: "https://github.com/HitanshAgarwal/F1QualifyingPrediction",
    skills: ["Python", "HTML"],
  },
  {
    title: "Kishori's",
    description: "Catalogue Website for a jewelry company built using Flutter.",
    link: "https://kishoris.com/#/",
    skills: ["Flutter", "Canva"],
  },
  {
    title: "Freelance 3D Artist",
    description: "My Blender Portfolio",
    link: "https://www.behance.net/hitanshagarwal",
    skills: ["Blender 3D"],
  },
  {
    title: "Emergency Services",
    description:
      "An app which can be employed to request for emergency services using geolocation.",
    link: "https://github.com/HitanshAgarwal/emergency_services",
    skills: ["Flutter", "Figma"],
  },
  {
    title: "X-Uberance '22",
    description:
      "An application developed for the fest of a school for registration of participants and to keep track of the schedule of the fest.",
    link: "https://github.com/xuberance22/X-Uberance-22-App",
    skills: ["Flutter", "Firebase", "Adobe Creative Cloud"],
  },
];

const Projects: React.FC = () => (
  <Container className="py-5" id="projects" style={{ width: "100%" }}>
    <h2 className="text-center mb-4">Projects</h2>
    {projects.map((project, idx) => (
      <Row key={idx} className="mx-4">
        <Col md={4} className="mb-4">
          <Row>
            <a href={project.link} target="_blank">
              {project.title}
            </a>
          </Row>
          <Row style={{ paddingLeft: "10px" }}>
            {project.skills.map((skill, idx) => (
              <Badge
                key={idx}
                bg=""
                style={{
                  backgroundColor: "rgba(33, 32, 31, 1)",
                  width: `${skill.length * 11 + 10}px`,
                  marginRight: "5px",
                  marginBottom: "5px",
                }}
                className="fs-6 p-2"
              >
                {skill}
              </Badge>
            ))}
          </Row>
        </Col>
        <Col>
          <p>{project.description}</p>
        </Col>
      </Row>
    ))}
  </Container>
);

export default Projects;
