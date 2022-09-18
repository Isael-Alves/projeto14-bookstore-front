import { ProductBook } from '../../styles/ProductStyles.js'
import { useState } from "react";


function Product({ titulo, author, img, value }) {
    
    const [borda, setBorda] = useState('#ff4791')

    

    return (
        <ProductBook onClick={() => setBorda('#008700')} borda={borda}>
            <h2>{titulo}</h2>
            <h3>{author}</h3>
            <img src={img} alt="capa"></img>
            <p>{`R$ ${value}`}</p>
        </ProductBook>

    )

}

export { Product }