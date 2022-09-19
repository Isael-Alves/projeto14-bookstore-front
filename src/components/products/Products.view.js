import { ProductsBody, NavProducts, ProductsList, CustomIoCart, StyledLink } from '../../styles/productsStyles.js';
import { Product } from './Product.View.js'
import React, { useState, useEffect } from 'react';
import { getProducts } from '../../services/bookstore.services.js';
import { AuthContext } from "../common/auth";
import { ThreeDots } from "react-loader-spinner";


function Products() {

    const [books, setBooks] = useState([]);
    const { dados } = React.useContext(AuthContext);

    useEffect(() => {

        const promise = getProducts(dados.token);

        promise.then((res) => {
            setBooks(res.data)
        });

        promise.catch((e) => console.error(e));
    }, [])



    return (
        <ProductsBody >
            {books.length ? <>
                <NavProducts>
                    <h2>Olá {`${dados.name}`}</h2>
                    <StyledLink to='/cart'>
                        <CustomIoCart />
                    </StyledLink>
                </NavProducts>
                <ProductsList>
                    {books.map((book, i) => <Product key={i} id={book._id}titulo={book.name} author={book.author} img={book.imagem} value={book.value} />)}
                </ProductsList>
            </> : <ThreeDots color="#FFFFFF" height={20} width={70} />}
        </ProductsBody>
    )
}

export { Products }