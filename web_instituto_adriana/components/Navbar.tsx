"use client";

import Link from "next/link";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  Button,
} from "react-bootstrap";

export default function Menu() {
  return (
    <Navbar expand="lg" bg="light" className="border-bottom">
      <Container>
        <Navbar.Brand as={Link} href="/">
          IES Cura Valera
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">
              Inicio
            </Nav.Link>

            <NavDropdown title="Noticias">
              <NavDropdown.Item as={Link} href="/noticias/ultimas">
                Últimas noticias
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/noticias/becas">
                Becas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/noticias/actividades">
                Actividades
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/noticias/eventos">
                Eventos
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Oferta Educativa">
              <NavDropdown.Item as={Link} href="/oferta-educativa/eso">
                ESO
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/oferta-educativa/bachillerato">
                Bachillerato
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/oferta-educativa/fp">
                FP
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Biblioteca">
              <NavDropdown.Item as={Link} href="/biblioteca/biblioweb">
                Biblioweb
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/biblioteca/recomendaciones">
                Recomendaciones
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} href="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
