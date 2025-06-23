import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import {
  SiC,
  SiCplusplus,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiSass,
  SiFirebase,
  SiBabel,
  SiJest,
  SiMocha,
  SiExpress,
  SiBootstrap,
  SiGooglecloud,
  SiMysql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiRedux /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTypescript /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTailwindcss /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSass /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiCss3 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiHtml5 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiBabel /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiJest /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMocha /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiBootstrap /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiC /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCplusplus /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiExpress /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiMongodb /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMysql /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
    </Row>
  );
}

export default Techstack;