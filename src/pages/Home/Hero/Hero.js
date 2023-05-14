import './Hero.css';
import { Button, Container, Stack } from "react-bootstrap";
import Banner from "./Banner";

export default function Hero() {
    return (
        <Container className="hero">
            <Stack className='d-flex justify-content-center align-items-center' gap={5}>
                <Stack className="hero-text" gap={2}>
                    <h1 className='gv-title'>GreekValues</h1>
                    <h2>Το απόλυτο κουίζ του ελληνικού πολιτικού φάσματος</h2>
                </Stack>
                <Banner />
                <Button className="btn start-btn" href="/instructions" size='lg' variant='primary'>Ξεκινήστε τώρα!</Button>
                <Stack className='d-flex justify-content-center align-items-center' direction='horizontal' gap={4}>
                    <Button className="btn" href="/ideologies" size='lg' variant='outline-primary'>Ιδεολογίες</Button>
                    <Button className="btn" href="/parties" size='lg' variant='outline-primary'>Κόμματα</Button>
                </Stack>
            </Stack>
        </Container>
    );
}