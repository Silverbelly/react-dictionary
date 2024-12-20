import './WordCard.css';
import { useState } from 'react';

export default function WordCard({front, back, deleteWord}) {  // destructured properties
    const [isFront, setFront] = useState(true);

    const cardContent = 
        isFront ? 
        <div className="card-front">English: {front}</div> : 
        <div className="card-back">German: {back}</div>;

    const handleFlip = (e) => {
        //e.preventDefault(); // in case of form fields, call this to prevent submission of form and reloading the page
                              // this is a SPA after all
        setFront(!isFront);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        e.stopPropagation();  // stops the propagation to the parent container
        deleteWord(front);
    }

    return (
        <div className="word-card" onClick={handleFlip}>
            <span className="delete-card" onClick={handleDelete}>X</span>
            {cardContent}
        </div>
    );
}
