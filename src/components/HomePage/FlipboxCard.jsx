import { useState, useRef } from 'react';

export default function FlipboxCard({cardImage, cardText, cardTitle, flipOnHover=false,  flipOnClick=false }) {
    const simpleFlag = useRef({ isTouchDevice: false });
    const [isTouchDevice, setTouchDevice] = useState(false);
    const [isFlipped, setFlipped] = useState(false);

    const handleMouseEnter = event => {
    if (flipOnHover && !simpleFlag.current.isTouchDevice) { 
        setFlipped(true); 
    }
    onMouseEnter(event);
  };

  const handleMouseLeave = event => {
    if (flipOnHover && !simpleFlag.current.isTouchDevice) { 
        setFlipped(false); 
    }
    onMouseLeave(event);
  };

    let cardJSX = ""
    if (isFlipped) {
        cardJSX = (
            <div className="FlipboxBack">
                <span>{cardText}</span>
            </div>
        );
    }
    else {
        cardJSX = (
            <div className="FlipboxFront">
                <div>
                    <img className="FlipboxImage" src={cardImage}></img>
                </div>
                <div>
                    <span>{cardTitle}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="FlipboxContainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            {cardJSX}
        </div>
    );
}