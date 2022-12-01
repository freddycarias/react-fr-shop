import React ,{useState}from 'react';
import '../styles/ProductItem.scss';

import iconAddCart from "@icons/bt_add_to_cart.svg";


const ProductItem = ({ product }) => {
	const { title, price, images } = product;
	const [cart, setCart] = React.useState(null);
	return (
		<div className="ProductItem">
			<img src={images[0]} alt={title} />
			<div className="product-info">
				<div>
					<p>${price}</p>
					<p>{title}</p>
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