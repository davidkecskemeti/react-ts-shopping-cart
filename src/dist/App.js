"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_query_1 = require("react-query");
var react_2 = require("react");
//Componenets
var Drawer_1 = require("@material-ui/core/Drawer");
var LinearProgress_1 = require("@material-ui/core/LinearProgress");
var Grid_1 = require("@material-ui/core/Grid");
var ShoppingCart_1 = require("@material-ui/icons/ShoppingCart");
var Badge_1 = require("@material-ui/core/Badge");
var IconButton_1 = require("@material-ui/core/IconButton");
//Styles
require("./App.scss");
var Item_1 = require("./Item/Item");
var Cart_1 = require("./Cart/Cart");
//< angled brackets
//[] square brackets
//:colon
//;semicolon
//()parenthesis
//{} curly brackets
//The first await for converting to JSON the inside the parentheses is gonna be for the API call itself
var getProducts = function () { return __awaiter(void 0, void 0, Promise, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, fetch("https://fakestoreapi.com/products")];
        case 1: return [4 /*yield*/, (_a.sent()).json()];
        case 2: return [2 /*return*/, _a.sent()];
    }
}); }); };
var App = function () {
    var _a = react_2.useState(false), cartOpen = _a[0], setCartOpen = _a[1];
    var _b = react_2.useState([]), cartItems = _b[0], setCartItems = _b[1];
    var _c = react_query_1.useQuery("products", getProducts), data = _c.data, isLoading = _c.isLoading, error = _c.error;
    console.log(data);
    var getTotalItems = function (items) {
        return items.reduce(function (ack, item) { return ack + item.amount; }, 0);
    };
    var handleAddToCart = function (clickedItem) {
        setCartItems(function (prev) {
            //1. Is the item alreay added in the cart?
            var isItemInCart = prev.find(function (item) { return item.id === clickedItem.id; });
            if (isItemInCart) {
                return prev.map(function (item) {
                    return item.id === clickedItem.id
                        ? __assign(__assign({}, item), { amount: item.amount + 1 }) : item;
                });
            }
            //First time item is added
            return __spreadArrays(prev, [__assign(__assign({}, clickedItem), { amount: 1 })]);
        });
    };
    var handleRemoveFromCart = function (id) {
        setCartItems(function (prev) {
            return prev.reduce(function (ack, item) {
                if (item.id === id) {
                    if (item.amount === 1)
                        return ack;
                    return __spreadArrays(ack, [__assign(__assign({}, item), { amount: item.amount - 1 })]);
                }
                else {
                    return __spreadArrays(ack, [item]);
                }
            }, []);
        });
    };
    if (isLoading)
        return react_1["default"].createElement(LinearProgress_1["default"], null);
    if (error)
        return react_1["default"].createElement("div", null, "Something went wront...");
    return (react_1["default"].createElement("div", { className: "app-wrapper" },
        react_1["default"].createElement(Drawer_1["default"], { anchor: "right", open: cartOpen, onClose: function () { return setCartOpen(false); } },
            react_1["default"].createElement(Cart_1["default"], { cartItems: cartItems, addToCart: handleAddToCart, removeFromCart: handleRemoveFromCart })),
        react_1["default"].createElement("div", { className: "shopping-cart" },
            react_1["default"].createElement(IconButton_1["default"], { onClick: function () { return setCartOpen(true); } },
                react_1["default"].createElement(Badge_1["default"], { badgeContent: getTotalItems(cartItems), color: "error" },
                    react_1["default"].createElement(ShoppingCart_1["default"], null)))),
        react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 3 }, data === null || data === void 0 ? void 0 : data.map(function (item) { return (react_1["default"].createElement(Grid_1["default"], { item: true, key: item.id, xs: 12, sm: 4 },
            react_1["default"].createElement(Item_1["default"], { item: item, handleAddToCart: handleAddToCart }))); }))));
};
exports["default"] = App;
