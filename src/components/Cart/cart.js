import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsCartDash } from "react-icons/bs";
import { IoArrowUndo } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { getBooksCart } from "../../services/bookstore.services";
import { AuthContext } from "../common/auth";

function Cart() {
  const { dados } = React.useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const promise = getBooksCart(dados.token);

    promise.then((res) => {
      setBooks(res.data);
    });

    promise.catch((e) => console.error(e));
  }, []);

  function AddBooks() {
    if (books.length > 0) {
      return books.map((book, i) => {
        const { name, imagem, valor, author } = book;

        return (
          <li key={i}>
            <img src={imagem} alt="" />
            <section>
              <h2>{name}</h2>
              <h2>{author}</h2>
              <h2>R$ {valor}</h2>
            </section>
            <div>
              <BsCartDash />
            </div>
          </li>
        );
      });
    } else {
      return <h1>Carrinho vazio</h1>;
    }
  }

  return (
    <>
      <Title>
        <IoArrowUndo onClick={() => navigate("../products")} />
        <h1>Meu carrinho de Compras</h1>
      </Title>
      <ListBooks>
        <AddBooks />
      </ListBooks>
      <Button onClick={() => navigate("../checkOut")}>Comprar</Button>
    </>
  );
}

export default Cart;

const Title = styled.header`
  svg {
    width: 17px;
    height: 17px;
    margin: 15px 0 0 15px;
  }

  h1 {
    font-family: "Roboto Slab", serif;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    margin: 20px auto;
  }
`;

const ListBooks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    position: relative;
    width: 320px;
    display: flex;
    margin-bottom: 15px;
    border-radius: 5px;
    padding: 10px;
    color: #000000;
    background-color: #ffffff;
    img {
      height: 140px;
      width: 90px;
      margin-right: 5px;
    }
    h2 {
      font-family: "Roboto Slab", serif;
      font-size: 15px;
      font-weight: 500;
      line-height: 17px;
    }

    div {
      position: absolute;
      top: 10px;
      right: 0;
      width: 60px;
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