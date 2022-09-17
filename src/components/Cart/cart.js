import img from "../../assets/img/81ibfYk4qmL.jpg";
import styled from "styled-components";
import { BsCartDash } from "react-icons/bs";

function Cart() {
  return (
    <>
      <Title>Meu carrinho de Compras</Title>
      <ListBooks>
        <li>
          <img src={img} alt="" />
          <section>
            <h2>Harry Potter e a pedra filosofal</h2>
            <h2>R$ 80,00</h2>
          </section>
          <div>
            <BsCartDash />
          </div>
        </li>

        <li>
          <img src={img} alt="" />
          <section>
            <h2>Harry Potter e a pedra filosofal</h2>
            <h2>R$ 80,00</h2>
          </section>
          <div>
            <BsCartDash />
          </div>
        </li>

        <li>
          <img src={img} alt="" />
          <section>
            <h2>Harry Potter e a pedra filosofal</h2>
            <h2>R$ 80,00</h2>
          </section>
          <div>
            <BsCartDash />
          </div>
        </li>

        <li>
          <img src={img} alt="" />
          <section>
            <h2>Harry Potter e a pedra filosofal</h2>
            <h2>R$ 80,00</h2>
          </section>
          <div>
            <BsCartDash />
          </div>
        </li>
      </ListBooks>
      <Button>Comprar</Button>
    </>
  );
}

export default Cart;

const Title = styled.h1`
  font-family: "Roboto Slab", serif;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  margin: 30px auto;
`;

const ListBooks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    width: 320px;
    display: flex;
    margin-bottom: 15px;
    border-radius: 5px;
    padding:10px;
    color: #000000;
    background-color: #ffffff;
    img {
      height: 140px;
      width: 90px;
      margin-right: 5px;
    }
    h2 {
      margin-top: 15px;
      font-family: "Roboto Slab", serif;
      font-size: 15px;
      font-weight: 500;
      line-height: 17px;
    }

    div{
      width: 40px;
      height: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const Button = styled.button`
  width: 298px;
  height: 52px;
  margin: 15px auto;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 400;
  font-size: 21px;
  line-height: 26px;

  border: none;
  color: #ffffff;
  background-color: #ff4791;
  border-radius: 8px;
`;
