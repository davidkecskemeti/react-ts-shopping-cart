"use strict";
exports.__esModule = true;
var Button_1 = require("@material-ui/core/Button");
//Styles
require("./Item.scss");
var Item = function (_a) {
    var item = _a.item, handleAddToCart = _a.handleAddToCart;
    return (React.createElement("div", { className: "item-wrapper" },
        React.createElement("img", { src: item.image, alt: item.title }),
        React.createElement("div", null,
            React.createElement("h3", null, item.title),
            React.createElement("p", null, item.description),
            React.createElement("h3", null,
                "$",
                item.price)),
        React.createElement(Button_1["default"], { onClick: function () { return handleAddToCart(item); } }, "Add to cart")));
};
exports["default"] = Item;
