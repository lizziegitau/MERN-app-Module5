import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize the user state

  // Function to set the user data (e.g., after successful login)
  const loginUser = (userData) => {
    setUser(userData);
  };

  // Function to clear the user data (e.g., after logout)
  const logoutUser = () => {
    setUser(null);
  };

  // Provide the AuthContext value to children components
  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
