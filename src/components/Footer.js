import { Stack } from 'react-bootstrap';
import GreekValues from '../assets/img/GreekValues.png';
import PoliVerse from '../assets/img/Poliverse.png';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer p-4'>
            <Stack direction='horizontal' gap={3} className='d-flex justify-content-center align-items-center'>
                <Stack gap={3}>
                    <img src={PoliVerse} alt='Poliverse Logo' className='poliverse-logo' width='145' height='75' />
                    <p>Copyright @{currentYear} Poliverse</p>
                </Stack>
                <Stack gap={3}>
                    <img src={GreekValues} alt='GreekValues Logo' className='gv-logo' width='205' height='65' />
                    <p>Το απόλυτο κουίζ του ελληνικού πολιτικού φάσματος</p>
                </Stack>
            </Stack>
        </footer>
    )
}