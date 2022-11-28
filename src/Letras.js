
export default function Letras({
  alfabeto,
  letterList,
  setLetterList,
  arrayWord,
  isLetterDisabled,
  setRandWord,
  underLined,
  setUnderLined,
  count,
  setCount,
  endGame,
}) {
  setRandWord(underLined);

  return (
    <div className="letter_buttons">
      {alfabeto.map((l) => (
        <Letter key={l} l={l} />
      ))}
    </div>
  );

  function verifyLetter(el) {
    setLetterList([...letterList, el]);

    if (arrayWord.includes(el)) {
      const changeLetter = underLined.map((e, i) =>
        arrayWord[i] === el ? (e = el) : e
      );
      setUnderLined(changeLetter);
      endGame(changeLetter, count);
    } else {
      const count2 = count + 1;
      setCount(count2);
      endGame(underLined, count2);
    }
  }

  function Letter(props) {
    return (
      <button
        data-test="letter"
        onClick={() => verifyLetter(props.l)}
        disabled={letterList.includes(props.l) ? true : isLetterDisabled}
        className="bt_letter"
      >
        {props.l.toUpperCase()}
      </button>
    );
  }
}
