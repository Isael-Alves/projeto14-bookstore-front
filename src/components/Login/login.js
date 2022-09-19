import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../common/auth";
import { ThreeDots } from "react-loader-spinner";
import { Button, Body, Form } from "../../styles/loginStyle";
import { signIN } from '../../services/bookstore.services.js'


function Login() {
  
  const { setDados } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  function handForm(e) {
    if (!loading) {
      setLoading(true);
      e.preventDefault();
      const body = {
        email,
        password,
      };

      const promise = signIN(body);

      promise.then((res) => {
        setDados(res.data);
        setEmail("");
        setPassword("");
        setLoading(false);
        navigate("/products");
      });

      promise.catch((err) => {
        console.error(err)
        alert('Usuario ou Senha Invalida');
        setEmail("");
        setPassword("");
        setLoading(false);
      });
    }
  }

  return (
    <>
      <Body>
        <h1>BookStore</h1>
        <Form onSubmit={handForm}>
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Senha"
            value={password}
            required
          />
          <Button>
            {!loading ? (
              "Entrar"
            ) : (
              <ThreeDots color="#FFFFFF" height={20} width={70} />
            )}
          </Button>
        </Form>
        <h5 onClick={() => navigate(`../sign-up`)}>
          Não tem uma conta? Cadastre-se!
        </h5>
      </Body>
    </>
  );
}

export default Login;