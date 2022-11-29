import React from "react";
import "../styles/Header.scss"

const Header = () => {
    return (
        <nav>
        <img src="./icons/icon_menu.svg" alt="menu" className="menu" />
        <div className="nanvbar-left">
            <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
            <ul>
                <li>
                    <a href="/">Categories</a>
                </li>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furnitures</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li>
                    <a href="/">Others</a>
                </li>
            </ul>
        </div>
        <div className="nanvbar-right">
            <ul>
                <li className="nanvbar-email">soyestapersona@gmail.com</li>
                <li className="nanvbar-shopping-cart">
                    <img src="./icons/icon_shopping_cart_notification.svg" alt="shopping-cart" />
                    <div className="numero">3</div>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default Header;