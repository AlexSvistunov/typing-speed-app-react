import { useEffect, useState } from "react";
import useStart from "./useStart";
import "./App.css";

function App() {
  const [arrayOfWords, setArrayOfWords] = useState([
    { word: "amazing", done: false },
    { word: "breeze", done: false },
    { word: "cozy", done: false },
    { word: "dream", done: false },
    { word: "enchanting", done: false },
    { word: "fantasy", done: false },
    { word: "graceful", done: false },
    { word: "harmony", done: false },
    { word: "inspiring", done: false },
    { word: "joyful", done: false },
    { word: "kindness", done: false },
    { word: "lovely", done: false },
    { word: "mystical", done: false },
    { word: "nostalgia", done: false },
    { word: "optimistic", done: false },
    { word: "peaceful", done: false },
    { word: "quaint", done: false },
    { word: "radiant", done: false },
    { word: "serenity", done: false },
    { word: "tranquil", done: false },
    { word: "uplifting", done: false },
    { word: "vibrant", done: false },
    { word: "whimsy", done: false },
    { word: "xanadu", done: false },
    { word: "yearning", done: false },
    { word: "zephyr", done: false },
    { word: "bliss", done: false },
    { word: "cuddle", done: false },
    { word: "delight", done: false },
    { word: "ephemeral", done: false },
    { word: "freedom", done: false },
    { word: "gentle", done: false },
    { word: "hopeful", done: false },
    { word: "innocence", done: false },
    { word: "journey", done: false },
    { word: "kiss", done: false },
    { word: "laughter", done: false },
    { word: "mirth", done: false },
    { word: "nostalgic", done: false },
    { word: "oasis", done: false },
    { word: "quixotic", done: false },
    { word: "resonate", done: false },
    { word: "serendipity", done: false },
    { word: "tender", done: false },
    { word: "unwind", done: false },
    { word: "vivid", done: false },
    { word: "wanderlust", done: false },
    { word: "xenial", done: false },
    { word: "yearn", done: false },
    { word: "zeal", done: false },
    { word: "blissful", done: false },
    { word: "charming", done: false },
    { word: "dazzling", done: false },
    { word: "effervescent", done: false },
    { word: "felicity", done: false },
    { word: "glorious", done: false },
    { word: "harmonious", done: false },
    { word: "idyllic", done: false },
    { word: "jubilant", done: false },
    { word: "kaleidoscope", done: false },
    { word: "luminous", done: false },
    { word: "mellifluous", done: false },
    { word: "nirvana", done: false },
    { word: "opulent", done: false },
    { word: "paradise", done: false },
    { word: "quaint", done: false },
    { word: "rhapsody", done: false },
    { word: "serene", done: false },
    { word: "tranquility", done: false },
    { word: "utopia", done: false },
    { word: "vibrant", done: false },
    { word: "wonder", done: false },
    { word: "xanadu", done: false },
    { word: "yearning", done: false },
    { word: "zenith", done: false },
    { word: "blissful", done: false },
    { word: "cosmic", done: false },
    { word: "dawn", done: false },
    { word: "eternal", done: false },
    { word: "felicity", done: false },
    { word: "grace", done: false },
    { word: "harmony", done: false },
    { word: "illuminate", done: false },
    { word: "joy", done: false },
    { word: "kiss", done: false },
    { word: "luminary", done: false },
    { word: "mystic", done: false },
    { word: "nirvana", done: false },
    { word: "oasis", done: false },
    { word: "paradise", done: false },
    { word: "quintessence", done: false },
    { word: "rapture", done: false },
    { word: "serendipity", done: false },
    { word: "tranquil", done: false },
    { word: "uplift", done: false },
    { word: "vitality", done: false },
    { word: "wonder", done: false },
    { word: "xenial", done: false },
    { word: "yearn", done: false },
    { word: "zenith", done: false },
  ]);
  console.log(arrayOfWords);
  const [inputValue, setInputValue] = useState("");
  let [currentElement, setCurrentElement] = useState(0);
  let [time, setTime] = useState(20);

  // useStart(time, setTime, currentElement);

  const startTime = () => {
    const timeId = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    if (time <= 0) {
      clearTimeout(timeId);
      alert("result is" + " " + currentElement);
    }
  };

  const checkIfDone = (inputValue) => {
    setInputValue(inputValue);
    if (inputValue.trim() === arrayOfWords[currentElement].word) {
      setArrayOfWords([
        ...arrayOfWords.slice(0, currentElement),
        {
          ...arrayOfWords[currentElement],
          done: true,
        },

        ...arrayOfWords.slice(currentElement + 1),
      ]);
      setCurrentElement(++currentElement);
      setInputValue("");
    }
  };

  console.log(inputValue);

  return (
    <>
      <section className="typing-test">
        <div className="container">
          <h1 className="typing-test__title">Typing speed test</h1>
          <div className="typing-test__words-wrapper">
            <div className="typing-test__word-row">
              <div className="typing-test__words">
                {arrayOfWords.map((array, index) => (
                  <span
                    key={index}
                    className={array.done ? "word done" : "word"}
                    style={
                      index === currentElement
                        ? { backgroundColor: "grey" }
                        : null
                    }
                  >
                    {array.word}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="timer">
            <span className="timer__minutes"></span>

            <span className="timer__seconds">{time}</span>
          </div>
          <div className="input-container">
            <input
              className="input"
              type="text"
              onChange={(e) => checkIfDone(e.target.value)}
              value={inputValue}
            ></input>
            <button className="button-start" onClick={startTime}>
              Start Test!
            </button>
            <div className="settings">
              <button className="settings__btn">Settings</button>
              <div className="dropdown">
                <button className="dropdown__btn" data-time="120">
                  120 seconds
                </button>
                <button className="dropdown__btn" data-time="40">
                  40 seconds
                </button>
                <button className="dropdown__btn" data-time="30">
                  30 seconds
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div style={{display: 'flex', gap: '20px'}}>
      {arrayOfWords.map((array, index) => (
        <div style={index === currentElement ? {backgroundColor: 'grey'} : null} key={array.word}>{array.word}</div>
      ))}
    </div>
    <input onChange={(e) => checkIfDone(e.target.value)} value={inputValue}></input>

    <div>Your score {currentElement}</div> */}
    </>
  );
}

// авторизация и хранение лучших результатов пользователя
// если лучший результат - новый уровень
// лучшие пользователи(лучшие результаты пользователей и их ники)

export default App;
