import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Aurora"
              description="Aurora is an AI-powered conversational agent designed to provide intelligent, context-aware responses by leveraging vector embeddings for semantic search and retrieval."
              ghLink="https://github.com/AniketAgra/Attack-Capital-Assignment"
              demoLink="https://attack-capital-assignment.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Aniket's Blog"
              description="My personal blog page build with React.js and Tailwind Css which takes the content from makdown files and renders it using React.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/AniketAgra/Aniket_sBlog"
              demoLink="https://aniketsblog-lgrb.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Moody Player"
              description="Built Moody Player, a React-based music recommendation app that detects user mood in real time using face-api.js
and recommends songs accordingly. Implemented admin-specific CRUD operations with role-based access control
(RBAC), where admins can upload/manage songs via Multer and ImageKit."
              ghLink="https://github.com/AniketAgra/moodyPlayer"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Edulearn"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/AniketAgra/BeyondChats"
              demoLink="https://beyondchats-cbtm.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Sanrakshan"
              description="Developed a MERN stack application for digitizing fire safety approvals with multi-level admin workflows, real-time
progress tracking via Socket.io, and role-based dashboards. Integrated a complaint ledger with insurance verification
to ensure compliance. Key features include document uploads, reference ID generation, and live status updates."
              ghLink="https://github.com/AyushSingh-Tomar/Sanrakshan"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
