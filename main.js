/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createAbout)\n/* harmony export */ });\nconst about = {\n  title: \"About Us\",\n  address: \"42 Rue du Goût, 75005 Paris, France\",\n  phone: \"+33 1 23 45 67 89\"\n}\n\nfunction createAbout(){\n    const content = document.querySelector('#content')\n\n    const h1 = document.createElement('h1')\n    h1.textContent = 'About us'\n\n    const address = document.createElement('p')\n    address.textContent = \"Address: \" + about.address\n\n    const phone = document.createElement('p')\n    phone.textContent = \"Phone: \" + about.phone;\n\n    [h1, address, phone].forEach(element=>{\n        content.appendChild(element)\n    })\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanM/NTg2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhYm91dCA9IHtcbiAgdGl0bGU6IFwiQWJvdXQgVXNcIixcbiAgYWRkcmVzczogXCI0MiBSdWUgZHUgR2/Du3QsIDc1MDA1IFBhcmlzLCBGcmFuY2VcIixcbiAgcGhvbmU6IFwiKzMzIDEgMjMgNDUgNjcgODlcIlxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBYm91dCgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBoMS50ZXh0Q29udGVudCA9ICdBYm91dCB1cydcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCJBZGRyZXNzOiBcIiArIGFib3V0LmFkZHJlc3NcblxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGhvbmUudGV4dENvbnRlbnQgPSBcIlBob25lOiBcIiArIGFib3V0LnBob25lO1xuXG4gICAgW2gxLCBhZGRyZXNzLCBwaG9uZV0uZm9yRWFjaChlbGVtZW50PT57XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgICB9KVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/about.js\n\n}");

/***/ }),

/***/ "./src/images/burger.jpg":
/*!*******************************!*\
  !*** ./src/images/burger.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f60b2647cf7241500d1.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ \"./src/page-load.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\nconsole.log(\"Restaurant page\")\n\nconst content = document.querySelector('#content')\n\nconst homeButton = document.querySelector('button#home')\nconst menuButton = document.querySelector('button#menu')\nconst aboutButton = document.querySelector('button#about')\n\nArray.from(document.querySelectorAll('button')).forEach(button=>{\n    button.addEventListener('click', event =>{\n    content.innerHTML = '' // empty the element\n    })\n})\n\nmenuButton.addEventListener('click', event=>{\n    ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenu)()\n})\n\nhomeButton.addEventListener('click', event=>{\n    ;(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n})\n\naboutButton.addEventListener('click', event=>{\n    ;(0,_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF1QztBQUNIO0FBQ0E7QUFDcEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0EsSUFBSSxxREFBVTtBQUNkLENBQUM7O0FBRUQ7QUFDQSxJQUFJLDBEQUFVO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBLElBQUksc0RBQVc7QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9wYWdlLWxvYWQuanNcIlxuaW1wb3J0IHtjcmVhdGVNZW51fSBmcm9tIFwiLi9tZW51LmpzXCJcbmltcG9ydCBjcmVhdGVBYm91dCBmcm9tICcuL2Fib3V0LmpzJ1xuY29uc29sZS5sb2coXCJSZXN0YXVyYW50IHBhZ2VcIilcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiNob21lJylcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24jbWVudScpXG5jb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiNhYm91dCcpXG5cbkFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJykpLmZvckVhY2goYnV0dG9uPT57XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT57XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJyAvLyBlbXB0eSB0aGUgZWxlbWVudFxuICAgIH0pXG59KVxuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQ9PntcbiAgICBjcmVhdGVNZW51KClcbn0pXG5cbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudD0+e1xuICAgIGNyZWF0ZUhvbWUoKVxufSlcblxuYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudD0+e1xuICAgIGNyZWF0ZUFib3V0KClcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ createMenu)\n/* harmony export */ });\nconst menu = [\n    {\n        name: 'classic',\n        items: [\n            {\n                name: 'cheeseburger original',\n                description: 'crispy bun with beef and bacon smoked sauce and melted cheese',\n                price: 9\n            },\n            {\n                name: 'double beef deluxe',\n                description: 'two juicy beef patties, cheddar, lettuce, tomato, and house sauce',\n                price: 11\n            },\n            {\n                name: 'bbq bacon burger',\n                description: 'grilled beef with crispy bacon, smoky BBQ sauce, and onion rings',\n                price: 10\n            },\n            {\n                name: 'veggie classic',\n                description: 'grilled veggie patty with lettuce, tomato, pickles, and vegan mayo',\n                price: 8\n            },\n            {\n                name: 'spicy beef crunch',\n                description: 'beef patty with jalapeños, spicy chipotle sauce, and pepper jack cheese',\n                price: 9.5\n            }\n        ]\n    },\n    {\n        name: 'chicken',\n        items: [\n            {\n                name: 'chicken legend',\n                description: 'crispy bun with chicken fillet, lettuce, and creamy garlic sauce',\n                price: 9\n            },\n            {\n                name: 'spicy chicken melt',\n                description: 'spicy breaded chicken, cheddar cheese, and hot mayo',\n                price: 9.5\n            },\n            {\n                name: 'grilled chicken club',\n                description: 'grilled chicken breast, bacon, lettuce, tomato, and ranch dressing',\n                price: 10\n            },\n            {\n                name: 'chicken tenders box',\n                description: '5 crispy chicken tenders served with dipping sauces',\n                price: 7.5\n            },\n            {\n                name: 'buffalo chicken burger',\n                description: 'fried chicken tossed in buffalo sauce with blue cheese dressing',\n                price: 9.5\n            }\n        ]\n    },\n    {\n        name: 'drinks',\n        items: [\n            {\n                name: 'cola',\n                description: 'classic fizzy cola served chilled',\n                price: 2.5\n            },\n            {\n                name: 'lemon iced tea',\n                description: 'refreshing lemon-flavored iced tea',\n                price: 2.8\n            },\n            {\n                name: 'sparkling water',\n                description: 'carbonated mineral water',\n                price: 2\n            },\n            {\n                name: 'vanilla milkshake',\n                description: 'creamy vanilla shake topped with whipped cream',\n                price: 4\n            },\n            {\n                name: 'mango smoothie',\n                description: 'blended mango and yogurt smoothie',\n                price: 4.5\n            }\n        ]\n    },\n    {\n        name: 'desserts',\n        items: [\n            {\n                name: 'chocolate brownie',\n                description: 'rich chocolate brownie with a gooey center',\n                price: 3.5\n            },\n            {\n                name: 'apple pie',\n                description: 'warm apple pie with cinnamon and flaky crust',\n                price: 3\n            },\n            {\n                name: 'ice cream sundae',\n                description: 'vanilla ice cream with chocolate syrup and nuts',\n                price: 4\n            },\n            {\n                name: 'cheesecake slice',\n                description: 'classic New York-style cheesecake',\n                price: 4.5\n            },\n            {\n                name: 'cookie duo',\n                description: 'two freshly baked chocolate chip cookies',\n                price: 2.5\n            }\n        ]\n    }\n]\n\n\nfunction createMenu(){\n    const content = document.querySelector('#content')\n\n    const h1 = document.createElement('h1')\n    h1.textContent = 'Discover our menu'\n\n    const menuDiv = document.createElement('div')\n\n    menu.forEach(category => {\n        const h2 = document.createElement('h2');\n        h2.textContent = category.name;\n\n        const ul = document.createElement('ul')\n        category.items.forEach(item =>{\n            const li = document.createElement('li');\n            const h3 = document.createElement('h3');\n            const p = document.createElement('p');\n            const price = document.createElement('span');\n\n            h3.textContent = item.name;\n            p.textContent = item.description;\n            price.textContent = item.price + '$';\n\n            [h3, p, price].forEach(element => \n                li.appendChild(element)\n            )\n\n            ul.appendChild(li);\n\n        })\n\n        menuDiv.appendChild(h2)\n        menuDiv.appendChild(ul);\n\n    })\n\n    content.appendChild(h1);\n    content.appendChild(menuDiv);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanM/YWIwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZW51ID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ2NsYXNzaWMnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVlc2VidXJnZXIgb3JpZ2luYWwnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnY3Jpc3B5IGJ1biB3aXRoIGJlZWYgYW5kIGJhY29uIHNtb2tlZCBzYXVjZSBhbmQgbWVsdGVkIGNoZWVzZScsXG4gICAgICAgICAgICAgICAgcHJpY2U6IDlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2RvdWJsZSBiZWVmIGRlbHV4ZScsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICd0d28ganVpY3kgYmVlZiBwYXR0aWVzLCBjaGVkZGFyLCBsZXR0dWNlLCB0b21hdG8sIGFuZCBob3VzZSBzYXVjZScsXG4gICAgICAgICAgICAgICAgcHJpY2U6IDExXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdiYnEgYmFjb24gYnVyZ2VyJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2dyaWxsZWQgYmVlZiB3aXRoIGNyaXNweSBiYWNvbiwgc21va3kgQkJRIHNhdWNlLCBhbmQgb25pb24gcmluZ3MnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAxMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAndmVnZ2llIGNsYXNzaWMnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZ3JpbGxlZCB2ZWdnaWUgcGF0dHkgd2l0aCBsZXR0dWNlLCB0b21hdG8sIHBpY2tsZXMsIGFuZCB2ZWdhbiBtYXlvJyxcbiAgICAgICAgICAgICAgICBwcmljZTogOFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnc3BpY3kgYmVlZiBjcnVuY2gnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYmVlZiBwYXR0eSB3aXRoIGphbGFwZcOxb3MsIHNwaWN5IGNoaXBvdGxlIHNhdWNlLCBhbmQgcGVwcGVyIGphY2sgY2hlZXNlJyxcbiAgICAgICAgICAgICAgICBwcmljZTogOS41XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ2NoaWNrZW4nLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdjaGlja2VuIGxlZ2VuZCcsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdjcmlzcHkgYnVuIHdpdGggY2hpY2tlbiBmaWxsZXQsIGxldHR1Y2UsIGFuZCBjcmVhbXkgZ2FybGljIHNhdWNlJyxcbiAgICAgICAgICAgICAgICBwcmljZTogOVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnc3BpY3kgY2hpY2tlbiBtZWx0JyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3NwaWN5IGJyZWFkZWQgY2hpY2tlbiwgY2hlZGRhciBjaGVlc2UsIGFuZCBob3QgbWF5bycsXG4gICAgICAgICAgICAgICAgcHJpY2U6IDkuNVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ3JpbGxlZCBjaGlja2VuIGNsdWInLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZ3JpbGxlZCBjaGlja2VuIGJyZWFzdCwgYmFjb24sIGxldHR1Y2UsIHRvbWF0bywgYW5kIHJhbmNoIGRyZXNzaW5nJyxcbiAgICAgICAgICAgICAgICBwcmljZTogMTBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2NoaWNrZW4gdGVuZGVycyBib3gnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnNSBjcmlzcHkgY2hpY2tlbiB0ZW5kZXJzIHNlcnZlZCB3aXRoIGRpcHBpbmcgc2F1Y2VzJyxcbiAgICAgICAgICAgICAgICBwcmljZTogNy41XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdidWZmYWxvIGNoaWNrZW4gYnVyZ2VyJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2ZyaWVkIGNoaWNrZW4gdG9zc2VkIGluIGJ1ZmZhbG8gc2F1Y2Ugd2l0aCBibHVlIGNoZWVzZSBkcmVzc2luZycsXG4gICAgICAgICAgICAgICAgcHJpY2U6IDkuNVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdkcmlua3MnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdjb2xhJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2NsYXNzaWMgZml6enkgY29sYSBzZXJ2ZWQgY2hpbGxlZCcsXG4gICAgICAgICAgICAgICAgcHJpY2U6IDIuNVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnbGVtb24gaWNlZCB0ZWEnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAncmVmcmVzaGluZyBsZW1vbi1mbGF2b3JlZCBpY2VkIHRlYScsXG4gICAgICAgICAgICAgICAgcHJpY2U6IDIuOFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnc3BhcmtsaW5nIHdhdGVyJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2NhcmJvbmF0ZWQgbWluZXJhbCB3YXRlcicsXG4gICAgICAgICAgICAgICAgcHJpY2U6IDJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3ZhbmlsbGEgbWlsa3NoYWtlJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2NyZWFteSB2YW5pbGxhIHNoYWtlIHRvcHBlZCB3aXRoIHdoaXBwZWQgY3JlYW0nLFxuICAgICAgICAgICAgICAgIHByaWNlOiA0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdtYW5nbyBzbW9vdGhpZScsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdibGVuZGVkIG1hbmdvIGFuZCB5b2d1cnQgc21vb3RoaWUnLFxuICAgICAgICAgICAgICAgIHByaWNlOiA0LjVcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnZGVzc2VydHMnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdjaG9jb2xhdGUgYnJvd25pZScsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdyaWNoIGNob2NvbGF0ZSBicm93bmllIHdpdGggYSBnb29leSBjZW50ZXInLFxuICAgICAgICAgICAgICAgIHByaWNlOiAzLjVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2FwcGxlIHBpZScsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICd3YXJtIGFwcGxlIHBpZSB3aXRoIGNpbm5hbW9uIGFuZCBmbGFreSBjcnVzdCcsXG4gICAgICAgICAgICAgICAgcHJpY2U6IDNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2ljZSBjcmVhbSBzdW5kYWUnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAndmFuaWxsYSBpY2UgY3JlYW0gd2l0aCBjaG9jb2xhdGUgc3lydXAgYW5kIG51dHMnLFxuICAgICAgICAgICAgICAgIHByaWNlOiA0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVlc2VjYWtlIHNsaWNlJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2NsYXNzaWMgTmV3IFlvcmstc3R5bGUgY2hlZXNlY2FrZScsXG4gICAgICAgICAgICAgICAgcHJpY2U6IDQuNVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnY29va2llIGR1bycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICd0d28gZnJlc2hseSBiYWtlZCBjaG9jb2xhdGUgY2hpcCBjb29raWVzJyxcbiAgICAgICAgICAgICAgICBwcmljZTogMi41XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG5dXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgaDEudGV4dENvbnRlbnQgPSAnRGlzY292ZXIgb3VyIG1lbnUnXG5cbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIG1lbnUuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgaDIudGV4dENvbnRlbnQgPSBjYXRlZ29yeS5uYW1lO1xuXG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgICAgICBjYXRlZ29yeS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgICAgIGgzLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2UgKyAnJCc7XG5cbiAgICAgICAgICAgIFtoMywgcCwgcHJpY2VdLmZvckVhY2goZWxlbWVudCA9PiBcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG5cbiAgICAgICAgfSlcblxuICAgICAgICBtZW51RGl2LmFwcGVuZENoaWxkKGgyKVxuICAgICAgICBtZW51RGl2LmFwcGVuZENoaWxkKHVsKTtcblxuICAgIH0pXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGgxKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVEaXYpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/menu.js\n\n}");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHome)\n/* harmony export */ });\n/* harmony import */ var _images_burger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/burger.jpg */ \"./src/images/burger.jpg\");\n\n\nfunction createHome(){\n    const content = document.querySelector('#content');\n\n    const h1 = document.createElement('h1');\n    h1.textContent = \"Welcome to Burger Restaurant\";\n\n    const img = document.createElement(\"img\");\n    img.src = _images_burger_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    img.alt = \"burger\";\n    img.width = 300;\n\n    const p = document.createElement('p')\n    p.textContent = \"Our restaurant suggests the most delicious burgers of the town, come here, take a seat and just enjoy our tasty burgers.\";\n\n    [h1, img, p].forEach(element => content.appendChild(element));\n}\n\ncreateHome()\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZS1sb2FkLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRDOztBQUU3QjtBQUNmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLCtDQUFTO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzP2JlY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1cmdlckltZyBmcm9tIFwiLi9pbWFnZXMvYnVyZ2VyLmpwZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIb21lKCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gQnVyZ2VyIFJlc3RhdXJhbnRcIjtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nLnNyYyA9IGJ1cmdlckltZztcbiAgICBpbWcuYWx0ID0gXCJidXJnZXJcIjtcbiAgICBpbWcud2lkdGggPSAzMDA7XG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcC50ZXh0Q29udGVudCA9IFwiT3VyIHJlc3RhdXJhbnQgc3VnZ2VzdHMgdGhlIG1vc3QgZGVsaWNpb3VzIGJ1cmdlcnMgb2YgdGhlIHRvd24sIGNvbWUgaGVyZSwgdGFrZSBhIHNlYXQgYW5kIGp1c3QgZW5qb3kgb3VyIHRhc3R5IGJ1cmdlcnMuXCI7XG5cbiAgICBbaDEsIGltZywgcF0uZm9yRWFjaChlbGVtZW50ID0+IGNvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xufVxuXG5jcmVhdGVIb21lKClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/page-load.js\n\n}");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;