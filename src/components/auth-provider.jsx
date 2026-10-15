import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
      id: 1,
      name: "Ahmed",
      role: "Admin",
    });

  function login() {
    setUser({
      id: 1,
      name: "Ahmed",
      role: "Admin",
    });
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error(" use");
  }

  return context;
}
