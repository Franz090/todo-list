import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from "../pages/Register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />  
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}


export default Routers;
