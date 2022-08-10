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

/***/ "./src/app/areas/shopping-list/shopping-list.js":
/*!******************************************************!*\
  !*** ./src/app/areas/shopping-list/shopping-list.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/assets/styles/style.scss */ \"./src/assets/styles/style.scss\");\n/* harmony import */ var _core_services_productService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/productService.js */ \"./src/app/core/services/productService.js\");\n/* harmony import */ var _core_services_deliveryApiService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/deliveryApiService.js */ \"./src/app/core/services/deliveryApiService.js\");\n\r\n\r\n\r\n\r\nclass ShoppingList {\r\n  handleSetLocationStorage(event) {\r\n    _core_services_productService_js__WEBPACK_IMPORTED_MODULE_1__.productService.setSelectedProductIds(event.target.getAttribute('data-id'));\r\n    event.target.innerHTML = 'Added';\r\n    event.target.setAttribute('disabled', 'disabled');\r\n  }\r\n\r\n  render(products) {\r\n    const selectedProducts = _core_services_productService_js__WEBPACK_IMPORTED_MODULE_1__.productService.getSelectedProductIds();\r\n    let htmlCatalog = '';\r\n    let activeTextButton = '';\r\n    products.forEach(({ productId, name, price, img }) => {\r\n      let disabledButton = '';\r\n      if (selectedProducts.indexOf(productId) === -1) {\r\n        activeTextButton = 'Add to Cart';\r\n      } else {\r\n        activeTextButton = 'Added';\r\n        disabledButton = 'disabled=\"disabled\"';\r\n      }\r\n\r\n      htmlCatalog += `\r\n      <div class=\"delivery-content__product row col-4 justify-content-center\">\r\n        <img class=\"delivery-content__img col-auto\" src=${img}>\r\n        <div class=\"w-100\"></div>\r\n        <p class=\"delivery-content__name col-auto\">${name}</p>\r\n        <p class=\"delivery-content__cost col-auto\">${price} $</p>\r\n        <div class=\"w-100\"></div>\r\n        <button type=\"button\" class=\"delivery-content__buy-button col-6 btn \r\n        btn-outline-success\" data-id=${productId} ${disabledButton}>${activeTextButton}</button>\r\n      </div>\r\n      `;\r\n    });\r\n    const html = `\r\n    <div class=\"delivery-content__shop-menu row ms-1 p-0 pb-1\">\r\n      ${htmlCatalog}\r\n    </div>\r\n    `;\r\n\r\n    document.getElementById('allMenuContainer').innerHTML = html;\r\n    this.initAddEventListeners();\r\n  }\r\n\r\n  initAddEventListeners() {\r\n    document\r\n      .querySelectorAll('.delivery-content__buy-button')\r\n      .forEach((buyProductBtn) => {\r\n        buyProductBtn.addEventListener(\r\n          'click',\r\n          shoppingList.handleSetLocationStorage\r\n        );\r\n      });\r\n  }\r\n\r\n  async renderShopBtns() {\r\n    const shops = await _core_services_deliveryApiService_js__WEBPACK_IMPORTED_MODULE_2__.deliveryApiService.getShop();\r\n    let shopBtnsToRender = '';\r\n    shops.forEach(({ shop, shopId }) => {\r\n      shopBtnsToRender += `\r\n         <div class=\"w-100\"></div>\r\n          <button id=\"shopButton-${shopId}\" \r\n                  type=\"button\" \r\n                  class=\"delivery-content__shop-button btn btn-outline-warning col mb-2\" \r\n                  data-id=\"${shopId}\"\r\n          >${shop}</button>\r\n          `;\r\n    });\r\n    document.querySelector('.delivery-content__shops').innerHTML =\r\n      shopBtnsToRender;\r\n    this.renderShopProducts();\r\n  }\r\n\r\n  renderShopProducts() {\r\n    const shopBtns = document.querySelectorAll('button[id^=\"shopButton-\"]');\r\n    shopBtns.forEach((shopBtn) => {\r\n      const shopId = shopBtn.getAttribute('data-id');\r\n      shopBtn.addEventListener('click', async () => {\r\n        let products = await _core_services_deliveryApiService_js__WEBPACK_IMPORTED_MODULE_2__.deliveryApiService.getProducts(shopId);\r\n        this.render(products);\r\n        localStorage.clear();\r\n        localStorage.setItem('shopId', JSON.stringify(shopId));\r\n      });\r\n    });\r\n  }\r\n}\r\n\r\nconst shoppingList = new ShoppingList();\r\nshoppingList.renderShopBtns();\r\n\n\n//# sourceURL=webpack://delivery_app_fe/./src/app/areas/shopping-list/shopping-list.js?");

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
/******/ 			"pageOne": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_assets_styles_style_scss-src_app_core_services_deliveryApiService_js-src_app_core_service-042291"], () => (__webpack_require__("./src/app/areas/shopping-list/shopping-list.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;