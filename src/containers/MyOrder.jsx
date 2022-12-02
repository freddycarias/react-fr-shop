import React,{useContext} from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';
import appContext from "@context/appContext"

import iconFlecha from "@icons/flechita.svg";


const MyOrder = () => {
	const {state: {cart}} = useContext(appContext);
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src= {iconFlecha} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{cart.map(product => (
					<OrderItem key={`orderItem-${product.id}`} product={product} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$560.00</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;

