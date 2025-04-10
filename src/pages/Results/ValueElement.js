import Axis from './Axis';
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

export default function ValueElement(props) {
    return (
        <div className='element' getValues={props.getValues} ref={props.valueRef} style={{ backgroundColor: '#001A33' }}>
            <h2 className='element-title text-center'>GreekValues</h2>
            <h2><span className='weight-300' id='a-label'></span></h2>
            <Axis img1={Conservatism} ideology1='conservatism' bgColor1='#005C97' value={props.a} img2={Progressivism} ideology2='progressivism' bgColor2='#FFBD59' />
            <h2><span className='weight-300' id='b-label'></span></h2>
            <Axis img1={Capitalism} ideology1='capitalism' bgColor1='#D4AF37' value={props.b} img2={Socialism} ideology2='socialism' bgColor2='#FF1616' />
            <h2><span className='weight-300' id='c-label'></span></h2>
            <Axis img1={Authority} ideology1='authority' bgColor1='#8C52FF' value={props.c} img2={Anarchy} ideology2='anarchy' bgColor2='#737373' />
            <h2><span className='weight-300' id='d-label'></span></h2>
            <Axis img1={Religion} ideology1='religion' bgColor1='#5271FF' value={props.d} img2={Secularism} ideology2='secularism' bgColor2='#38B6FF' />
            <h2><span className='weight-300' id='e-label'></span></h2>
            <Axis img1={Environment} ideology1='environment' bgColor1='#4CB963' value={props.e} img2={Industry} ideology2='industry' bgColor2='#938274' />
            <h2><span className='weight-300' id='f-label'></span></h2>
            <Axis img1={Nationalism} ideology1='nationalism' bgColor1='#FF914D' value={props.f} img2={Globalism} ideology2='globalism' bgColor2='#00C2CB' />
            <h2><span className='weight-300' id='g-label'></span></h2>
            <Axis img1={Assimilation} ideology1='assimilation' bgColor1='#FF5757' value={props.g} img2={Multiculturalism} ideology2='multiculturalism' bgColor2='#FF66C4' />
        </div>
    )
}