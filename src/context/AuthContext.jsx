import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
  const storedUser = localStorage.getItem("user");

  if (!storedUser || storedUser === "undefined") {
    return; // do nothing
  }

  try {
    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);
  } catch (error) {
    console.error("Invalid JSON in localStorage");
    localStorage.removeItem("user");
  }
}, []);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token"); // optional but recommended
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);