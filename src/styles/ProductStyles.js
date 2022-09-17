import styled from "styled-components";

const ProductBook = styled.div`

    background-color: #FFCCFF;
    height:auto;
    width: 168px;
    border-radius: 5px;
    margin: 6px;
    padding:6px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    border: 5px solid ${props => props.borda}; 
    h2{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        color:#ff4791;
        white-space: nowrap; 
        width: 100%; 
        overflow: hidden;
        text-overflow: ellipsis;
         
    }

    h3{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color:#ff4791;
        word-wrap: break-word;
         
    }

    img{
        margin:4px;
        width:26vw;
        height:100%;
        align-self: center;   
        border: 2.5px solid #ffffff;
        border-radius:5px; 
        //height:32vw;
    
    }

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color:#ff4791;
        word-wrap: break-word;
        text-shadow: 0.5px 0.8px #ffffff;
        align-self: flex-end;
        justify-self:flex-end;
    }


`

export { ProductBook }