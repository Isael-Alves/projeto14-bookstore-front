import styled from "styled-components";
import { Button } from "../../styles/loginStyle";

function CheckOut() {
  return (
    <Box>
      <h1>CheckOut</h1>
      <div>
        <h2>Quantidade de produtos: 7</h2>
        <h2>Total a pagar: R$ 250,00</h2>
      </div>
      <Button> Confirmar compra</Button>
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
`;
