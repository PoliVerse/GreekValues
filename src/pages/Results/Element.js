import React from 'react';

const Element = React.forwardRef((props, ref) => {
    const addPartyLogo = props.desclabel === 'partydesc-label';

    return (
        <div className='result-element text-center' ref={ref} style={{ backgroundColor: '#001A33' }}>
            <div className='element'>
                <h2>{props.header}: <span className='weight-300' id={props.label}>{props.spanlabel}</span> {addPartyLogo && (<img src={props.img} alt={props.party} className='party-image' />)}</h2>
            </div>
            <div className='element'>
                <h2>Επόμενες αντιστοιχίες</h2>
                <p>{props.p}:</p>
                <dl className='d-flex flex-column justify-content-around align-items-center' id={props.next}>{props.fn}</dl>
            </div>
        </div>
    )
});

export default Element;