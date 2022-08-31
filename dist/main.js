/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setWeather": () => (/* binding */ setWeather)
/* harmony export */ });
let city_name = document.querySelector('.city_name');
let desc = document.querySelector('.desc')
let card_div = document.querySelector('.card');
let feels_like = document.querySelector('.feels_like');
let temperature = document.querySelector('.temperature');
let max_temp = document.querySelector('.temp_max');
let min_temp = document.querySelector('.temp_min');;
let humidity = document.querySelector('.humidity');
function setWeather(weather_obj)
{
    card_div.style.display = "flex";
    city_name.textContent=weather_obj.name;
    desc.textContent=`${weather_obj.desc}`;
    feels_like.textContent=`feels like ${weather_obj.feels_like}°C`;
    temperature.textContent=`temperature : ${weather_obj.temp}°C`;
    max_temp.textContent=`max temperature : ${weather_obj.max_temp}°C`;
    min_temp.textContent=`min temperature : ${weather_obj.min_temp}°C`;
    humidity.textContent=`humidity :${weather_obj.humidity}%`;
}



/***/ }),

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
    if (!weather_response.ok) throw new Error(`${city} not found`);
    const weather_data = await weather_response.json();
    console.log(weather_data);
     return{
         name: weather_data.name,
         desc: weather_data.weather[0].description,
         feels_like: weather_data.main.feels_like,
         temp: weather_data.main.temp,
         max_temp:weather_data.main.temp_max,
         min_temp:weather_data.main.temp_min,
         humidity:weather_data.main.humidity,
     }
    }
    catch(err)
    {
        alert(err);
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
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
//api key = e855dc0381e0dc05852e114630e3cfcf


const search_input = document.getElementById('weather_search');
const form = document.getElementById('weather_form');
const search_button = document.getElementById('search_btn');
form.addEventListener("submit",(e)=>{
    e.preventDefault();
})

search_button.addEventListener('click',async()=>{
    
    let city_name = search_input.value;
    search_input.value='';
    const weather_obj = await (0,_weather__WEBPACK_IMPORTED_MODULE_1__.getWeather)(city_name);
    if(weather_obj != null)
    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.setWeather)(weather_obj);
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekMseUNBQXlDLHVCQUF1QjtBQUNoRSw2Q0FBNkMsaUJBQWlCO0FBQzlELDhDQUE4QyxxQkFBcUI7QUFDbkUsOENBQThDLHFCQUFxQjtBQUNuRSxzQ0FBc0MscUJBQXFCO0FBQzNEOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBLDhGQUE4RixLQUFLLHVEQUF1RCxhQUFhO0FBQ3ZLLGlEQUFpRCxNQUFNO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN0QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNrQztBQUNLO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9EQUFVO0FBQ3hDO0FBQ0EsSUFBSSwrQ0FBVTtBQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBjaXR5X25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eV9uYW1lJyk7XG5sZXQgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjJylcbmxldCBjYXJkX2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJyk7XG5sZXQgZmVlbHNfbGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVsc19saWtlJyk7XG5sZXQgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKTtcbmxldCBtYXhfdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wX21heCcpO1xubGV0IG1pbl90ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBfbWluJyk7O1xubGV0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5Jyk7XG5mdW5jdGlvbiBzZXRXZWF0aGVyKHdlYXRoZXJfb2JqKVxue1xuICAgIGNhcmRfZGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBjaXR5X25hbWUudGV4dENvbnRlbnQ9d2VhdGhlcl9vYmoubmFtZTtcbiAgICBkZXNjLnRleHRDb250ZW50PWAke3dlYXRoZXJfb2JqLmRlc2N9YDtcbiAgICBmZWVsc19saWtlLnRleHRDb250ZW50PWBmZWVscyBsaWtlICR7d2VhdGhlcl9vYmouZmVlbHNfbGlrZX3CsENgO1xuICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50PWB0ZW1wZXJhdHVyZSA6ICR7d2VhdGhlcl9vYmoudGVtcH3CsENgO1xuICAgIG1heF90ZW1wLnRleHRDb250ZW50PWBtYXggdGVtcGVyYXR1cmUgOiAke3dlYXRoZXJfb2JqLm1heF90ZW1wfcKwQ2A7XG4gICAgbWluX3RlbXAudGV4dENvbnRlbnQ9YG1pbiB0ZW1wZXJhdHVyZSA6ICR7d2VhdGhlcl9vYmoubWluX3RlbXB9wrBDYDtcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudD1gaHVtaWRpdHkgOiR7d2VhdGhlcl9vYmouaHVtaWRpdHl9JWA7XG59XG5cbmV4cG9ydCB7c2V0V2VhdGhlcn0iLCJhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpXG57XG4gICAgdHJ5e1xuICAgIGNvbnN0IHdlYXRoZXJfcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPWU4NTVkYzAzODFlMGRjMDU4NTJlMTE0NjMwZTNjZmNmJnVuaXRzPW1ldHJpY2Ase21vZGU6ICdjb3JzJ30pO1xuICAgIGlmICghd2VhdGhlcl9yZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGAke2NpdHl9IG5vdCBmb3VuZGApO1xuICAgIGNvbnN0IHdlYXRoZXJfZGF0YSA9IGF3YWl0IHdlYXRoZXJfcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJfZGF0YSk7XG4gICAgIHJldHVybntcbiAgICAgICAgIG5hbWU6IHdlYXRoZXJfZGF0YS5uYW1lLFxuICAgICAgICAgZGVzYzogd2VhdGhlcl9kYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICAgICBmZWVsc19saWtlOiB3ZWF0aGVyX2RhdGEubWFpbi5mZWVsc19saWtlLFxuICAgICAgICAgdGVtcDogd2VhdGhlcl9kYXRhLm1haW4udGVtcCxcbiAgICAgICAgIG1heF90ZW1wOndlYXRoZXJfZGF0YS5tYWluLnRlbXBfbWF4LFxuICAgICAgICAgbWluX3RlbXA6d2VhdGhlcl9kYXRhLm1haW4udGVtcF9taW4sXG4gICAgICAgICBodW1pZGl0eTp3ZWF0aGVyX2RhdGEubWFpbi5odW1pZGl0eSxcbiAgICAgfVxuICAgIH1cbiAgICBjYXRjaChlcnIpXG4gICAge1xuICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxufVxuXG5leHBvcnQge2dldFdlYXRoZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9hcGkga2V5ID0gZTg1NWRjMDM4MWUwZGMwNTg1MmUxMTQ2MzBlM2NmY2ZcbmltcG9ydCB7IHNldFdlYXRoZXIgfSBmcm9tIFwiLi91aVwiO1xuaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gXCIuL3dlYXRoZXJcIjtcbmNvbnN0IHNlYXJjaF9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyX3NlYXJjaCcpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyX2Zvcm0nKTtcbmNvbnN0IHNlYXJjaF9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoX2J0bicpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsKGUpPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSlcblxuc2VhcmNoX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYXN5bmMoKT0+e1xuICAgIFxuICAgIGxldCBjaXR5X25hbWUgPSBzZWFyY2hfaW5wdXQudmFsdWU7XG4gICAgc2VhcmNoX2lucHV0LnZhbHVlPScnO1xuICAgIGNvbnN0IHdlYXRoZXJfb2JqID0gYXdhaXQgZ2V0V2VhdGhlcihjaXR5X25hbWUpO1xuICAgIGlmKHdlYXRoZXJfb2JqICE9IG51bGwpXG4gICAgc2V0V2VhdGhlcih3ZWF0aGVyX29iaik7XG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9