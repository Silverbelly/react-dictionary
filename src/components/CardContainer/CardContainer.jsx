import './CardContainer.css'
import WordCard from '../WordCard/WordCard';

export default function CardContainer({ words, deleteWord }) {

    const cardList =                // this is not array of strings, this is an array of jsx elements
        words.map(word => 
            <WordCard 
                front={word.front} 
                back={word.back} 
                key={word.front}  // can use composite key like this also if word.front is not unique:  {`${word.front}-${word.back}`}
                deleteWord = {deleteWord} />); 

  return (
        <section className="cards-container">
            {cardList}
        </section>
    )
}
