import React, {useState, useMemo} from 'react';
import logo from './logo.svg';
import './App.css';

// Use case:
// useMemo is good for performance optimization
// This optimization helps avoid expensive calculations on every render.
// the function passed to useMemo runs during rendering (everytime button is clicked)
// useMemo returns a memoized value that is cached.

function App() {
  // Step 1: add useState for wordIndex and counter
  const [wordIndex, setWordIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  // Step 2: add array and get index from array
  let words = ['Welcome', 'to', 'memo', 'demo'];
  let word = words[wordIndex];

  // Step 3: add function that returns the length of each word
  const handleLetterCount = (word) => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return word.length;
  }

  // FAST
  const letterCount = useMemo(() => handleLetterCount(word), [word]);

  // SLOW
  // const letterCount = handleLetterCount(word);

  return (
    <div className="App">
      <section className="counterContainer">
        <section className="counter">
          <h1>"{word}" has {letterCount} letters</h1>
          <div className="wordButtons">
            <button onClick={() => {
              setWordIndex(0);
            }}>
              Reset
            </button>
            <button onClick={() => {
              const nextWord = wordIndex + 1 === words.length ? 0 : wordIndex + 1
              setWordIndex(nextWord);
            }}>
              Next word
            </button>
          </div>
          <div>
            <h1>{counter}</h1>
            <div className="countButtons">
              <button onClick={() => {
                setCounter(0);
              }}>
                Reset
              </button>
              <button onClick={() => setCounter(counter + 1)}>
                Add
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
