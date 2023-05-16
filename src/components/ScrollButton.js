import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowCircleUp } from 'react-icons/fa';

export default function ScrollButton() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button className="scroll-button" onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} variant='primary'><FaArrowCircleUp className='arrow-icon' /></Button>
    )
}