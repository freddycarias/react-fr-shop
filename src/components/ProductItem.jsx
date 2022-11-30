import React ,{useState}from 'react';
import '../styles/ProductItem.scss';

import iconAddCart from "@icons/bt_add_to_cart.svg";


const ProductItem = () => {
	const [cart, setCart] = React.useState(null);
	return (
		<div className="ProductItem">
			<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<button onClick={ () => setCart(cart + 1) }>
					<img src= {iconAddCart} alt="" />
				</button>
				{cart}
			</div>
		</div>
	);
}

export default ProductItem;