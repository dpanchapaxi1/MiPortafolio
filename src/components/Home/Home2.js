import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTAME <span className="purple"> HABLAR</span> ACERCA DE MI
            </h1>
            <p className="home-about-body">
              Soy una estudiante de las Universidad de las Fuerzas Armadas-ESPE
              <br />
              <br />Domino temas como:
              <i>
                <b className="purple"> C++, Javascript, React, phpMyAdmin, entre otros. </b>
              </i>
              <br />
              <br />
              Mi campo de interés es la construcción de &nbsp;
              <i>
                <b className="purple">Tecnologías y Productos Web</b> {" "}
                <b className="purple">

                </b>
              </i>
              <br />
              <br />
              Cuando es posible, también aplico mi pasión por el desarrollo de productos con <b className="purple">Node.js</b> y
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library y Frameworks
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js y Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUENTRAME EN </h1>
            <p>
              No dude en <span className="purple">contactarse  </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dpanchapaxi1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/patricia.anchapaxi.10/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dayana-patricia-anchapaxi-%EF%BF%BDacato-284609270/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dayana.p9da/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
