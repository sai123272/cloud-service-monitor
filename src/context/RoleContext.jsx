import { createContext, useContext, useState, useEffect } from "react";

const RoleContext = createContext();

export function RoleProvider({ children }) {

  const [role, setRole] = useState("viewer");

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole") || "viewer";
    setRole(storedRole);
  }, []);

  const updateRole = (newRole) => {
    localStorage.setItem("userRole", newRole);
    setRole(newRole);
  };

  return (
    <RoleContext.Provider value={{ role, updateRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export const useRoleContext = () => useContext(RoleContext);