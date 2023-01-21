import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Home from "./pages/Home";
import Board from "./pages/board/Board";
import Diary from "./pages/Diary";
import Bucket from "./pages/Bucket";
import Todo from "./pages/todo/Todo";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/bucket" element={<Bucket />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/question" element={<Board />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
