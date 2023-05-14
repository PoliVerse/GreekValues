import { Stack } from 'react-bootstrap';

export default function Ideology(props) {
    return (
        <Stack className='ideology' gap={3}>
            <h2 className={`ideology-title ${props.color}`}>{props.ideology}</h2>
            <p>{props.description}</p>
        </Stack>
    )
}