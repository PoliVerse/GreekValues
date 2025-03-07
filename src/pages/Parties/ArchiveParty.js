import { Stack } from 'react-bootstrap';

export default function ArchiveParty(props) {
    return (
        <Stack className='party'>
            <div className='d-flex align-items-center'>
                <img className={`party-logo ${props.img}`} src={props.logo} alt={props.name} />
                <div className='party-info' style={props.margin}>
                    <h2 className='party-title' style={{'color': `${props.color}`}}>{props.party}</h2>
                    <p>{props.description}</p>
                    <p>Δημοσκοπική απήχηση: <span style={{'color': `${props.color}`}}>{props.poll}%</span></p>
                    <p>Προηγούμενες εκλογές: <span style={{'color': `${props.color}`}}>{props.percentage}</span></p>
                </div>
            </div>
        </Stack>
    )
}