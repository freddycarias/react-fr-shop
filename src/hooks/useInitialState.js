// Agregar al estado los productos que se añadan al carrito
import { useState } from "react";

const initialState = {
    cart: []
};

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    // Agregar productos al carrito
    const addToCart = (payload) => {
        // Mantiene los datos previos del state y adiciona el producto nuevo
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    return {
        state,
        addToCart
    }
};

export default useInitialState;

