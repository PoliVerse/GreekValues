import { OverlayTrigger, Stack, Tooltip } from 'react-bootstrap';

export default function Party(props) {
    return (
        <Stack className='party'>
            <div className='d-flex align-items-center'>
                <img className={`party-logo ${props.img}`} src={props.logo} alt={props.name} />
                <div className='party-info' style={props.margin}>
                    <h2 className='party-title' style={{'color': `${props.color}`}}>{props.party}</h2>
                    <p>{props.description}</p>
                    <p>Δημοσκοπική απήχηση: <span style={{'color': `${props.color}`}}>{props.poll}%</span></p>
                    <p className='d-flex gap-4'>Προηγούμενες εκλογές: 
                        <OverlayTrigger placement='bottom' overlay={<Tooltip id='tooltip-23'>{props.percentage23}</Tooltip>}>
                            <button className='party-btn' style={{'backgroundColor': `${props.color}`, 'borderColor': `${props.color}`}} type='button'>Βουλευτικές εκλογές 2023</button>
                        </OverlayTrigger>
                        <OverlayTrigger placement='bottom' overlay={<Tooltip id='tooltip-24'>{props.percentage24}</Tooltip>}>
                            <button className='party-btn' style={{'backgroundColor': `${props.color}`, 'borderColor': `${props.color}`}} type='button'>Ευρωεκλογές 2024</button>
                        </OverlayTrigger>
                    </p>
                </div>
            </div>
        </Stack>
    )
}