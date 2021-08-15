import React from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";

function UserForm({ value }) {
  return (
    <Row xs={1} md={2}>
      <Col className="d-flex flex-column">
        <Row className="mb-auto">
          <Col className="d-flex justify-content-center">
            <Image className="w-50" src={value.avatar} roundedCircle />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Modificar avatar</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>
        </Row>
      </Col>
      <Col>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre del participante"
              defaultValue={value.name}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Dirección de correo electrónico"
              defaultValue={value.email}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLocation">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ciudad de residencia del participante"
              defaultValue={value.location.name}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formVictories">
            <Form.Label>Victorias ATF</Form.Label>
            <Form.Control
              type="number"
              min="0"
              placeholder="Cantidad de victorias ATF"
              defaultValue={value.victories}
            />
          </Form.Group>
        </Form>

        <Button variant="primary">Guardar</Button>
      </Col>
    </Row>
  );
}

export default UserForm;
