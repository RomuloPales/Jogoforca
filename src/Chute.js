export default function Chute({
  isInputDisabled,
  inputText,
  setInputText,
  arrayWord,
  setChangeColor,
  setWordOn,
  resetFunc,
  setCount,
}) {
  function testGuess() {
    if (inputText.toLowerCase() === arrayWord.join("")) {
      setWordOn(true);
      setChangeColor("winGreen");
      resetFunc();
    } else {
      setWordOn(true);
      setCount(6);
      setChangeColor("lostRed");
      resetFunc();
    }

    setInputText("");
  }

  return (
    <div className="guess_input">
      <h1>Já sei a palavra!</h1>
      <input
        disabled={isInputDisabled}
        data-test="guess-input"
        className="input_class"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        data-test="guess-button"
        onClick={testGuess}
        disabled={isInputDisabled}
        className="button_input"
      >
        Chutar
      </button>
    </div>
  );
}
