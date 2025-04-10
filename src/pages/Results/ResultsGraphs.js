import { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { useScreenshot } from 'use-react-screenshot';
import Element from './Element';
import ValueElement from './ValueElement';

export default function ResultsGraphs(props) {
    const [screenshot, takeScreenshot] = useScreenshot();
    const valueRef = useRef(null);
    const ideologyRef = useRef(null);
    const partyRef = useRef(null);

    const getValues = async() => {
        if (valueRef.current) { 
            console.log("Taking screenshot of valueRef");
            let screenshot = await takeScreenshot(valueRef.current);
            downloadScreenshot(screenshot, "Αποτελέσματα GreekValues.png");
        }
        else console.error('Value reference is not set.');
    };
    
    const getIdeologies = async () => {
        if (ideologyRef.current) {
            let screenshot = await takeScreenshot(ideologyRef.current);
            downloadScreenshot(screenshot, "Ιδεολογίες GreekValues.png");
        } else console.error('Ideology reference is not set.');
    };

    const getParties = async () => {
        if (partyRef.current) {
            let screenshot = await takeScreenshot(partyRef.current);
            downloadScreenshot(screenshot, "Κόμματα GreekValues.png");
        } else console.error('Party reference is not set.');
    };

    const downloadScreenshot = (image, filename) => {
        let a = document.createElement('a');
        a.href = image;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    function isMobileDevice() {
        return window.innerWidth <= 768;
    }

    return (
        <div className='result-charts d-flex flex-column justify-content-center align-items-center text-center'>
            <ValueElement getValues={getValues} valueRef={valueRef} a={props.a} b={props.b} c={props.c} d={props.d} e={props.e} f={props.f} g={props.g} />
            { !isMobileDevice() ? <Button className='screenshot-btn' variant='primary' onClick={getValues}>Λήψη Screenshot</Button> : '' }
            <Element header='Πλησιέστερη Ιδεολογία' label='ideology-label' spanlabel={props.closestIdeology} desc='ideodesc' desclabel='ideodesc-label' next='next-ideology-matches' p='Με πλησιέστερο το 100% και χαμηλότερο το 0%, δείτε πώς αντιστοχείτε τις άλλες ιδεολογίες' fn={props.listIdeologies} getIdeologies={getIdeologies} ref={ideologyRef} />
            { !isMobileDevice() ? <Button className='screenshot-btn' variant='primary' onClick={getIdeologies}>Λήψη Screenshot</Button> : '' }
            <Element header='Πλησιέστερο Κόμμα' label='party-label' spanlabel={props.closestParty} desc='partydesc' desclabel='partydesc-label' img={props.partyImg} next='next-party-matches' p='Με πλησιέστερο το 100% και χαμηλότερο το 0%, δείτε πώς αντιστοχείτε τα άλλα κόμματα' fn={props.listParties} getParties={getParties} ref={partyRef} />
            { !isMobileDevice() ? <Button className='screenshot-btn' variant='primary' onClick={getParties}>Λήψη Screenshot</Button> : '' }
        </div>
    )
}