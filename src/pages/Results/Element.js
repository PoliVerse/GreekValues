export default function Element(props) {
    return (
        <div className='result-element text-center'>
            <div className="element">
                <h2>{props.header}: <span className="weight-300" id={props.label}>{props.spanlabel}</span></h2>
                <p className={props.desc}><span className="weight-300" id={props.desclabel}>{props.spandesclabel}</span></p>
            </div>
            <div className="element">
                <h2>Επόμενες αντιστοιχίες</h2>
                <p>{props.p}:</p>
                <dl id={props.next}>{props.fn}</dl>
            </div>
        </div>
    )
}