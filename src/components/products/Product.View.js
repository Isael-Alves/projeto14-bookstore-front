import { ProductBook } from '../../styles/ProductStyles.js'

function Product({ titulo, author, img, value }) {
    
    return (
        <ProductBook>
            <h2>{titulo}</h2>
            <h3>{author}</h3>
            <img src={img} alt="capa"></img>
            <p>{`R$ ${value}`}</p>
        </ProductBook>

    )

}

export { Product }