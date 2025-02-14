import { createContext, useContext } from "react";
import useAuth from "../hooks/useAuth";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const auth = useAuth(); 
    return (
      <AuthContext.Provider value={auth}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  // Custom hook para madali gamitin ang AuthContext
  export const useAuthContext = () => {
    return useContext(AuthContext);
  };
  
  export default AuthContext;


