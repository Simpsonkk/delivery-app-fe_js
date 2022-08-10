"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdelivery_app_fe"] = self["webpackChunkdelivery_app_fe"] || []).push([["src_assets_styles_style_scss-src_app_core_services_productApiService_js-src_app_core_services-18c9dd"],{

/***/ "./src/assets/styles/style.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://delivery_app_fe/./src/assets/styles/style.scss?");

/***/ }),

/***/ "./src/app/core/services/productApiService.js":
/*!****************************************************!*\
  !*** ./src/app/core/services/productApiService.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productApiService\": () => (/* binding */ productApiService)\n/* harmony export */ });\n// ProductApiService => DeliveryApiService\r\n// вынести апи в переменную\r\n// getShopsNames => getShopNames\r\n\r\nclass ProductApiService {\r\n  async getProducts(shopName) {\r\n    const response = await fetch(\r\n      `https://delivery-app-js.herokuapp.com/api/products/${shopName}`, {mode: \"no-cors\"}\r\n    );\r\n    return await response.json();\r\n  }\r\n\r\n  async getShopsNames() {\r\n    const response = await fetch(\r\n      'https://delivery-app-js.herokuapp.com/api/shops'\r\n    );\r\n    return await response.json();\r\n  }\r\n\r\n  async sendOrder(order) {\r\n    await fetch('https://delivery-app-js.herokuapp.com/api/orders', {\r\n      method: 'POST',\r\n      headers: {\r\n        Accept: 'application/json, text/plain, */*',\r\n        'Content-Type': 'application/json',\r\n        // OPTIONS : 'Access-Control-Allow-Origin' \r\n      },\r\n      body: JSON.stringify(order),\r\n    });\r\n  }\r\n}\r\n\r\nconst productApiService = new ProductApiService();\r\n\n\n//# sourceURL=webpack://delivery_app_fe/./src/app/core/services/productApiService.js?");

/***/ }),

/***/ "./src/app/core/services/productService.js":
/*!*************************************************!*\
  !*** ./src/app/core/services/productService.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productService\": () => (/* binding */ productService)\n/* harmony export */ });\n// productsLocalStorage => productIds\n// getProducts => getSelectedProductIds\n// products => productIds\n// putProducts => setSelectedProductIds\n// removeProducts => decreaseByOneSelectedProductId\n// removeAllProducts => removeSelectedProductId \n\nclass ProductService {\n  constructor() {\n    this.keyname = 'products';\n  }\n\n  getProducts() {\n    const productsLocalStorage = localStorage.getItem(this.keyname);\n    if (productsLocalStorage) {\n      return JSON.parse(productsLocalStorage);\n    }\n    return [];\n  }\n\n  putProducts(productId) {\n    let products = this.getProducts();\n    products.push(productId);\n    localStorage.setItem(this.keyname, JSON.stringify(products));\n  }\n\n  removeProducts(productId) {\n    let products = this.getProducts();\n    let indexProductIdForRemove = products.indexOf(productId);\n    products.splice(indexProductIdForRemove, 1);\n    localStorage.setItem(this.keyname, JSON.stringify(products));\n  }\n\n  removeAllProducts(productId) {\n    let products = this.getProducts();\n    // const sameProductIds = products.filter((el) => el === productId);\n    // const deleteSameElem = products.filter((el) => el !== sameProductIds[0]);\n    products = products.filter(p => p !== productId);\n    localStorage.setItem(this.keyname, JSON.stringify(products));\n  }\n}\n\nconst productService = new ProductService();\n\n\n//# sourceURL=webpack://delivery_app_fe/./src/app/core/services/productService.js?");

/***/ })

}]);