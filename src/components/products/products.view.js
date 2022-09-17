import { ProductsBody, NavProducts, ProductsList } from '../../styles/productsStyles.js';
import {Product} from './Product.View.js'

function Products() {


    return (
        <ProductsBody>
            <NavProducts>
            <h2>Olá Fulano</h2>
            <ion-icon name="cart"></ion-icon>
            </NavProducts>
            <ProductsList>
               <Product></Product>
               <Product></Product>
            </ProductsList>
        </ProductsBody>
    )
}

export { Products }