import { Container, Stack } from "react-bootstrap";
import "./Instructions.css";
import InstructionsBox from "./InstructionsBox";

export default function Instructions() {
    return (
        <Container className="instructions">
            <Stack gap={3}>
                <InstructionsBox />
            </Stack>
        </Container>
    );
}