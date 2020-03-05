(this["webpackJsonphackornaut-frontend"] = this["webpackJsonphackornaut-frontend"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* .App {\n  text-align: center;\n} */\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./images/dope-space.jpg */ "./src/images/dope-space.jpg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "body {\n  padding-top: 80px;\n  padding-bottom: 20px;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: white;\n}\n\nhtml { \n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\n  background-size: cover;\n  color: white; \n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\nhr{ \n  height: 1px;\n  color: grey;\n  background-color: grey;\n  border: none;\n}\n\n/* h2{\n  font: ; \n} */\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/Login */ "./src/containers/Login.js");
/* harmony import */ var _containers_SearchContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/SearchContainer */ "./src/containers/SearchContainer.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/NavBar */ "./src/components/NavBar.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Privacy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Privacy */ "./src/components/Privacy.js");
/* harmony import */ var _containers_IndexContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/IndexContainer */ "./src/containers/IndexContainer.js");
var _jsxFileName = "/Users/alicia/Documents/Flatiron/Hackornaut/hackornaut-frontend/src/App.js";








const DB_URL = "http://localhost:3000/";

class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      loggedIn: false,
      currUser: {
        id: "",
        name: ""
      }
    };

    this.logUserIn = username => {
      fetch(DB_URL + "users/login", {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          "name": username
        })
      }).then(res => res.json()).then(data => {
        this.setState({
          loggedIn: true,
          currUser: {
            id: data.id,
            name: data.name
          }
        });
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      loggedIn: this.state.loggedIn,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
      path: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Privacy__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
      path: "/index",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_IndexContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
      path: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, this.state.loggedIn ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SearchContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      currUser: this.state.currUser,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Login__WEBPACK_IMPORTED_MODULE_1__["default"], {
      logUserIn: this.logUserIn,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/BreachCard.js":
/*!**************************************!*\
  !*** ./src/components/BreachCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
var _jsxFileName = "/Users/alicia/Documents/Flatiron/Hackornaut/hackornaut-frontend/src/components/BreachCard.js";






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden' // padding: theme.spacing(0, 3),

  },
  paper: {
    maxWidth: 800,
    overflow: 'hidden',
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(4),
    backgroundColor: '#000000',
    color: '#FFFFFF',
    opacity: 0.7
  },
  image: {
    width: 150,
    height: 150
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  }
}));

const BreachCard = props => {
  const {
    result
  } = props;
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    wrap: "nowrap",
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: classes.img,
    alt: "complex",
    src: result.logo_path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "DOMAIN: "), result.domain), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "BREACH DATE: "), result.breach_date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "BREACH COUNT: "), result.pwn_count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "DETAILS: "), result.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "DATA CLASSES: "), result.data_classes.replace(/[\[\]"]+/g, '')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "IS SPAM LIST: "), result.is_spam_list ? "True" : "False"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (BreachCard);

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typeface-roboto */ "./node_modules/typeface-roboto/index.css");
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeface_roboto__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/alicia/Documents/Flatiron/Hackornaut/hackornaut-frontend/src/components/NavBar.js";





 // import MenuIcon from '@material-ui/core/Menu'

 // import {NavLink} from 'react-router-dom'
// import { makeStyles } from '@material-ui/core/styles';
// const active = {
//   'font-weight': 'bold'
// }
// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   textDecoration: 'none',
//   color: 'white'
// }

const NavBar = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    position: "fixed",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Hackornaut"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["Button"], {
    color: "inherit",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"],
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, props.loggedIn ? "Home" : "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["Button"], {
    color: "inherit",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"],
    to: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Privacy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_5__["Button"], {
    color: "inherit",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"],
    to: "/index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Index"))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/components/Privacy.js":
/*!***********************************!*\
  !*** ./src/components/Privacy.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _images_GitHub_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/GitHub.png */ "./src/images/GitHub.png");
/* harmony import */ var _images_GitHub_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_GitHub_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! typeface-roboto */ "./node_modules/typeface-roboto/index.css");
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(typeface_roboto__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/alicia/Documents/Flatiron/Hackornaut/hackornaut-frontend/src/components/Privacy.js";









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden'
  },
  paper: {
    maxWidth: 800,
    overflow: 'hidden',
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(4),
    backgroundColor: '#000000',
    color: '#FFFFFF',
    opacity: 0.7
  },
  image: {
    width: 75,
    height: 75
  },
  img: {
    margin: 'auto',
    display: 'inline-block',
    maxWidth: '100%',
    maxHeight: '100%'
  }
}));

const Privacy = () => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    wrap: "nowrap",
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h4",
    "line-height": "1.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Mission Statement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Here at Hackornaut, our mission is to help inform and secure our user's privacy.  This website is designed with that goal in mind."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "Key Features"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Users can view an index of all breached sites.  Users can search their email to view all breaches associated with that particular email account.  Users can create an account to save their searches."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "5 Ways to Keep Your Emails Secure"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "1. Use two-factor authentication"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    letterSpacing: 1.5,
    m: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "The basic principle of two-factor authentication is simple: combine something you know with something you have. One example is a debit card, which requires you to have both your physical card and your PIN to verify your identity. By enabling two-factor authentication (or two-step verification), you aren\u2019t putting all of your faith in a password.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "2. Limit Forwarding"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    letterSpacing: 1.5,
    m: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "When we\u2019re sent a message we want to share, we often click \u201CForward\u201D without thinking about the consequences. Where is the message going? Who will see it? Where will it be stored? If your email is hosted on a corporate server, it is likely there are certain security measures in place to protect any sensitive information contained in your private email. When someone forwards an internal email to a recipient outside of your company, however, you are exposing that data to potentially unsecured, unencrypted servers.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "3. Set expiration dates on your messages"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    letterSpacing: 1.5,
    m: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "Inboxes are rarely cleaned up, that means that any sensitive information you send to a client could very well be sitting there months later. At that point, you no longer control the fate of your data. Set an expiration date on your email, so that after a certain date, it will no longer be readable by the recipient (or anyone else, for that matter).")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "4. Understand your service provider\u2019s TOS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    letterSpacing: 1.5,
    m: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "Your email provider\u2019s terms of service will tell you what kind of security they are offering you. Are they encrypting messages on their server? Do they have protections against brute-force attacks? Is there any guarantee that your data is being protected?  You\u2019ll likely realize that keeping your private email secure is entirely up to you.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, "5. Encrypt your email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    letterSpacing: 1.5,
    m: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, "The best way to keep your private email away from prying eyes and hackers is to use encryption. Encryption protects your private email by jumbling up your messages, making them impossible to decipher unless you explicitly authorize someone to read them.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, "Creators"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    wrap: "nowrap",
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: classes.img,
    alt: "complex",
    src: _images_GitHub_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, "Alicia Chao: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/chaochaocodes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, "@chaochaocodes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, "Allen Zhang: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/azhang9328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, "@azhang9328")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, "Eric Stukenberg: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/EricStukenberg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, "@EricStukenberg")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Privacy);

/***/ }),

/***/ "./src/components/ProfileCard.js":
/*!***************************************!*\
  !*** ./src/components/ProfileCard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
var _jsxFileName = "/Users/alicia/Documents/Flatiron/Hackornaut/hackornaut-frontend/src/components/ProfileCard.js";












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    width: 250,
    minHeight: 310,
    opacity: 0.7 // margin: `${theme.spacing(1)}px auto`,
    // backgroundColor: '#000000',
    // color: '#FFFFFF',

  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9

  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}));

const ProfileCard = props => {
  const {
    result
  } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.media,
    image: result.logo_path,
    title: "Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: result.domain,
    subheader: result.breach_date,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disableSpacing: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.expand, {
      [classes.expandOpen]: expanded
    }),
    onClick: handleExpandClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "Info"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8__["default"], {
    in: expanded,
    timeout: "auto",
    unmountOnExit: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    paragraph: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "Method:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    paragraph: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileCard);

/***/ }),

/***/ "./src/components/ProfileList.js":
/*!***************************************!*\
  !*** ./src/components/ProfileList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProfileCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileCard */ "./src/components/ProfileCard.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
var _jsxFileName = "/Users/alicia/Documents/Flatiron/Hackornaut/hackornaut-frontend/src/components/ProfileList.js";




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const ProfileList = props => {
  const classes = useStyles();

  function renderResults() {
    return props.breaches.map(result => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: result.id,
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProfileCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: result.id,
        result: result,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    className: classes.root,
    spacing: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    justify: "center",
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, renderResults())));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileList);

/***/ }),

/***/ "./src/components/SearchBar.js":
/*!*************************************!*\
  !*** ./src/components/SearchBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
var _jsxFileName = "/Users/alicia/Documents/Flatiron/Hackornaut/hackornaut-frontend/src/components/SearchBar.js";





class SearchBar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
      container: true,
      direction: "row",
      justify: "center",
      alignItems: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        this.props.search(e.target.search.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
      floatingLabelStyle: {
        color: '#000000'
      },
      name: "search",
      id: "filled-secondary",
      label: "Search for E-mail",
      margin: "normal",
      variant: "filled",
      color: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./src/components/SearchList.js":
/*!**************************************!*\
  !*** ./src/components/SearchList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BreachCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreachCard */ "./src/components/BreachCard.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/alicia/Documents/Flatiron/Hackornaut/hackornaut-frontend/src/components/SearchList.js";



const baseTheme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])();

class SearchList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.renderResults = () => {
      return this.props.breaches.map(result => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
        theme: baseTheme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BreachCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: result.id,
        result: result,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      })));
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, this.renderResults()));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SearchList);

/***/ }),

/***/ "./src/containers/IndexContainer.js":
/*!******************************************!*\
  !*** ./src/containers/IndexContainer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _components_ProfileList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProfileList */ "./src/components/ProfileList.js");
var _jsxFileName = "/Users/alicia/Documents/Flatiron/Hackornaut/hackornaut-frontend/src/containers/IndexContainer.js";




const DB_URL = "http://localhost:3000/";
const options = [10, 20, 40, 50];

class IndexContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      all_breaches: [],
      select_amount: 10,
      start_index: 0
    };

    this.showMoreBreaches = () => {
      let add = parseInt(this.state.select_amount);
      let start = parseInt(this.state.start_index);
      const new_start = add + start;
      this.setState({
        start_index: new_start
      });
      console.log(this.state);
    };

    this.showLessBreaches = () => {
      let minus = parseInt(this.state.select_amount);
      let start = parseInt(this.state.start_index);
      const new_start = start - minus;

      if (new_start >= 0) {
        this.setState({
          start_index: new_start
        });
      }

      console.log(this.state);
    };

    this.getSelectBreaches = () => {
      return this.state.all_breaches.slice(this.state.start_index, this.state.start_index + this.state.select_amount);
    };

    this.handleChange = e => {
      console.log("Selected num", e.target.value);
      this.setState({
        select_amount: parseInt(e.target.value)
      });
    };
  }

  componentDidMount() {
    fetch(DB_URL + "/breaches/thirty").then(response => {
      return response.json();
    }).then(myJson => {
      this.setState({
        all_breaches: myJson
      });
    }).catch(error => {
      console.error(error);
    });
    fetch(DB_URL + "/breaches").then(response => {
      return response.json();
    }).then(myJson => {
      this.setState({
        all_breaches: myJson
      });
    }).catch(error => {
      console.error(error);
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__["default"], {
      container: true,
      direction: "column",
      justify: "center",
      alignItems: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      value: null,
      className: "form-control",
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: options[0],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, options[0]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: options[1],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, options[1]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: options[2],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, options[2]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: options[3],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, options[3])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProfileList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      breaches: this.getSelectBreaches(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__["default"], {
      container: true,
      direction: "row",
      justify: "center",
      alignItems: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "contained",
      color: "primary",
      onClick: () => this.showLessBreaches(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, " \u2190 "), this.state.start_index, " - ", parseInt(this.state.start_index + this.state.select_amount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "contained",
      color: "primary",
      onClick: () => this.showMoreBreaches(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, " \u2192 ")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (IndexContainer);

/***/ }),

/***/ "./src/containers/Login.js":
/*!*********************************!*\
  !*** ./src/containers/Login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
var _jsxFileName = "/Users/alicia/Documents/Flatiron/Hackornaut/hackornaut-frontend/src/containers/Login.js";




 // import "./Login.css";

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden' // padding: theme.spacing(0, 3),

  },
  paper: {
    maxWidth: 800,
    overflow: 'hidden',
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(4),
    backgroundColor: '#000000',
    color: '#FFFFFF',
    opacity: 0.7
  }
}));

class Login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      username: ""
    };

    this.handleChange = e => {
      this.setState({
        username: e.target.value
      });
    };

    this.handleSubmit = e => {
      e.preventDefault();
      this.props.logUserIn(this.state.username);
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
      container: true,
      justify: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "LOGIN")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      placeholder: "Enter Username",
      name: "uname",
      onChange: e => this.handleChange(e),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Login"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Login); // <div className={classes.root}>
//     <Paper className={classes.paper}>
//       <Grid container wrap="nowrap" spacing={2}>
//         <Grid item xs>
//           <Typography><strong>LOGIN: </strong>{result.domain}</Typography> 
//           <Typography><strong>USERNAME: </strong>{result.breach_date}</Typography>
//           <Typography><strong>LOGIN BUTTON: </strong>{result.pwn_count}</Typography>
//         </Grid>
//       </Grid>
//     </Paper>
// </div>

/***/ }),

/***/ "./src/containers/SearchContainer.js":
/*!*******************************************!*\
  !*** ./src/containers/SearchContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SearchBar */ "./src/components/SearchBar.js");
/* harmony import */ var _components_SearchList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SearchList */ "./src/components/SearchList.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
var _jsxFileName = "/Users/alicia/Documents/Flatiron/Hackornaut/hackornaut-frontend/src/containers/SearchContainer.js";





const DB_URL = "http://localhost:3000/";

class SearchContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      results: null
    };

    this.search = email => {
      fetch(DB_URL + "emails/search", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          "search": email
        })
      }).then(res => res.json()).then(data => {
        this.setState({
          results: data
        });
      });
    };

    this.saveSearchResult = () => {
      fetch(DB_URL + `users/${this.props.currUser.id}/save_search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(this.state.results)
      });
    };

    this.showResults = () => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        container: true,
        direction: "column",
        justify: "center",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: e => {
          e.preventDefault();
          this.saveSearchResult();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "contained",
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Save Email + Breach Results ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchList__WEBPACK_IMPORTED_MODULE_2__["default"], {
        saveSearchResult: this.saveSearchResult,
        breaches: this.state.results.breaches,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })));
    };
  }

  render() {
    console.log(this.state.results);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      search: this.search,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), this.state.results === null ? null : this.showResults());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SearchContainer);

/***/ }),

/***/ "./src/images/GitHub.png":
/*!*******************************!*\
  !*** ./src/images/GitHub.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/dope-space.jpg":
/*!***********************************!*\
  !*** ./src/images/dope-space.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/dope-space.acf389c6.jpg";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typeface-roboto */ "./node_modules/typeface-roboto/index.css");
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(typeface_roboto__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/alicia/Documents/Flatiron/Hackornaut/hackornaut-frontend/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/alicia/Documents/Flatiron/Hackornaut/hackornaut-frontend/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/alicia/Documents/Flatiron/Hackornaut/hackornaut-frontend/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/alicia/Documents/Flatiron/Hackornaut/hackornaut-frontend/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map