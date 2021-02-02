"use strict";
exports.__esModule = true;
var react_1 = require("react");
//Styles
require("./CartItem.scss");
//Components
var Button_1 = require("@material-ui/core/Button");
var CartItem = function (_a) {
    var item = _a.item, addToCart = _a.addToCart, removeFromCart = _a.removeFromCart;
    return (react_1["default"].createElement("div", { className: "cart-item-wrapper" },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("h3", null, item.title),
            react_1["default"].createElement("div", { className: "information" },
                react_1["default"].createElement("p", null,
                    "Price: $",
                    item.price),
                react_1["default"].createElement("p", null,
                    "Total: $",
                    (item.amount * item.price).toFixed(2))),
            react_1["default"].createElement("div", { className: "buttons" },
                react_1["default"].createElement(Button_1["default"], { size: "small", disableElevation: true, variant: "contained", onClick: function () { return removeFromCart(item.id); } }, "-"),
                react_1["default"].createElement("p", null, item.amount),
                react_1["default"].createElement(Button_1["default"], { size: "small", disableElevation: true, variant: "contained", onClick: function () { return addToCart(item); } }, "+"))),
        react_1["default"].createElement("img", { src: item.image, alt: item.title })));
};
exports["default"] = CartItem;
