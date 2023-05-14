import "./Home.css";
import { Stack } from "react-bootstrap";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Values from './Values/Values';

export default function Home() {
    return (
        <Stack className='home'>
            <Hero />
            <About />
            <Values />
        </Stack>
    );
}