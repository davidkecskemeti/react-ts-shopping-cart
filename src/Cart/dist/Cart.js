"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CartItem_1 = require("../CartItem/CartItem");
//Styles
require("./Cart.scss");
var Cart = function (_a) {
    var cartItems = _a.cartItems, addToCart = _a.addToCart, removeFromCart = _a.removeFromCart;
    var calculateTotal = function (items) {
        return items.reduce(function (ack, item) { return ack + item.amount * item.price; }, 0);
    };
    return (react_1["default"].createElement("div", { className: "cart-wrapper" },
        react_1["default"].createElement("h2", null, "Your Shopping Cart"),
        cartItems.length === 0 ? react_1["default"].createElement("p", null, "No items in cart.") : null,
        cartItems.map(function (item) { return (react_1["default"].createElement(CartItem_1["default"], { key: item.id, item: item, addToCart: addToCart, removeFromCart: removeFromCart })); }),
        react_1["default"].createElement("h2", null,
            "Total: $",
            calculateTotal(cartItems).toFixed(2))));
};
exports["default"] = Cart;
