import React, { useEffect, useState } from "react";
import "../css/task3.css";
function Task03() {
  let [num, setNum] = useState(0);
  let [time, setTime] = useState(60);
  let [score, setScore] = useState(0);
  let [count, setCount] = useState(0);
  const clickHandle = () => {
    setScore(score + 5);
    setCount(count++);
  };
  const startHandle = () => {
    const game = setInterval(() => {
      if (time !== 0) {
        setNum(Math.floor(Math.random() * 10));
        setTime(time--);
      } else {
        clearInterval(game);
        setTime(60);
        setScore(score-(60 - count) * 2.5)
        alert("Your Score Is:",score);
        window.location.reload();
      }
    }, 1000);
  };
  return (
    <>
      <div>Task03</div>
      <div class="grid-container">
        <div class="grid-item">
          {num === 1 ? <button onClick={clickHandle}>Hit </button> : <>.</>}
        </div>
        <div class="grid-item">
          {num === 2 ? <button onClick={clickHandle}>Hit</button> : <>.</>}
        </div>
        <div class="grid-item">
          {num === 3 ? <button onClick={clickHandle}>Hit </button> : <>.</>}
        </div>
        <div class="grid-item">
          {num === 4 ? <button onClick={clickHandle}>Hit</button> : <>.</>}
        </div>
        <div class="grid-item">
          {num === 5 ? <button onClick={clickHandle}>Hit </button> : <>.</>}
        </div>
        <div class="grid-item">
          {num === 6 ? <button onClick={clickHandle}>Hit </button> : <>.</>}
        </div>
        <div class="grid-item">
          {num === 7 ? <button onClick={clickHandle}>Hit </button> : <>.</>}
        </div>
        <div class="grid-item">
          {num === 8 ? <button onClick={clickHandle}>Hit </button> : <>.</>}
        </div>
        <div class="grid-item">
          {num === 9 ? <button onClick={clickHandle}>Hit </button> : <>.</>}
        </div>
      </div>
      <h1>Time Left: {time - 1} secands</h1>
      <button onClick={startHandle}> Start</button>
    </>
  );
}

export default Task03;
