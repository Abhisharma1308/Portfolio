import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
            Hi Everyone, I am <span className="primary-header">Abhishek </span> from Jalandhar, Punjab, India. I am a computer science under graduate and a passionate programmer.
            <br />
            <br />
            In addition to coding, here are some other things I love to do!!!!!!!!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Problem-Solving Skill
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Verbal Communication
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Teamwork and Collaboration
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Continuous Learning
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
