import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Carousel from './pages/Carousel';
import Home from './pages/Home';
import New from './pages/New';
import CurrentReads from './pages/CurrentReads';
import ToBeRead from './pages/ToBeRead';
import Read from './pages/Read';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-bon-jour w-screen h-screen m-0 overflow-x-hidden p-0 md:p-4 flex md:items-center">
        <Routes>
          <Route path="/" element={<Carousel />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/to-be-read" element={<ToBeRead />}></Route>
          <Route path="/current" element={<CurrentReads />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/new" element={<New />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
