import { useState } from 'react';

import WordForm from './components/WordForm/WordForm';
import CardContainer from './components/CardContainer/CardContainer';

import './App.css';

function App() {
    const [words, setWords] = useState([
        { front: "translation", back: "übersetzung" },
        { front: "egg", back: "Ei" },
        { front: "taxi", back: "Taxi" },
        { front: "paper", back: "Papier" },
        { front: "square", back: "Platz" },
    ]);

    // this will be used to "link" the parent and child because the child knows we submitted but the parent doesn't
    const addWord = (front, back) => {
        const newWords = [...words, { front, back }];  // clone words to new array and add the new value to the cloned array
        setWords(newWords);  // pass it to the setter
    }

    const deleteWord = (front) => {
      const newWords = words.filter(word => word.front !== front);
      setWords(newWords);
    }

    // pass the state of the parent component (App.js) to the child component (CardContainer.jsx)
    // the parent controls the child
    // old terminology is parent is a smart component, child is a dumb component
    // new terminology is parent is a stateful component, child is a stateless component - it just displays what it guets from the parent
    // this maintains the separation of concerns
    return (
        <div className="App">
            <header className="App-header">Dictionary App</header>
            <main>
                <WordForm addWord={addWord} />
                <CardContainer words={words} deleteWord={deleteWord}/>  
            </main>
        </div>
    );
}

export default App;
