import React ,{useContext}from 'react';
import '../styles/ProductItem.scss';
import appContext from "@context/appContext"

import iconAddCart from "@icons/bt_add_to_cart.svg";


const ProductItem = ({ product }) => {
	const { title, price, images } = product;
	const {addToCart} = useContext(appContext);
	const handleClick = item => {
		addToCart(item);
	}
	return (
		<div className="ProductItem">
			<img src={images[0]} alt={title} />
			<div className="product-info">
				<div>
					<p>${price}</p>
					<p>{title}</p>
				</div>
				<button onClick={() => handleClick(product)}>
					<img src= {iconAddCart} alt="" />
				</button>
			</div>
		</div>
	);
}

export default ProductItem;