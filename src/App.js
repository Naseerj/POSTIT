import "./App.css";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
