import { useState } from "react";
import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";

function App() {
  const [count, setCount] = useState(0);
  const [randWord, setRandWord] = useState("");
  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const [letterList, setLetterList] = useState([]);
  const [arrayWord, setArrayWord] = useState([]);
  const [isLetterDisabled, setIsLetterDisabled] = useState(true);
  const [underLined, setUnderLined] = useState([]);
  const [changeColor, setChangeColor] = useState("");
  const [wordOn, setWordOn] = useState(false);
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [inputText, setInputText] = useState("");
  const rand = palavras[Math.floor(Math.random() * palavras.length)];

  function showWord() {
    const randArray = Array.from(rand);
    setArrayWord(Array.from(rand));
    const randArrayMap = randArray.map(() => "_");
    setUnderLined(randArrayMap);
    setRandWord(randArrayMap);
    setIsLetterDisabled(false);
    setChangeColor("");
    setCount(0);
    setLetterList([]);
    setWordOn(false);
    setIsInputDisabled(false);
  }

  function endGame(undL, ct) {
    if (ct === 6) {
      setChangeColor("lostRed");
      resetFunc();
      setWordOn(true);
    } else if (!undL.includes("_") && ct !== 6) {
      setWordOn(true);
      setChangeColor("winGreen");
      resetFunc();
    }
  }

  function resetFunc() {
    setIsLetterDisabled(true);
    setLetterList([]);
    setIsInputDisabled(true);
  }
  return (
    <main>
      <Jogo
        count={count}
        randWord={randWord}
        showWord={showWord}
        setRandWord={setRandWord}
        underLined={underLined}
        changeColor={changeColor}
        arrayWord={arrayWord}
        wordOn={wordOn}
        rand={rand}
      />
      <Letras
        alfabeto={alfabeto}
        letterList={letterList}
        setLetterList={setLetterList}
        arrayWord={arrayWord}
        setRandWord={setRandWord}
        isLetterDisabled={isLetterDisabled}
        setUnderLined={setUnderLined}
        underLined={underLined}
        count={count}
        setCount={setCount}
        setChangeColor={setChangeColor}
        endGame={endGame}
        randWord={randWord}
      />
      <Chute
        isInputDisabled={isInputDisabled}
        inputText={inputText}
        setInputText={setInputText}
        arrayWord={arrayWord}
        setChangeColor={setChangeColor}
        setWordOn={setWordOn}
        resetFunc={resetFunc}
        setCount={setCount}
      />
    </main>
  );
}

export default App;
