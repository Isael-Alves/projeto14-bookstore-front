import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [dados, setDados] = useState({});
  const [dadosCarrinho, setDadosCarrinho] = useState({});

  return (
    <AuthContext.Provider
      value={{ dados, setDados, dadosCarrinho, setDadosCarrinho }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
