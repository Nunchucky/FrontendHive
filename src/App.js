import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './components/HomePage';
import { SignUp } from './components/SignUp';
import { AboutUs } from './components/AboutUs';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>
      <Route path="/About" element={<AboutUs />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
