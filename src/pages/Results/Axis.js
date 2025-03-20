export default function Axis(props) {
    return (
        <div className='axis'>
            <img src={props.img1} className='axis-image' alt={`img-${props.ideology1}`} id={`img-${props.ideology1}`} height='128pt'/>
            <div className={`bar ${props.ideology1}`} id={`bar-${props.ideology1}`} style={{'width': `${props.value * 5}px`, 'backgroundColor': `${props.bgColor1}`}}><div className={`text-wrapper-${props.ideology1}`} id={`${props.ideology1}`}>{props.value}</div></div>
            <div className={`bar ${props.ideology2}`} id={`bar-${props.ideology2}`} style={{'width': `${(100-props.value) * 5}px`, 'backgroundColor': `${props.bgColor2}`}}><div className={`text-wrapper-${props.ideology2}`} id={`${props.ideology2}`}>{100-props.value}</div></div>
            <img src={props.img2} className='axis-image' alt={`img-${props.ideology2}`} id={`img-${props.ideology2}`} height='128pt'/>
        </div>
    )
}