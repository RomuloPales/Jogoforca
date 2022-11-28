export default function Chute({
  isInputDisabled,
  inputText,
  setInputText,
  arrayWord,
  setChangeColor,
  setWord,
  resetFunc,
  setCount,
}) {
  function palpite() {
    if (inputText.toLowerCase() === arrayWord.join("")) {
      setWord(true);
      setChangeColor("winGreen");
      resetFunc();
    } else {
      setWord(true);
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
        onClick={palpite}
        disabled={isInputDisabled}
        className="button_input"
      >
        Chute!
      </button>
    </div>
  );
}
