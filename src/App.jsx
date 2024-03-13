import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [arrayOfWords, setArrayOfWords] = useState([{ word: "breeze", done: false }, { word: "cozy", done: false }, { word: "dream", done: false }, { word: "enchanting", done: false }, { word: "fantasy", done: false }, { word: "graceful", done: false }, { word: "harmony", done: false }, { word: "inspiring", done: false }, { word: "joyful", done: false }])

  const [inputValue, setInputValue] = useState('')
  let [currentElement, setCurrentElement] = useState(0)

  const checkIfDone = (inputValue) => {
    setInputValue(inputValue)
    if(inputValue.trim() === arrayOfWords[currentElement].word) {
      setCurrentElement(++currentElement)
      setInputValue('')
    }
  }

  console.log(inputValue)

  return (
    <>
    <div style={{display: 'flex', gap: '20px'}}>
      {arrayOfWords.map((array, index) => (
        <div style={index === currentElement ? {backgroundColor: 'grey'} : null} key={array.word}>{array.word}</div>
      ))}
    </div>
    <input onChange={(e) => checkIfDone(e.target.value)} value={inputValue}></input>

    <div>Your score {currentElement}</div>

    </>
  )
}

export default App
