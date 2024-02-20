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
          Mis trabajos <strong className="purple">recientes </strong>
        </h1>
        <p style={{ color: "white" }}>
        He aquí algunos proyectos en los que he trabajado recientemente.        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Tienda de Productos"
              description="Es una tienda online de compras todo en uno que ofrece una amplia gama de productos, desde electrónicos y moda hasta hogar y belleza. Con una interfaz intuitiva y fácil de usar."
              demoLink="https://grupo-8-examen.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Replica Airbnb"
              description="Una aplicación replica de Airbnb podría ser una plataforma de alquiler de alojamientos que permite a los usuarios encontrar, reservar y gestionar estadías en una variedad de lugares, desde apartamentos y casas hasta villas y habitaciones compartidas."
              demoLink="https://grupo-8-proyecto.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Réplica de Facebook"
              description="Una aplicación replica de Facebook sería una plataforma digital diseñada para imitar las principales funciones y características de la red social original."
              demoLink="https://task-zeta-nine.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Evaluaciones para Fundamentos de Programación"
              description="Una aplicación de evaluaciones para fundamentos de programación podría ser una plataforma en línea diseñada para ayudar a estudiantes y profesores a evaluar y mejorar sus habilidades en programación básica."
              demoLink="https://prueba-intermedia.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
