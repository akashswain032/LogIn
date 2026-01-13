import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Home/Login";
import Register from "./components/Home/Register";
import Landing from "./components/Home/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
