import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiFigma,
  SiGooglecloud,
  SiFirebase
} from "react-icons/si";

import {
  DiGit,
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><SiFigma /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiVisualstudiocode /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostman /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSlack /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiVercel /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGooglecloud /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFirebase /></Col>
    </Row>
  );
}

export default Toolstack;