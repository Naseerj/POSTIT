import "./App.css";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Home from "./Home/Home";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Mystory from "./Story/Mystory/Mystory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/signup" element={<Signup/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/dashboard/home" element={<Dashboard/>}/>
         <Route path="/dashboard/mystory" element={<Mystory/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
