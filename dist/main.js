/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
async function getWeather(city)
{
    try{
    const weather_response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e855dc0381e0dc05852e114630e3cfcf&units=metric`,{mode: 'cors'});
    const weather_data = await weather_response.json();
    const weather_main = await weather_data.main;
    console.log(weather_data);
     return{
         name: weather_data.name,
         desc: weather_data.weather[0].description,
         feels_like: weather_data.main.feels_like,
         temp: weather_data.main.temp,
         temp_max:weather_data.main.temp_max,
         temp_min:weather_data.main.temp_min,
         humidity:weather_data.main.humidity,
     }
    }
    catch(err)
    {
        console.log(err)
    }
}



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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
//api key = e855dc0381e0dc05852e114630e3cfcf

const search_input = document.getElementById('weather_search');
const form = document.getElementById('weather_form');
const search_button = document.getElementById('search_btn');
form.addEventListener("submit",(e)=>{
    e.preventDefault();
})

search_button.addEventListener('click',async()=>{
    let city_name = search_input.value;
    const weather_obj = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(city_name);
    console.log(weather_obj)
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDhGQUE4RixLQUFLLHVEQUF1RCxhQUFhO0FBQ3ZLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNyQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ3VDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSw4QkFBOEIsb0RBQVU7QUFDeEM7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSlcbntcbiAgICB0cnl7XG4gICAgY29uc3Qgd2VhdGhlcl9yZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9ZTg1NWRjMDM4MWUwZGMwNTg1MmUxMTQ2MzBlM2NmY2YmdW5pdHM9bWV0cmljYCx7bW9kZTogJ2NvcnMnfSk7XG4gICAgY29uc3Qgd2VhdGhlcl9kYXRhID0gYXdhaXQgd2VhdGhlcl9yZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3Qgd2VhdGhlcl9tYWluID0gYXdhaXQgd2VhdGhlcl9kYXRhLm1haW47XG4gICAgY29uc29sZS5sb2cod2VhdGhlcl9kYXRhKTtcbiAgICAgcmV0dXJue1xuICAgICAgICAgbmFtZTogd2VhdGhlcl9kYXRhLm5hbWUsXG4gICAgICAgICBkZXNjOiB3ZWF0aGVyX2RhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICAgICAgIGZlZWxzX2xpa2U6IHdlYXRoZXJfZGF0YS5tYWluLmZlZWxzX2xpa2UsXG4gICAgICAgICB0ZW1wOiB3ZWF0aGVyX2RhdGEubWFpbi50ZW1wLFxuICAgICAgICAgdGVtcF9tYXg6d2VhdGhlcl9kYXRhLm1haW4udGVtcF9tYXgsXG4gICAgICAgICB0ZW1wX21pbjp3ZWF0aGVyX2RhdGEubWFpbi50ZW1wX21pbixcbiAgICAgICAgIGh1bWlkaXR5OndlYXRoZXJfZGF0YS5tYWluLmh1bWlkaXR5LFxuICAgICB9XG4gICAgfVxuICAgIGNhdGNoKGVycilcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG59XG5cbmV4cG9ydCB7Z2V0V2VhdGhlcn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2FwaSBrZXkgPSBlODU1ZGMwMzgxZTBkYzA1ODUyZTExNDYzMGUzY2ZjZlxuaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gXCIuL3dlYXRoZXJcIjtcbmNvbnN0IHNlYXJjaF9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyX3NlYXJjaCcpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyX2Zvcm0nKTtcbmNvbnN0IHNlYXJjaF9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoX2J0bicpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsKGUpPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSlcblxuc2VhcmNoX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYXN5bmMoKT0+e1xuICAgIGxldCBjaXR5X25hbWUgPSBzZWFyY2hfaW5wdXQudmFsdWU7XG4gICAgY29uc3Qgd2VhdGhlcl9vYmogPSBhd2FpdCBnZXRXZWF0aGVyKGNpdHlfbmFtZSk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlcl9vYmopXG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9