import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [dados, setDados] = useState({});
  const [cart, setCart] = useState({});

  return (
    <AuthContext.Provider
      value={{ dados, setDados, cart, setCart }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
