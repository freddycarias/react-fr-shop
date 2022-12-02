import React,{useContext} from 'react';
import '@styles/OrderItem.scss';
import AppContext from "@context/appContext";
import iconClose from "@icons/icon_close.png";

function OrderItem ({product, keyIndex}) {

	const { removeFromCart } = useContext(AppContext);
	const handleRemove = () => {
		removeFromCart( keyIndex);
	}
	return (
		<div className="OrderItem">
			<figure className="orderItem__img">
				<img src={product.images[0]} className="orderItem__img" alt={product.title} />
			</figure>
			<p className="orderItem__name">
				{product.title}
			</p>
			<p className="orderItem__price">
			${product.price} 
			</p>
			<img src={iconClose} alt="close" onClick={ handleRemove} />
		</div>
	);
}

export default OrderItem;