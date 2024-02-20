import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">Dayana Anchapaxi </span>
            de <span className="purple"> Sangolquí, Ecuador.</span>
            <br />
            Actualmente estoy cursando 5to semestre de la carrera de Ingeniería en TI.
            <br />
            I tengo completado algunos cursos desarrollados a desarrollo web.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Juegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Esfuerzate por construir cosas que marquen la diferencia!"{" "}
          </p>
          <footer className="blockquote-footer">Dayana Anchapaxi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
