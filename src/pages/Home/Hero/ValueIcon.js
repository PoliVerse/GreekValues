import { Stack } from "react-bootstrap";

export default function ValueIcon(props) {
    return (
        <Stack className="value-icon" style={{ width: '12rem' }}>
            <Stack className="bg" id={props.id}>
                <img src={props.src} alt={props.alt} width='75' height='75' />
            </Stack>
            <h4 className="icon-title">{props.title}</h4>
        </Stack>
    )
}