/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/areas/shopping-cart/counter.js":
/*!************************************************!*\
  !*** ./src/app/areas/shopping-cart/counter.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counter\": () => (/* binding */ counter)\n/* harmony export */ });\n/* harmony import */ var _core_services_productService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/productService.js */ \"./src/app/core/services/productService.js\");\n\r\n\r\nclass ProductCounter {\r\n  decreaseProduct() {\r\n    const selectedproducts = document.querySelectorAll(\r\n      '.delivery-content__product'\r\n    );\r\n    selectedproducts.forEach((product) => {\r\n      product\r\n        .querySelector('[data-action=\"minus\"]')\r\n        .addEventListener('click', () => {\r\n          const counter = product.querySelector('[data-counter]');\r\n          if (+counter.innerText === 1) return;\r\n\r\n          counter.innerText = --counter.innerText;\r\n          const idproduct = product\r\n            .querySelector('[data-id]')\r\n            .getAttribute('data-id');\r\n          this.calcTotalPrice();\r\n          _core_services_productService_js__WEBPACK_IMPORTED_MODULE_0__.productService.decreaseByOneSelectedProductId(idproduct);\r\n        });\r\n    });\r\n  }\r\n\r\n  increaseProduct() {\r\n    const selectedproducts = document.querySelectorAll(\r\n      '.delivery-content__product'\r\n    );\r\n    selectedproducts.forEach((product) => {\r\n      product\r\n        .querySelector('[data-action=\"plus\"]')\r\n        .addEventListener('click', () => {\r\n          const productQuantity = product.querySelector('[data-counter]');\r\n          productQuantity.innerText = ++counter.innerText;\r\n          const id = product.querySelector('[data-id]').getAttribute('data-id');\r\n          this.calcTotalPrice();\r\n          _core_services_productService_js__WEBPACK_IMPORTED_MODULE_0__.productService.setSelectedProductIds(id);\r\n        });\r\n    });\r\n  }\r\n\r\n  calcTotalPrice() {\r\n    const selectedproducts = document.querySelectorAll(\r\n      '.delivery-content__product'\r\n    );\r\n    let totalPrice = 0;\r\n    selectedproducts.forEach((product) => {\r\n      const productPrice = product.querySelector(\r\n        '.delivery-content__cost'\r\n      ).innerHTML;\r\n      const productCount = product.querySelector('[data-counter]').innerHTML;\r\n      const productCost = +productPrice * +productCount;\r\n      totalPrice += productCost;\r\n    });\r\n    document.getElementById(\r\n      'totalPrice'\r\n    ).innerHTML = `Total price: ${totalPrice} $`;\r\n  }\r\n}\r\n\r\nconst counter = new ProductCounter();\r\n\n\n//# sourceURL=webpack://delivery_app_fe/./src/app/areas/shopping-cart/counter.js?");

/***/ }),

/***/ "./src/app/areas/shopping-cart/shopping-cart.js":
/*!******************************************************!*\
  !*** ./src/app/areas/shopping-cart/shopping-cart.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shoppingCart\": () => (/* binding */ shoppingCart)\n/* harmony export */ });\n/* harmony import */ var _src_assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/assets/styles/style.scss */ \"./src/assets/styles/style.scss\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.js */ \"./src/app/areas/shopping-cart/counter.js\");\n/* harmony import */ var _core_services_productService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/productService.js */ \"./src/app/core/services/productService.js\");\n/* harmony import */ var _core_services_deliveryApiService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/deliveryApiService.js */ \"./src/app/core/services/deliveryApiService.js\");\n\r\n\r\n\r\n\r\n\r\nclass ShoppingCart {\r\n  initAddEventListeners() {\r\n    document\r\n      .querySelectorAll('.delivery-content__remove-button')\r\n      .forEach((removeProductButton) => {\r\n        removeProductButton.addEventListener(\r\n          'click',\r\n          shoppingCart.removeproduct\r\n        );\r\n      });\r\n\r\n    document\r\n      .getElementById('submit')\r\n      .addEventListener('click', shoppingCart.setOrder);\r\n  }\r\n\r\n  render(products) {\r\n    const selectedProducts = _core_services_productService_js__WEBPACK_IMPORTED_MODULE_2__.productService.getSelectedProductIds();\r\n    let selectedProductsCount = {};\r\n    [...new Set(products)].forEach((product) => {\r\n      selectedProductsCount[product] = products.filter(\r\n        (x) => x === product\r\n      ).length;\r\n    });\r\n\r\n    let htmlCatalog = '';\r\n    let totalPrice = 0;\r\n    selectedProducts.forEach(({ productId, name, price, img }) => {\r\n      if (products.indexOf(JSON.stringify(productId)) !== -1) {\r\n        const quantity = selectedProductsCount[productId];\r\n\r\n        htmlCatalog += `\r\n        <div class=\"delivery-content__product row col-4 justify-content-center\">\r\n          <img class=\"delivery-content__img col-auto\" src=${img}>\r\n          <div class=\"w-100\"></div>\r\n          <p class=\"delivery-content__name col-auto\">${name}</p>\r\n          <p class=\"delivery-content__cost col-auto p-0\">${price}</p>\r\n          <p class=\"delivery-content__currency col-auto p-0\">$</p>\r\n          <div class=\"w-100\"></div>\r\n          <button type=\"button\" class=\"delivery-content__remove-button col-2 p-0 btn \r\n          btn-outline-success\" data-id=${productId}>x</button>\r\n          <div class=\"delivery-content__counter-wrapper col-6 ms-2\">\r\n            <div class=\"delivery-content__control\" data-action=\"minus\">-</div>\r\n            <div id=\"counter\" class=\"delivery-content__current\" data-counter>${quantity}</div>\r\n            <div class=\"delivery-content__control\" data-action=\"plus\">+</div>\r\n          </div>\r\n        </div>\r\n        `;\r\n        totalPrice += price * quantity;\r\n      }\r\n    });\r\n    document.getElementById('selectedproducts').innerHTML = htmlCatalog;\r\n    document.getElementById(\r\n      'totalPrice'\r\n    ).innerHTML = `Total price: ${totalPrice} $`;\r\n    this.initAddEventListeners();\r\n    _counter_js__WEBPACK_IMPORTED_MODULE_1__.counter.increaseProduct();\r\n    _counter_js__WEBPACK_IMPORTED_MODULE_1__.counter.decreaseProduct();\r\n  }\r\n\r\n  async removeproduct(event) {\r\n    _core_services_productService_js__WEBPACK_IMPORTED_MODULE_2__.productService.removeSelectedProductId(event.target.getAttribute('data-id'));\r\n    const shopName = localStorage.getItem('products');\r\n    const removesProducts = await _core_services_deliveryApiService_js__WEBPACK_IMPORTED_MODULE_3__.deliveryApiService.getProducts(shopName);\r\n    shoppingCart.render(removesProducts);\r\n  }\r\n\r\n  sumTotal() {\r\n    const selectedproducts = document.querySelectorAll(\r\n      '.delivery-content__product'\r\n    );\r\n\r\n    var totalPrice = 0;\r\n    selectedproducts.forEach((item) => {\r\n      const quantityEl = item.querySelector(\r\n        '.delivery-content__current'\r\n      ).textContent;\r\n      const priceEl = item.querySelector('.delivery-content__cost').textContent;\r\n      const currentPrice = quantityEl * priceEl;\r\n      totalPrice += currentPrice;\r\n    });\r\n\r\n    document.getElementById(\r\n      'totalPrice'\r\n    ).innerHTML = `Total price: ${totalPrice} $`;\r\n  }\r\n\r\n  async setOrder() {\r\n    let productsCount = [];\r\n    const shopName = localStorage.getItem('products');\r\n    const list = await _core_services_deliveryApiService_js__WEBPACK_IMPORTED_MODULE_3__.deliveryApiService.getProducts(shopName);\r\n    const totalPrice = document\r\n      .getElementById('totalPrice')\r\n      .innerHTML.split('Total price: ')\r\n      .join('');\r\n    const userName = document.getElementById('userName').value;\r\n    const userEmail = document.getElementById('userEmail').value;\r\n    const userPhone = document.getElementById('userPhone').value;\r\n    const userAddress = document.getElementById('userAddress').value;\r\n    document.querySelectorAll('.delivery-content__current').forEach((btn) => {\r\n      productsCount.push(btn.textContent);\r\n    });\r\n    list.length = productsCount.length;\r\n\r\n    const productsNameAndQuantity = list.reduce((acc, el, i) => {\r\n      acc.push(el.name, productsCount[i]);\r\n      return acc;\r\n    }, []);\r\n    const shops = await _core_services_deliveryApiService_js__WEBPACK_IMPORTED_MODULE_3__.deliveryApiService.getShopsNames();\r\n    const selectedShopName = shops\r\n      .filter((el) => JSON.parse(shopName).includes(el.products))\r\n      .map((el) => el.shop);\r\n    const order = {\r\n      shop: selectedShopName.join(''),\r\n      productsNameAndQuantity: productsNameAndQuantity,\r\n      totalPrice: totalPrice,\r\n      userName: userName,\r\n      userEmail: userEmail,\r\n      userPhone: userPhone,\r\n      userAddress: userAddress,\r\n    };\r\n    localStorage.clear();\r\n    document.getElementById('selectedproducts').innerHTML = '';\r\n    document.getElementById('totalPrice').innerHTML = 'Total price: 0 $';\r\n    document\r\n      .querySelectorAll('.shopping-cart__input')\r\n      .forEach((userDatainput) => {\r\n        userDatainput.value = '';\r\n      });\r\n    await _core_services_deliveryApiService_js__WEBPACK_IMPORTED_MODULE_3__.deliveryApiService.sendOrder(order);\r\n    alert('Your order has been sent!');\r\n  }\r\n\r\n  async productsInit() {\r\n    const selectedShop = localStorage.getItem('products');\r\n    if (!selectedShop) return;\r\n\r\n    const products = await _core_services_deliveryApiService_js__WEBPACK_IMPORTED_MODULE_3__.deliveryApiService.getProducts(selectedShop);\r\n    this.render(products);\r\n  }\r\n}\r\n\r\nconst shoppingCart = new ShoppingCart();\r\nshoppingCart.productsInit();\r\n\n\n//# sourceURL=webpack://delivery_app_fe/./src/app/areas/shopping-cart/shopping-cart.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"pageTwo": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdelivery_app_fe"] = self["webpackChunkdelivery_app_fe"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_assets_styles_style_scss-src_app_core_services_deliveryApiService_js-src_app_core_service-042291"], () => (__webpack_require__("./src/app/areas/shopping-cart/shopping-cart.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;