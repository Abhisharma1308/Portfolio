import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import Amazon_Clone from "../../Assets/Projects/AmazonClone.png";
import GymManagenentSystem from "../../Assets/Projects/GYM.png";
import Ecart from "../../Assets/Projects/ecart.png";
import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue"> Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="E Cart"
              description="This is a functional eCommerce website that uses Html5, Css and javascript ."
              ghLink="https://github.com/Abhisharma1308/PROJECT"
              demoLink="http://127.0.0.1:5500/Ecommerce.html"
            />
          </Col>

           <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Amazon_Clone}
              title="Amazon Clone"
              description="Creating an Amazon clone involves developing a website with functionalities similar to Amazon, including product browsing,and search "
              ghLink="https://github.com/Abhisharma1308/Replica_amazon"
              demoLink="http://localhost:1234/"
            />
          </Col>
         <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={GymManagenentSystem}
              title="Gym Website"
              description="This Gym Management System website offers seamless member registration, class scheduling, and online booking, enhancing gym operations and user experience. It integrates attendance tracking, payment processing, and automated notifications to streamline gym management."
              ghLink="https://github.com/Abhisharma1308/Gym-Website"
              demoLink="gymwebsite-abhisheks-projects-cf1305b2.vercel.app"
            />
          </Col>

        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
