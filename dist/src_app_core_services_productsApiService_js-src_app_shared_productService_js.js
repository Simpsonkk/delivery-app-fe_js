"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdelivery_app_fe"] = self["webpackChunkdelivery_app_fe"] || []).push([["src_app_core_services_productsApiService_js-src_app_shared_productService_js"],{

/***/ "./src/app/core/services/productsApiService.js":
/*!*****************************************************!*\
  !*** ./src/app/core/services/productsApiService.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productsApiService\": () => (/* binding */ productsApiService)\n/* harmony export */ });\nclass ProductsApiService {\r\n  async getProducts(shopName) {\r\n    const response = await fetch(\r\n      `https://delivery-app-js.herokuapp.com/api/products/${JSON.parse(shopName)}`\r\n    );\r\n    return await response.json();\r\n  }\r\n\r\n  async getShopsNames() {\r\n    const response = await fetch('https://delivery-app-js.herokuapp.com/api/shops');\r\n    return await response.json();\r\n  }\r\n\r\n  async sendOrder(order) {\r\n    await fetch('https://delivery-app-js.herokuapp.com/api/orders', {\r\n      method: 'POST',\r\n      headers: {\r\n        Accept: 'application/json, text/plain, */*',\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify(order),\r\n    });\r\n  }\r\n}\r\n\r\nconst productsApiService = new ProductsApiService();\r\n\n\n//# sourceURL=webpack://delivery_app_fe/./src/app/core/services/productsApiService.js?");

/***/ }),

/***/ "./src/app/shared/productService.js":
/*!******************************************!*\
  !*** ./src/app/shared/productService.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productService\": () => (/* binding */ productService)\n/* harmony export */ });\nclass ProductService {\n  constructor() {\n    this.keyname = 'products';\n  }\n\n  getProducts() {\n    const productsLocalStorage = localStorage.getItem(this.keyname);\n    if (productsLocalStorage !== null) {\n      return JSON.parse(productsLocalStorage);\n    }\n    return [];\n  }\n\n  putProducts(id) {\n    let products = this.getProducts();\n    products.push(id);\n    localStorage.setItem(this.keyname, JSON.stringify(products));\n  }\n\n  removeProducts(id) {\n    let products = this.getProducts();\n    let index = products.indexOf(id);\n    products.splice(index, 1);\n    localStorage.setItem(this.keyname, JSON.stringify(products));\n  }\n\n  removeAllProducts(id) {\n    let products = this.getProducts();\n    const sameElem = products.filter((el) => el === id);\n    const deleteSameElem = products.filter((el) => el !== sameElem[0]);\n    localStorage.setItem(this.keyname, JSON.stringify(deleteSameElem));\n  }\n}\n\nconst productService = new ProductService();\n\n\n//# sourceURL=webpack://delivery_app_fe/./src/app/shared/productService.js?");

/***/ })

}]);