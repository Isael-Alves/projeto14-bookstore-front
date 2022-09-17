import styled from "styled-components";


const ProductsBody = styled.div`

    background-color: crimson;
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

        ion-icon{
            font-size: 26px;
            color:#ffffff
        }

`;

const ProductsList = styled.div`

    margin-top:14vw;    
    background-color:#ffffff;
    width:100%;
    //height:auto;
    height:100vw;
    display: flex;
    flex-wrap:wrap;
    justify-content:space-around;
    

`;

export { ProductsBody, NavProducts, ProductsList }
