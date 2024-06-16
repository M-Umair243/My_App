import ButtonContainer from "./ButtonContainer";
import InputContainer from "./InputContainer";
import CSS from "./ListInput.module.css";

function ListInput({ getInputData, inputText, addItemHandler }) {
  return (
    <InputContainer>
      <input
        className={`${CSS.inputStyle} `}
        type="text"
        placeholder="Enter Here!"
        onChange={getInputData}
        value={inputText}
      />

      <button type="button" onClick={addItemHandler} className="btn btn-danger">
        Add
      </button>
    </InputContainer>
  );
}

export default ListInput;
