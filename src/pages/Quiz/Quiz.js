import { Container } from "react-bootstrap";
import "./Quiz.css";
import QuizBox from "./QuizBox";

export default function Quiz({a, b, c, d, e, f, g, showResults, setA, setB, setC, setD, setE, setF, setG, setShowResults}) {
    return (
        <Container className="quiz">
            <h1 className='quiz-title'>GreekValues</h1>
            <QuizBox a={a} b={b} c={c} d={d} e={e} f={f} g={g} showResults={showResults} setA={setA} setB={setB} setC={setC} setD={setD} setE={setE} setF={setF} setG={setG} setShowResults={setShowResults} />
        </Container>
    )
}