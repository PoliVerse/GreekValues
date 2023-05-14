import { Container, Nav, Navbar } from "react-bootstrap";
import GreekValues from "../assets/img/GreekValues.png";

export default function Header() {
    return (
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/"><img src={GreekValues} alt="gv-logo" className="gv-logo" width="140" height="40" /></Navbar.Brand>
                <Navbar.Toggle aria-controls='gv-nav' />
                <Navbar.Collapse id='gv-nav'>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Αρχική</Nav.Link>
                        <Nav.Link href="/instructions">Οδηγίες</Nav.Link>
                        <Nav.Link href="/quiz">Ερωτηματολόγιο</Nav.Link>
                        <Nav.Link href="/results" className="results" disabled> Αποτελέσματα</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}