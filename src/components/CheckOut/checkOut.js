import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../styles/loginStyle";
import { AuthContext } from "../common/auth";
import { postCheckOut } from "../../services/bookstore.services";

function CheckOut() {
  const navigate = useNavigate();
  const [payment, setPayment] = useState("Dinheiro");
  const { dados, cart } = React.useContext(AuthContext);
  const { token } = dados;
  const { valorTotal, quantProducts } = cart;

  const custo = String((valorTotal / 100).toFixed(2));

  function compraConfirmada() {
    const compra = { ...cart, payment };

    if (window.confirm(`Tudo certo?\n Comprador: ${dados.name}\n Forma de pagamento: ${payment}\n Total: ${custo}`)) {
      const promise = postCheckOut(compra, token);

      promise.then((res) => {
        console.log(res);
        navigate("../products");
      });

      promise.catch((e) => console.log(e));
    }
  }

  return (
    <Box>
      <h1>CheckOut</h1>
      <div>
        <h2>Quantidade de produtos: {quantProducts}</h2>
        <h2>Total a pagar: R$ {custo}</h2>
      </div>
      <section>
        <h3>Escolha foma de pagamento:</h3>

        <div onClick={() => setPayment("Dinheiro")}>Dinheiro</div>
        <div onClick={() => setPayment("Cartão")}>Cartão</div>
      </section>

      <Button onClick={() => compraConfirmada()}> Confirmar compra</Button>
    </Box>
  );
}

export default CheckOut;

const Box = styled.div`
  width: 100%;
  height: 150vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Roboto Slab", serif;
    margin-bottom: 30px;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    line-height: 53px;
  }

  h2 {
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 19px;
    line-height: 22px;
    margin-bottom: 10px;
  }

  section {
    margin-bottom: 15px;
    h3 {
      margin-bottom: 10px;
    }
    div {
      width: 90px;
      height: 25px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 5px;
      margin-bottom: 5px;
      background-color: #ff4791;
    }
  }
`;
