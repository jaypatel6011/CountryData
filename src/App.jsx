import { Route, Routes } from "react-router-dom";
import "./App.css";
import Task4 from "./components/Task4";

function App() {
  return (
    <div className="w-full">
      
      <Routes >
        <Route path="/" element={<Task4 />} />
      </Routes>
    </div>
  );
}

export default App;
