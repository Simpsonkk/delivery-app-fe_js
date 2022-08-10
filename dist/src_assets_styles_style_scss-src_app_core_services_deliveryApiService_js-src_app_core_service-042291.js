"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdelivery_app_fe"] = self["webpackChunkdelivery_app_fe"] || []).push([["src_assets_styles_style_scss-src_app_core_services_deliveryApiService_js-src_app_core_service-042291"],{

/***/ "./src/assets/styles/style.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://delivery_app_fe/./src/assets/styles/style.scss?");

/***/ }),

/***/ "./src/app/core/services/deliveryApiService.js":
/*!*****************************************************!*\
  !*** ./src/app/core/services/deliveryApiService.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deliveryApiService\": () => (/* binding */ deliveryApiService)\n/* harmony export */ });\nclass DeliveryApiService {\r\n  constructor() {\r\n    this.API = 'https://delivery-app-js.herokuapp.com/api/';\r\n    this.PRORUCTS = 'products/';\r\n    this.SHOPS = 'shops';\r\n    this.ORDERS = 'orders';\r\n  }\r\n  async getProducts(shopName) {\r\n    const response = await fetch(\r\n      `${this.API}${this.PRORUCTS}${JSON.parse(shopName)}`\r\n    );\r\n    return await response.json();\r\n  }\r\n\r\n  async getShop() {\r\n    const response = await fetch(`${this.API}${this.SHOPS}`);\r\n    return await response.json();\r\n  }\r\n\r\n  async sendOrder(order) {\r\n    await fetch(`${this.API}${this.ORDERS}`, {\r\n      method: 'POST',\r\n      headers: {\r\n        Accept: 'application/json, text/plain, */*',\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify(order),\r\n    });\r\n  }\r\n}\r\n\r\nconst deliveryApiService = new DeliveryApiService();\r\n\n\n//# sourceURL=webpack://delivery_app_fe/./src/app/core/services/deliveryApiService.js?");

/***/ }),

/***/ "./src/app/core/services/productService.js":
/*!*************************************************!*\
  !*** ./src/app/core/services/productService.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productService\": () => (/* binding */ productService)\n/* harmony export */ });\nclass ProductService {\n  constructor() {\n    this.keyname = 'products';\n  }\n\n  getSelectedProductIds() {\n    const productIds = localStorage.getItem(this.keyname);\n    if (productIds) {\n      return JSON.parse(productIds);\n    }\n    return [];\n  }\n\n  setSelectedProductIds(productId) {\n    let productIds = this.getSelectedProductIds();\n    productIds.push(productId);\n    localStorage.setItem(this.keyname, JSON.stringify(productIds));\n  }\n\n  decreaseByOneSelectedProductId(productId) {\n    let productIds = this.getSelectedProductIds();\n    let indexProductIdForRemove = products.indexOf(productId);\n    products.splice(indexProductIdForRemove, 1);\n    localStorage.setItem(this.keyname, JSON.stringify(productIds));\n  }\n\n  removeSelectedProductId(productId) {\n    let productIds = this.getSelectedProductIds();\n    productIds = products.filter((p) => p !== productId);\n    localStorage.setItem(this.keyname, JSON.stringify(productIds));\n  }\n}\n\nconst productService = new ProductService();\n\n\n//# sourceURL=webpack://delivery_app_fe/./src/app/core/services/productService.js?");

/***/ })

}]);