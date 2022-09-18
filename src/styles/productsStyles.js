import styled from "styled-components";
import { IoCart } from "react-icons/io5";
import { Link } from 'react-router-dom'

const ProductsBody = styled.div`

    //background-color: crimson;
    width:100%;
    //height:auto;
    height: 185vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
`;

const NavProducts = styled.div`

    width:100%;
    height:12vw;
    background-color:#ff4791;
    position:fixed;
    top:0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:12px;

    h2{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 31px;
        color:#ffffff;
    }



`;

const ProductsList = styled.div`

    margin-top:14vw;    
    //background-color:crimson;
    width:100%;
    height:auto;
    //height:100vw;
    display: flex;
    flex-wrap:wrap;
    justify-content:space-around;
    padding: 4px 4px;

`;

const CustomIoCart = styled(IoCart)`
    font-size: 26px;
    color:#ffffff
`

const StyledLink = styled(Link)`

    text-decoration: none;
   
`


export { ProductsBody, NavProducts, ProductsList, CustomIoCart, StyledLink }
