
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Body, Form } from "../../styles/loginStyle";
import {signUp} from  '../../services/bookstore.services.js'
import dotenv from 'dotenv';

dotenv.config();


function Registration() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const clearForm = {
    email: "",
    name: "",
    password: "",
  };
  const [form, setForm] = useState(clearForm);

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
   
  }

  function sendForm(e) {
    e.preventDefault();
    if (!loading) {
      setLoading(true);

      const body = {
        ...form,
      };

      const promise = signUp(body);

      promise.then((res) => {
        alert("Usuário criado com sucesso!");
        navigate(`/`);
        setForm(clearForm);
        setLoading(false);
      });

      promise.catch((err) => {
        console.error(err)
        alert('Erro ao cadastrar Usuário');
        setForm(clearForm);
        setLoading(false);
      });
    }
  }

  return (
    <Container>
      <Body>
        <Form>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleForm}
            value={form.email}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Nome"
            onChange={handleForm}
            value={form.name}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            onChange={handleForm}
            value={form.password}
            required
          />
          <Button onClick={(e) => sendForm(e)}>
            {!loading ? (
              "Cadastrar"
            ) : (
              <ThreeDots color="#FFFFFF" height={20} width={70} />
            )}
          </Button>
        </Form>
        <h5 onClick={() => navigate(`../`)}>Já possuí uma conta? Entre</h5>
      </Body>
    </Container>
  );
}

const Container = styled.form`
  margin-top: 90px;
`;

export default Registration;