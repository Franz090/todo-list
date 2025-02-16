import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard"; 
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from "../pages/Register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />  
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}


export default Routers;
