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

  // Step 2: add array and get index from array

  // Step 3: add function that returns the length of each word

  // FAST

  // SLOW

  return (
    <div className="App">
      <section className="counterContainer">
        <section className="counter">
          // Step 4: read current word and the length of the word
          <h1></h1>
          <div className="wordButtons">
            <button onClick={() => {
              // set the word index to 0

            }}>
              Reset
            </button>
            <button onClick={() => {
              // add variable that adds 1 to the wordIndex
              // set the word index to the variable

            }}>
              Next word
            </button>
          </div>
          <div>
            // Step 5: read current number
            <h1></h1>
            <div className="countButtons">
              <button onClick={() => {
                // set the counter to 0

              }}>
                Reset
              </button>
              // set the counter to increment it by 1
              <button>
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
