import { ProductBook } from "../../styles/ProductStyles.js";
import React, { useState } from "react";
import { AuthContext } from "../common/auth";
import { postCart } from "../../services/bookstore.services.js";

function Product({ id, titulo, author, img, value }) {
  const [borda, setBorda] = useState("#ff4791");
  const [ativa, setAtiva] = useState(false);
  const { dados } = React.useContext(AuthContext);

  function addCart(body, token) {
    if (ativa) {
      alert("Livro já adicionado no carrinho!");
      return;
    }

    const promise = postCart(
      {
        bookId: body.id,
        name: body.name,
        author: body.author,
        imagem: body.img,
        value: body.value,
      },
      token
    );

    setBorda("#008700");
    setAtiva(true);
    promise.then(() => alert("Livro Adicionado ao carrinho"));
    promise.catch((e) => console.error(e));
  }

  return (
    <ProductBook
      onClick={() => addCart({ id, titulo, author, img, value }, dados.token)}
      borda={borda}
    >
      <h2>{titulo}</h2>
      <h3>{author}</h3>
      <img src={img} alt="capa"></img>
      <p>{`R$ ${value}`}</p>
    </ProductBook>
  );
}

export { Product };
