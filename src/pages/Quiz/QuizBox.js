import { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import questions from "../../components/Questions";

export default function QuizBox({a, b, c, d, e, f, g, showResults, setA, setB, setC, setD, setE, setF, setG, setShowResults}) {
    const navigate = useNavigate();
    const [currentQuestion , setCurrentQuestion] = useState(0);

    // Go to the next question and update the values
    const nextQuestion = (answer) => {
        const nextA = a + answer * questions[currentQuestion].effect.a;
        const nextB = b + answer * questions[currentQuestion].effect.b;
        const nextC = c + answer * questions[currentQuestion].effect.c;
        const nextD = d + answer * questions[currentQuestion].effect.d;
        const nextE = e + answer * questions[currentQuestion].effect.e;
        const nextF = f + answer * questions[currentQuestion].effect.f;
        const nextG = g + answer * questions[currentQuestion].effect.g;

        setA(Math.max(0, Math.min(100, nextA)));
        setB(Math.max(0, Math.min(100, nextB)));
        setC(Math.max(0, Math.min(100, nextC)));
        setD(Math.max(0, Math.min(100, nextD)));
        setE(Math.max(0, Math.min(100, nextE)));
        setF(Math.max(0, Math.min(100, nextF)));
        setG(Math.max(0, Math.min(100, nextG)));
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setShowResults(true);
          navigate({
            pathname: '/results',
          });
        }
    };

    // Go to the previous question and update the values
    const previousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            const previousA = a - questions[currentQuestion-1].effect.a;
            const previousB = b - questions[currentQuestion-1].effect.b;
            const previousC = c - questions[currentQuestion-1].effect.c;
            const previousD = d - questions[currentQuestion-1].effect.d;
            const previousE = e - questions[currentQuestion-1].effect.e;
            const previousF = f - questions[currentQuestion-1].effect.f;
            const previousG = g - questions[currentQuestion-1].effect.g;
            setA(Math.max(0, Math.min(100, previousA)));
            setB(Math.max(0, Math.min(100, previousB)));
            setC(Math.max(0, Math.min(100, previousC)));
            setD(Math.max(0, Math.min(100, previousD)));
            setE(Math.max(0, Math.min(100, previousE)));
            setF(Math.max(0, Math.min(100, previousF)));
            setG(Math.max(0, Math.min(100, previousG)));
        }
    };

    return (
        <Stack className="quiz-box text-center" gap={3}>
            <Stack className="question-box d-flex justify-content-around">
                <h5 className="question" id="question-text">Ερώτηση {currentQuestion+1} από {questions.length}</h5>
                <h2 style={{"textAlign": "center"}}  id="question-number">{questions[currentQuestion].question}</h2>
            </Stack>
            <Stack gap={1} id="answers">
                <Button onClick={() => nextQuestion(1.0)} style={{"backgroundColor": "#1B5E20", "border": "2px solid #1B5E20"}}>Συμφωνώ απολύτως</Button>
                <Button onClick={() => nextQuestion(0.5)} style={{"backgroundColor": "#4CAF50", "border": "2px solid #4CAF50"}}>Συμφωνώ</Button>
                <Button onClick={() => nextQuestion(0)} style={{"backgroundColor": "#BBBBBB", "border": "2px solid #BBBBBB"}}>Ουδέτερος/Δεν είμαι σίγουρος</Button>
                <Button onClick={() => nextQuestion(-0.5)} style={{"backgroundColor": "#F44336", "border": "2px solid #F44336"}}>Διαφωνώ</Button>
                <Button onClick={() => nextQuestion(-1.0)} style={{"backgroundColor": "#B71C1C", "border": "2px solid #B71C1C"}}>Διαφωνώ απολύτως</Button>
                <Button onClick={previousQuestion} variant="secondary">Πίσω</Button>
            </Stack>
        </Stack>
    );
}