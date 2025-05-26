import React from "react";
import { Container, Badge } from "react-bootstrap";

const skills: string[] = [
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Python",
  "C++",
  "C",
  "Flutter",
  "Dart",
  "Git",
  "Figma",
  "Blender 3D",
  "Adobe Creative Cloud",
  "Canva",
  "Wondershare Filmora",
];

const Skills: React.FC = () => (
  <Container className="text-center py-5" id="skills">
    <h2 className="mb-4">Skills</h2>
    <div className="d-flex flex-wrap gap-2 justify-content-center">
      {skills.map((skill, idx) => (
        <Badge
          key={idx}
          bg=""
          style={{
            backgroundColor: "rgba(33, 32, 31, 1)",
            width: `${skill.length * 11 + 10}px`,
          }}
          className="fs-6 p-2"
        >
          {skill}
        </Badge>
      ))}
    </div>
  </Container>
);

export default Skills;
