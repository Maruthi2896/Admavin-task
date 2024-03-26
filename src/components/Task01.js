import React, { useEffect, useState } from "react";
import "../css/task01.css";
function Task01() {
  // states
  let [bucket1, setBucket1] = useState([
    "Mango",
    "Apple",
    "Jackfruit",
    "Banana",
    "Orrange",
    "Grape",
  ]);
  let [bucket2, setBucket2] = useState([
    "Rose",
    "SunFlower",
    "Lilly",
    "Daisy",
    "Lotus",
    "Tulip",
  ]);
  let [selectedItems, setSelectedItems] = useState([]);
  const [b1clicked, setB1Clicked] = useState(false);
  const [b2clicked, setB2Clicked] = useState(false);

  //checked logics
  const bucket2Change = (index) => {
    setB2Clicked(true);
    setSelectedItems([...selectedItems, bucket2[index]]);
  };
  const bucket1Change = (index) => {
    setB1Clicked(true);
    setSelectedItems([...selectedItems, bucket1[index]]);
  };
  // Add button onclick handle function

  const addHandle = () => {
    if (b1clicked) {
      alert(
        "check box is still  showing checked after first operation, so click only one time on item, unchecking them treated checked in backend so after unchecking them click buttons for operation i mean dont see checked or not, just click one time on element and do operations"
      );
      setBucket2((prevBucket2) => [...prevBucket2, ...selectedItems]);
      setBucket1((prevBucket1) =>
        prevBucket1.filter((ele) => !selectedItems.includes(ele))
      );
      setSelectedItems([]);
    } else {
      setBucket1((prevBucket1) => [...prevBucket1, ...selectedItems]);
      setBucket2((prevBucket2) =>
        prevBucket2.filter((ele) => !selectedItems.includes(ele))
      );
      setSelectedItems([]);
    }
    setB1Clicked(false);
    setB2Clicked(false);
  };
  // remove button onclick handle function
  const removeHandle = () => {
    if (b1clicked) {
      setBucket1((prevBucket1) =>
        prevBucket1.filter((ele) => !selectedItems.includes(ele))
      );
      setSelectedItems([]);
    } else if (b2clicked) {
      setBucket2((prevBucket2) =>
        prevBucket2.filter((ele) => !selectedItems.includes(ele))
      );
      setSelectedItems([]);
    } else alert("Select atleast one element to remove");
    setB1Clicked(false);
    setB2Clicked(false);
  };
  //add all handle function
  const addallHandle = () => {
    let res = prompt(
      "If u wish to add all the elements from bucket-1 to bucket -2 then enter 1 , if it is vice-versa enter 2 "
    );
    if (res === "1") {
      setBucket2((prevBucket2) => [...prevBucket2, ...bucket1]);
      setBucket1([]);
    } else if (res === "2") {
      setBucket1((prevBucket1) => [...prevBucket1, ...bucket1]);
      setBucket2([]);
    } else alert("Please enter numeric either 1 or 2");
  };
  // remove all handling function
  const removeallHandle = () => {
    let res = prompt(
      "If u wish to remove all the elements from bucket-1 then enter 1 , if u want delete from bucket 2 then enter 2 "
    );
    if (res === "1") {
      setBucket1([]);
    } else if (res === "2") {
      setBucket2([]);
    } else alert("Please enter numeric either 1 or 2");
  };
  return (
    <div>
      <h4>
        Task01: Write a component which will allow the user to transfer the
        elements between two buckets.
      </h4>

      <div className="task-box">
        <div className="bucket">
          <h4>Bucket 1</h4>
          {bucket1.sort().map((e, i) => (
            <div key={i}>
              <input
                type="checkbox"
                className="checkbox"
                id={e}
                onChange={() => bucket1Change(i)}
                disabled={b2clicked}
              />
              <label htmlFor={e}>{e}</label>
            </div>
          ))}
        </div>
        <div className="actions">
          <button onClick={() => addHandle()}>Add</button>
          <button onClick={() => removeHandle()}>Remove</button>
          <button onClick={() => addallHandle()}>Add All</button>
          <button onClick={() => removeallHandle()}>Remove All</button>
        </div>
        <div className="bucket">
          <h4>Bucket 2</h4>
          {bucket2.sort().map((e, i) => (
            <div key={i}>
              <input
                type="checkbox"
                id={e}
                checked={false}
                onChange={() => bucket2Change(i)}
                disabled={b1clicked}
              />
              <label color="red" htmlFor={e}>
                {e}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Task01;
