import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import ErrorMsg from "./components/ErrorMsg";
import ListHeading from "./components/ListHeading";
import ListInput from "./components/ListInput";
import MyList from "./components/MyList";

function App() {
  // const myListItems = ["Android", "Desktop", "Mac", "Linux"];
  // const myListItems = [];
  const [myListItems, setmyListItems] = useState([
    "Android",
    "Desktop",
    "Mac",
    "Linux",
  ]);
  const [inputText, setInputText] = useState("");
  // const onKeyDownHandler = (e) => {
  //   if (e.key === "Enter") {
  //     let newArr = e.target.value;
  //     // e.target.value = "";
  //     let finalArr = [...myListItems, newArr];
  //     setmyListItems(finalArr);
  //     console.log(setmyListItems);
  //   }
  // };

  // Get input Data
  const getInputData = (e) => {
    setInputText(e.target.value);
  };
  // onclick Handler to set Data
  const addItemHandler = () => {
    if (inputText.trim()) {
      const newitem = inputText;
      setmyListItems([...myListItems, newitem]);
      setInputText("");
    }
  };
  // delete handler
  const handleDelete = (e) => {
    const newList = myListItems.filter((_, i) => i !== e);
    setmyListItems(newList);
  };
  return (
    <Container>
      <ListHeading />

      <ListInput
        getInputData={getInputData}
        addItemHandler={addItemHandler}
        inputText={inputText} /* onKeyDownHandler={onKeyDownHandler} */
      />
      <ErrorMsg itemList={myListItems} />
      <ul className="list-group">
        {myListItems.map((index, e) => (
          <MyList key={index} index={index} handleDelete={handleDelete} e={e} />
        ))}
      </ul>
    </Container>
  );
}

export default App;
