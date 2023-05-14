import { Stack } from 'react-bootstrap';

export default function Party(props) {
    return (
        <Stack className='party'>
            <div className='party-div d-flex align-items-center'>
                <img className='party-logo' src={props.logo} alt={props.name} width={props.width} height={props.height} />
                <div className='party-info' style={props.margin}>
                    <h2 className={`party-title ${props.color}`}>{props.party}</h2>
                    <p>{props.description}</p>
                    <p>Προηγούμενες εκλογές: <span className={`${props.color}`}>{props.percentage}</span></p>
                </div>
            </div>
        </Stack>
    )
}