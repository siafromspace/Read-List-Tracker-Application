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
import { useState } from 'react';

function App() {

  const [books, setBooks] = useState([
    {
      author: "Leigh Bardugo",
      title: "Six Of Crows",
      id: 1,
      showModal: false
    },
    {
      author: "Leigh Bardugo",
      title: "Six Of Crows",
      id: 2,
      showModal: false
    },
    {
      author: "Leigh Bardugo",
      title: "Six Of Crows",
      id: 3,
      showModal: false
    },
    {
      author: "Leigh Bardugo",
      title: "Six Of Crows",
      id: 4,
      showModal: false
    },
    {
      author: "Leigh Bardugo",
      title: "Six Of Crows",
      id: 5,
      showModal: false
    },
    {
      author: "Leigh Bardugo",
      title: "Six Of Crows",
      id: 6,
      showModal: false
    },
    {
      author: "Leigh Bardugo",
      title: "Six Of Crows",
      id: 7,
      showModal: false
    },
    {
      author: "Leigh Bardugo",
      title: "Six Of Crows",
      id: 8,
      showModal: false
    },

  ])

  const handleClick = (id) => {
    setBooks(prevBooks => prevBooks.map(book => {
      return book.id === id ?
        {
          ...book,
          showModal: !book.showModal
        } : book
    }))
  }

  return (
    <BrowserRouter>
      <div className="bg-bon-jour w-screen m-0 overflow-x-hidden p-0 md:p-4 flex md:items-center h-screen">
        <Routes>
          <Route path="/" element={<Carousel />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/to-be-read" element={<ToBeRead books={books} handleClick={handleClick} />}></Route>
          <Route path="/current" element={<CurrentReads books={books} handleClick={handleClick} />}></Route>
          <Route path="/read" element={<Read books={books} handleClick={handleClick} />}></Route>
          <Route path="/new" element={<New />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
