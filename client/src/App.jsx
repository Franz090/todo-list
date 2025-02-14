import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Routers from './routes/Routers';
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routers />
    </Router>
    </AuthProvider>
  );
}

export default App;
