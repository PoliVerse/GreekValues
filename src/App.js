import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ScrollButton from './components/ScrollButton';
import Home from './pages/Home/Home';
import Ideologies from './pages/Ideologies/Ideologies';
import Instructions from './pages/Instructions/Instructions';
import Parties from './pages/Parties/Parties';
import Quiz from './pages/Quiz/Quiz';
import Results from './pages/Results/Results';
import Foooter from './components/Footer';

function App() {
  const [a, setA] = useState(50);
  const [b, setB] = useState(50);
  const [c, setC] = useState(50);
  const [d, setD] = useState(50);
  const [e, setE] = useState(50);
  const [f, setF] = useState(50);
  const [g, setG] = useState(50);
  const [showResults, setShowResults] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ScrollButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ideologies" element={<Ideologies />} />
          <Route path="/parties" element={<Parties />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/quiz" element={<Quiz a={a} b={b} c={c} d={d} e={e} f={f} g={g} showResults={showResults} setA={setA} setB={setB} setC={setC} setD={setD} setE={setE} setF={setF} setG={setG} setShowResults={setShowResults} />} />
          <Route path="/results" element={<Results a={a} b={b} c={c} d={d} e={e} f={f} g={g} />} />
        </Routes>
        <Foooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
