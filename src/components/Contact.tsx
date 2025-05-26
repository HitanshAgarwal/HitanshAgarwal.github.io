import React from "react";
import { Container, Row } from "react-bootstrap";
import "../App.css";

interface Contacts {
  app: string;
  link: string;
  username: string;
}

const contacts: Contacts[] = [
  {
    app: "Email",
    link: "mailto:hitanshagarwal@gmail.com",
    username: "hitanshagarwal@gmail.com",
  },
  {
    app: "GitHub",
    link: "https://github.com/HitanshAgarwal",
    username: "HitanshAgarwal",
  },
  {
    app: "LinkedIn",
    link: "https://www.linkedin.com/in/hitansh-agarwal-98572b204/",
    username: "Hitansh Agarwal",
  },
  {
    app: "Instagram",
    link: "https://www.instagram.com/_.hitxnsh._/",
    username: "_.hitxnsh._",
  },
  {
    app: "X (formerly Twitter)",
    link: "https://x.com/aech_it",
    username: "aech_it",
  },
];

const Contact: React.FC = () => (
  <Container className="py-5 text-center" id="contact">
    <h2>Contact</h2>
    <Row>
      {contacts.map((contact, idx) => (
        <p key={idx} style={{ textAlign: "center" }}>
          {contact.app}: <a href={contact.link}>{contact.username}</a>
        </p>
      ))}
    </Row>
  </Container>
);

export default Contact;
