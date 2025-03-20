import { Button, Stack } from 'react-bootstrap';
import './Results.css';
import ideologies from '../../components/Ideologies';
import parties from '../../components/Parties';
import ResultsGraphs from './ResultsGraphs';

export default function Results({a, b, c, d, e, f, g}) {
    let ideologyMatches = [];

    for (let i = 0; i < ideologies.length; i++) {
        let ideology = ideologies[i];
        let similarity = 0;
        for (let j = 0; j < 7; j++) {
            let axis = Object.keys(ideology.stats)[j];
            let value = ideology.stats[axis];
            let userValue = [a, b, c, d, e, f, g][j];
            similarity += Math.abs(value - userValue);
        }

        similarity = 100 - Math.round(similarity / 7);
        ideologyMatches.push({ "name": ideology.name, "desc": ideology.desc, "similarity": similarity });
    }

    let closestIdeology = ideologyMatches[0];
    let ideologySimilarity = 0;
    
    for (let i = 0; i < ideologyMatches.length; i++) {
        if (ideologyMatches[i].similarity > ideologySimilarity) {
            closestIdeology = ideologyMatches[i];
            ideologySimilarity = ideologyMatches[i].similarity;
        }
    }

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

    let partyMatches = [];
    for (let i = 0; i < parties.length; i++) {
        let party = parties[i];
        let similarity = 0;
        for (let j = 0; j < 7; j++) {
            let axis = Object.keys(party.stats)[j];
            let value = party.stats[axis];
            let userValue = [a, b, c, d, e, f, g][j];
            similarity += Math.abs(value - userValue);
        }

        similarity = 100 - Math.round(similarity / 7);
        partyMatches.push({ "name": party.name, "desc": party.desc, "img": party.img, "width": party.style.width, "height": party.style.height, "similarity": similarity });
    }

    let closestParty = partyMatches[0];
    let partySimilarity = 0;
    for (let i = 0; i < partyMatches.length; i++) {
        if (partyMatches[i].similarity > partySimilarity) {
            closestParty = partyMatches[i];
            partySimilarity = partyMatches[i].similarity;
        }
    }

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
            <ResultsGraphs a={a} b={b} c={c} d={d} e={e} f={f} g={g} closestIdeology={closestIdeology.name} closestParty={closestParty.name} partyImg={closestParty.img} listIdeologies={listIdeologies()} listParties={listParties()} />
            <div className='element'>
                <h2>Δεν μου αρέσουν τα αποτελέσματα!</h2>
                <p>Θυμηθείτε ότι ο στόχος σας δεν είναι να πάρετε 100% στα πάντα αλλά να δείτε πόσο συμφωνείτε με κάποιες θέσεις. Εάν θέλετε να στείλετε εποικοδομητική κριτική, επικοινωνήστε στο <a href='mailto:poliversegr@zohomail.eu'>poliversegr@zohomail.eu</a>.</p>
            </div>
            <Button className='results-btn' href='/' size='lg' variant='outline-primary'>Πίσω</Button>
        </div>
    )
}
