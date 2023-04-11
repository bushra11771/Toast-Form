import { useEffect, useState } from "react";
import Toast from "./toast/Toast";
import Button from "./button/Button";
import { BUTTON_PROPS, TOAST_PROPERTIES } from "./components/Toastproperties";
import Checkmark from "./checkmark/Checkmark";
import AddUser from "./components/AddUser";

const App = () => {
  // const [list, setList] = useState([]);
  // const [position, setPosition] = useState("top-right");
  // let [checkValue, setCheckValue] = useState(false);
  // const [autoDeleteTime, setAutoDeleteTime] = useState(0);

  // const selectPosition = (e) => {
  //   setPosition(e.target.value);
  //   setList([]);
  // };

  // const showToast = (type) => {
  //   debugger;
  //   const toastProperties = TOAST_PROPERTIES.find(
  //     (toast) => toast.title.toLowerCase() === type
  //   );

  //   toastProperties.description = "asad is here!";
  //   setList([...list, toastProperties]);
  // };

  // const onCheckBoxChange = () => {
  //   checkValue = !checkValue;
  //   setCheckValue(checkValue);
  //   setList([]);
  // };

  // useEffect(() => {
  //   console.log("list", list);
  // }, [list]);

  return (
    <>
      <div className="app">
        <AddUser />
      </div>
    </>
  );
};

export default App;
