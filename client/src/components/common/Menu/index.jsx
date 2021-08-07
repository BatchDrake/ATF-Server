import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faMedal, faCalendar, faUserFriends, faHistory, faMoneyBillWave, faUserCircle, faGlassCheers } from '@fortawesome/free-solid-svg-icons';

function Menu() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">ATF</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/ranking"><Icon icon={faMedal} /> Clasificación</Nav.Link>
                        <Nav.Link href="/history"><Icon icon={faHistory} /> Historial</Nav.Link>
                        <Nav.Link href="/announcements"><Icon icon={faCalendar} /> Convocatorias</Nav.Link>
                        <Nav.Link href="/invites"><Icon icon={faUserFriends} /> Invitaciones</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Aministración" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/admin/scores"><Icon icon={faMoneyBillWave} /> Puntis</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/users"><Icon icon={faUserCircle} /> Participantes</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/parties"><Icon icon={faGlassCheers} /> Fiestas</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Perfil" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/edit-profile">Tu cuenta</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/logout">Cerrar sesión</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu;