import { Button, Stack } from 'react-bootstrap';
import './Results.css';
import ideologies from '../../components/Ideologies';
import parties from '../../components/Parties';
import Axis from './Axis';
import Element from './Element';
import Conservatism from '../../assets/img/icons/conservatism.png';
import Progressivism from '../../assets/img/icons/progressivism.png';
import Capitalism from '../../assets/img/icons/capitalism.png';
import Socialism from '../../assets/img/icons/socialism.png';
import Authority from '../../assets/img/icons/authority.png';
import Anarchy from '../../assets/img/icons/anarchy.png';
import Religion from '../../assets/img/icons/religion.png';
import Secularism from '../../assets/img/icons/secularism.png';
import Environment from '../../assets/img/icons/environment.png';
import Industry from '../../assets/img/icons/industry.png';
import Nationalism from '../../assets/img/icons/nationalism.png';
import Globalism from '../../assets/img/icons/globalism.png';
import Assimilation from '../../assets/img/icons/assimilation.png';
import Multiculturalism from '../../assets/img/icons/multiculturalism.png';

export default function Results({a, b, c, d, e, f, g}) {
    // Find similarity between ideologies and user's results
    let ideologyMatches = [];
    for (let i=0; i<ideologies.length; i++) {
        let ideology = ideologies[i];
        let similarity = 0;
        for (let j=0; j<7; j++) {
            let axis = Object.keys(ideology.stats)[j];
            let value = ideology.stats[axis];
            let userValue = [a, b, c, d, e, f, g][j];
            similarity += Math.abs(value - userValue);
        }

        similarity = 100 - Math.round(similarity / 7);
        ideologyMatches.push({ "name": ideology.name, "desc": ideology.desc, "similarity": similarity });
    }

    // Find the closest ideology based on similarity
    let closestIdeology = ideologyMatches[0];
    let ideologySimilarity = 0;
    for(let i=0; i<ideologyMatches.length; i++) {
        if(ideologyMatches[i].similarity > ideologySimilarity) {
            closestIdeology = ideologyMatches[i];
            ideologySimilarity = ideologyMatches[i].similarity;
        }
    }

    // List the next ideologies
    function listIdeologies() {
        ideologyMatches = ideologyMatches.filter((ideology) => ideology.name !== closestIdeology.name);
        ideologyMatches = ideologyMatches.sort((a, b) => b.similarity - a.similarity);
        return ideologyMatches.map((ideology) => (
          <Stack className='ideology' direction='horizontal' gap={3} key={ideology.name}>
            <h3 className='text-left'>{ideology.name}</h3>
            <h2 className='text-right'>{ideology.similarity}%</h2>
          </Stack>
        ));
    }

    // Find similarity between parties and user's results
    let partyMatches = [];
    for(let i=0; i<parties.length; i++) {
        let party = parties[i];
        let similarity = 0;
        for(let j=0; j<7; j++) {
            let axis = Object.keys(party.stats)[j];
            let value = party.stats[axis];
            let userValue = [a, b, c, d, e, f, g][j];
            similarity += Math.abs(value - userValue);
        }

        similarity = 100 - Math.round(similarity / 7);
        partyMatches.push({ "name": party.name, "desc": party.desc, "img": party.img, "width": party.style.width, "height": party.style.height, "similarity": similarity });
    }

    // Find the closest party based on similarity
    let closestParty = partyMatches[0];
    let partySimilarity = 0;
    for(let i=0; i<partyMatches.length; i++) {
        if(partyMatches[i].similarity > partySimilarity) {
            closestParty = partyMatches[i];
            partySimilarity = partyMatches[i].similarity;
        }
    }

    // List the next parties
    function listParties() {
        partyMatches = partyMatches.filter((party) => party.name !== closestParty.name);
        partyMatches = partyMatches.sort((a, b) => b.similarity - a.similarity);
        return partyMatches.map((party) => (
            <Stack className='party' direction='horizontal' gap={5} key={party.name}>
                <img src={party.img} alt={party.name} className='party-image' width={party.width} height={party.height} />
                <h3 className='text-left'>{party.name}</h3>
                <h2 className='text-right'>{party.similarity}%</h2>
            </Stack>
        ));
    }

    return (
        <div className='results d-flex flex-column justify-content-center align-items-center text-center'>
            <h1>Αποτελέσματα</h1>
            <div className='element'>
                <h2 className='element-title text-center'>GreekValues</h2>
                <h2><span className='weight-300' id='a-label'></span></h2>
                <Axis img1={Conservatism} ideology1='conservatism' value={a} img2={Progressivism} ideology2='progressivism' />
                <h2><span className='weight-300' id='b-label'></span></h2>
                <Axis img1={Capitalism} ideology1='capitalism' value={b} img2={Socialism} ideology2='socialism' />
                <h2><span className='weight-300' id='c-label'></span></h2>
                <Axis img1={Authority} ideology1='authority' value={c} img2={Anarchy} ideology2='anarchy' />
                <h2><span className='weight-300' id='d-label'></span></h2>
                <Axis img1={Religion} ideology1='religion' value={d} img2={Secularism} ideology2='secularism' />
                <h2><span className='weight-300' id='e-label'></span></h2>
                <Axis img1={Environment} ideology1='environment' value={e} img2={Industry} ideology2='industry' />
                <h2><span className='weight-300' id='f-label'></span></h2>
                <Axis img1={Nationalism} ideology1='nationalism' value={f} img2={Globalism} ideology2='globalism' />
                <h2><span className='weight-300' id='g-label'></span></h2>
                <Axis img1={Assimilation} ideology1='assimilation' value={g} img2={Multiculturalism} ideology2='multiculturalism' />
            </div>
            <Element header='Πλησιέστερη Ιδεολογία' label='ideology-label' spanlabel={closestIdeology.name} desc='ideodesc' desclabel='ideodesc-label' next='next-ideology-matches' p='Με πλησιέστερο το 100% και χαμηλότερο το 0%, δείτε πώς αντιστοχείτε τις άλλες ιδεολογίες' fn={listIdeologies()} />
            <Element header='Πλησιέστερο Κόμμα' label='party-label' spanlabel={closestParty.name} desc='partydesc' desclabel='partydesc-label' img={closestParty.img} next='next-party-matches' p='Με πλησιέστερο το 100% και χαμηλότερο το 0%, δείτε πώς αντιστοχείτε τα άλλα κόμματα' fn={listParties()} />
            <div className='element'>
                <h2>Δεν μου αρέσουν τα αποτελέσματα!</h2>
                <p>Θυμηθείτε ότι ο στόχος σας δεν είναι να πάρετε 100% στα πάντα αλλά να δείτε πόσο συμφωνείτε με κάποιες θέσεις. Εάν θέλετε να στείλετε εποικοδομητική κριτική, επικοινωνήστε στο <a href='mailto:poliversegr@zohomail.eu'>poliversegr@zohomail.eu</a>.</p>
            </div>
            <Button className='results-btn' href='/' size='lg' variant='outline-primary'>Πίσω</Button>
        </div>
    )
}
