import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Task01 from "./components/Task01";
import Task02 from "./components/Task02";
import Task03 from "./components/Task03";
import Task04 from "./components/Task04";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task01" element={<Task01 />} />
        <Route path="/task02" element={<Task02 />} />
        <Route path="/task03" element={<Task03 />} />
        <Route path="/task04" element={<Task04 />} />
      </Routes>
    </div>
  );
}

export default App;
