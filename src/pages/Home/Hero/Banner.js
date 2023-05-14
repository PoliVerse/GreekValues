import { Stack } from 'react-bootstrap';
import Conservatism from '../../../assets/img/icons/conservatism.png';
import Progressivism from '../../../assets/img/icons/progressivism.png';
import Capitalism from '../../../assets/img/icons/capitalism.png';
import Socialism from '../../../assets/img/icons/socialism.png';
import Authority from '../../../assets/img/icons/authority.png';
import Anarchy from '../../../assets/img/icons/anarchy.png';
import Religion from '../../../assets/img/icons/religion.png';
import Secularism from '../../../assets/img/icons/secularism.png';
import Environment from '../../../assets/img/icons/environment.png';
import Industry from '../../../assets/img/icons/industry.png';
import Nationalism from '../../../assets/img/icons/nationalism.png';
import Globalism from '../../../assets/img/icons/globalism.png';
import Assimilation from '../../../assets/img/icons/assimilation.png';
import Multiculturalism from '../../../assets/img/icons/multiculturalism.png';

export default function Banner() {
    return (
        <Stack className='banner' gap={5}>
            <div className='values' direction='horizontal' gap={4}>
                <div className='value-frame'>
                    <h3>ΚΟΙΝΩΝΙΑ</h3>
                    <Stack direction='horizontal' gap={4}>
                        <img src={Conservatism} alt='conservatism' className='value-icon' />
                        <img src={Progressivism} alt='progressivism' className='value-icon' />
                    </Stack>
                </div>
                <div className='value-frame'>
                    <h3>ΟΙΚΟΝΟΜΙΑ</h3>
                    <Stack direction='horizontal' gap={4}>
                        <img src={Capitalism} alt='capitalism' className='value-icon' />
                        <img src={Socialism} alt='socialism' className='value-icon' />
                    </Stack>
                </div>
                <div className='value-frame'>
                    <h3>ΚΥΒΕΡΝΗΣΗ</h3>
                    <Stack direction='horizontal' gap={4}>
                        <img src={Authority} alt='authority' className='value-icon' />
                        <img src={Anarchy} alt='anarchy' className='value-icon' />
                    </Stack>
                </div>
            </div>
            <div className='values' direction='horizontal' gap={4}>
                <div className='value-frame'>
                    <h3>ΘΡΗΣΚΕΙΑ</h3>
                    <Stack className='religion-frame' direction='horizontal' gap={4}>
                        <img src={Religion} alt='religion' className='value-icon' />
                        <img src={Secularism} alt='secularism' className='value-icon' />
                    </Stack>
                </div>
            </div>
            <div className='values'>
                <div className='value-frame'>
                    <h3>ΠΕΡΙΒΑΛΛΟΝ</h3>
                    <Stack direction='horizontal' gap={4}>
                        <img src={Environment} alt='environment' className='value-icon' />
                        <img src={Industry} alt='industry' className='value-icon' />
                    </Stack>
                </div>
                <div className='value-frame'>
                    <h3>ΕΘΝΟΣ</h3>
                    <Stack direction='horizontal' gap={4}>
                        <img src={Nationalism} alt='nationalism' className='value-icon' />
                        <img src={Globalism} alt='globalism' className='value-icon' />
                    </Stack>
                </div>
                <div className='value-frame'>
                    <h3>ΠΟΛΙΤΙΣΜΟΣ</h3>
                    <Stack direction='horizontal' gap={4}>
                        <img src={Assimilation} alt='assimilation' className='value-icon' />
                        <img src={Multiculturalism} alt='multiculturalism' className='value-icon' />
                    </Stack>
                </div>
            </div>
        </Stack>

    );
}