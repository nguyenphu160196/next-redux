module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router */ "./router.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth */ "./services/auth.js");
var _jsxFileName = "/home/thienphu/Desktop/next-redux/pages/home.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var isBrowser = typeof window !== 'undefined';
var auth;

var HomeView =
/*#__PURE__*/
function (_Component) {
  _inherits(HomeView, _Component);

  function HomeView(props) {
    var _this;

    _classCallCheck(this, HomeView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HomeView).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    return _this;
  }

  _createClass(HomeView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      auth = new _services_auth__WEBPACK_IMPORTED_MODULE_3__["default"]();
    }
  }, {
    key: "loginGuess",
    value: function loginGuess(e) {
      var _this2 = this;

      e.preventDefault();
      var submit = e.target;
      submit.disabled = true;
      var data = {
        email: 'guest',
        password: 'guest'
      };
      data.deviceAPNSToken = 'deviceAPNSToken';
      data.deviceFcmToken = 'deviceFcmToken';
      auth.login(data).then(function (res) {
        console.log(res);

        if (res.success) {
          _this2.setState({
            error: ""
          });

          _router__WEBPACK_IMPORTED_MODULE_2__["Router"].pushRoute('/job');
        }
      }).catch(function (err) {
        _this2.setState({
          error: 'An Error Occurred!'
        });

        submit.disabled = false;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var error = this.state.error;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex-center",
        style: {
          marginBottom: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app-logo original text inline-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex-center",
        style: {
          marginBottom: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          fontSize: 18,
          color: 'rgba(0,0,0,0.6)',
          textAlign: 'center',
          width: '80%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "THE LEADING INDUSTRIAL PARK & TOWNSHIP DEVELOPER IN VIETNAM")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: function onClick(e) {
          return _router__WEBPACK_IMPORTED_MODULE_2__["Router"].pushRoute('/login');
        },
        bsStyle: "primary",
        bsSize: "large",
        block: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "LOGIN"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: function onClick(e) {
          return _this3.loginGuess(e);
        },
        bsSize: "large",
        block: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "GUEST"), error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          color: 'red'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, error))));
    }
  }]);

  return HomeView;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HomeView);

/***/ }),

/***/ "./router.js":
/*!*******************!*\
  !*** ./router.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var routes = module.exports = __webpack_require__(/*! next-routes */ "next-routes")();
/*API
routes.add(name, pattern = /name, page = name)
routes.add(pattern, page)
routes.add(object)
*/


routes.add('home', '/home', 'home').add('login', '/login', 'login');

/***/ }),

/***/ "./services/api.js":
/*!*************************!*\
  !*** ./services/api.js ***!
  \*************************/
/*! exports provided: API, signin, signup, filterUser, filterRole, searchEvent, getEvent, getStatusEvent, createEvent, updateEvent, attendEvent, noAttendEvent, addReferenceEvent, removeReferenceEvent, changeStatusEvent, eventSendMailAndExport, filerDepartment, getDepartment, getUserByDepartment, createDepartment, updateDepartment, getDepartmentWithUser, deleteDepartment, getGroup, createGroup, updateGroup, deleteGroupTenant, filterJob, getJob, createJob, deleteJob, newApplyJob, submitUpdateJob, approveJob, searchNotify, getNotifyDetail, getFile, createTenant, getAllTenants, getTenantDetail, updateTenant, createCategory, searchCategory, updateCategory, listCategoryByTab, listTenantByCategory, deleteCategory, getAllCategory, getAllLocation, createLocation, updateLocation, deleteLocation, uploadFile, createNotification, updateBookmark, updateStatus, searchUser, getUserGroup, getListUserAndTenants, updateNotify, searchIR, getIR, createIR, updateIR, updateStatusIR, getDepartmentByTenant, getDepartmentByUser, updateUser, updateUserById, getPromotion, getPromoDetail, createPromo, searchPromo, approvePromo, deletePromo, updatePromo, createBanner, getBannerById, searchBanner, updateBanner, deleteBanner, addElementBanner, deleteElementBanner, createDesignation, updateDesignation, searchDesignation, designationDetail, createDeptgroup, updateDeptgroup, searchDeptgroup, deptgroupDetail, deleteDeptGroup, getInspecting, createInspecting, updateInspecting, deleteInspecting, forgetPassword, resetPassword, resendEmail, activeAccount, phoneBookVsip, phoneBookTenant, searchTenant, createMasterBanner, updateMasterBanner, searchMasterBanner, deleteMasterBanner, resendEmailByTab, indexBanner, getListTenantAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterUser", function() { return filterUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterRole", function() { return filterRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchEvent", function() { return searchEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEvent", function() { return getEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatusEvent", function() { return getStatusEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEvent", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEvent", function() { return updateEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attendEvent", function() { return attendEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noAttendEvent", function() { return noAttendEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addReferenceEvent", function() { return addReferenceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeReferenceEvent", function() { return removeReferenceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeStatusEvent", function() { return changeStatusEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventSendMailAndExport", function() { return eventSendMailAndExport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filerDepartment", function() { return filerDepartment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDepartment", function() { return getDepartment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserByDepartment", function() { return getUserByDepartment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDepartment", function() { return createDepartment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDepartment", function() { return updateDepartment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDepartmentWithUser", function() { return getDepartmentWithUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDepartment", function() { return deleteDepartment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGroup", function() { return getGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGroup", function() { return createGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGroup", function() { return updateGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteGroupTenant", function() { return deleteGroupTenant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterJob", function() { return filterJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJob", function() { return getJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createJob", function() { return createJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteJob", function() { return deleteJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newApplyJob", function() { return newApplyJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitUpdateJob", function() { return submitUpdateJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approveJob", function() { return approveJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchNotify", function() { return searchNotify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotifyDetail", function() { return getNotifyDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFile", function() { return getFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTenant", function() { return createTenant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTenants", function() { return getAllTenants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTenantDetail", function() { return getTenantDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTenant", function() { return updateTenant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCategory", function() { return createCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchCategory", function() { return searchCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCategory", function() { return updateCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listCategoryByTab", function() { return listCategoryByTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listTenantByCategory", function() { return listTenantByCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCategory", function() { return deleteCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCategory", function() { return getAllCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllLocation", function() { return getAllLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocation", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLocation", function() { return updateLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteLocation", function() { return deleteLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return uploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNotification", function() { return createNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBookmark", function() { return updateBookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStatus", function() { return updateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchUser", function() { return searchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserGroup", function() { return getUserGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListUserAndTenants", function() { return getListUserAndTenants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateNotify", function() { return updateNotify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchIR", function() { return searchIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIR", function() { return getIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIR", function() { return createIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateIR", function() { return updateIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStatusIR", function() { return updateStatusIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDepartmentByTenant", function() { return getDepartmentByTenant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDepartmentByUser", function() { return getDepartmentByUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserById", function() { return updateUserById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPromotion", function() { return getPromotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPromoDetail", function() { return getPromoDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPromo", function() { return createPromo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPromo", function() { return searchPromo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approvePromo", function() { return approvePromo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePromo", function() { return deletePromo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePromo", function() { return updatePromo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBanner", function() { return createBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBannerById", function() { return getBannerById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchBanner", function() { return searchBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBanner", function() { return updateBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBanner", function() { return deleteBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addElementBanner", function() { return addElementBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteElementBanner", function() { return deleteElementBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDesignation", function() { return createDesignation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDesignation", function() { return updateDesignation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchDesignation", function() { return searchDesignation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "designationDetail", function() { return designationDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDeptgroup", function() { return createDeptgroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDeptgroup", function() { return updateDeptgroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchDeptgroup", function() { return searchDeptgroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deptgroupDetail", function() { return deptgroupDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDeptGroup", function() { return deleteDeptGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInspecting", function() { return getInspecting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInspecting", function() { return createInspecting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInspecting", function() { return updateInspecting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteInspecting", function() { return deleteInspecting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgetPassword", function() { return forgetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPassword", function() { return resetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resendEmail", function() { return resendEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeAccount", function() { return activeAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneBookVsip", function() { return phoneBookVsip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneBookTenant", function() { return phoneBookTenant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchTenant", function() { return searchTenant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMasterBanner", function() { return createMasterBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMasterBanner", function() { return updateMasterBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchMasterBanner", function() { return searchMasterBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMasterBanner", function() { return deleteMasterBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resendEmailByTab", function() { return resendEmailByTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexBanner", function() { return indexBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListTenantAccount", function() { return getListTenantAccount; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth */ "./services/auth.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./store.js");



var server_address = 'https://vsip.gitosolutions.com/api';

var genHeader = function genHeader() {
  var auth = new _services_auth__WEBPACK_IMPORTED_MODULE_1__["default"]();

  if (auth.checkAuth()) {
    var token = auth.getToken();
    return {
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(token)
    };
  } else {
    return {
      'Content-Type': 'application/json'
    };
  }
};

var checkTime = {};
var API = function API(_ref) {
  var _ref$method = _ref.method,
      method = _ref$method === void 0 ? 'GET' : _ref$method,
      _ref$route = _ref.route,
      route = _ref$route === void 0 ? '' : _ref$route,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      _ref$params = _ref.params,
      params = _ref$params === void 0 ? {} : _ref$params,
      _ref$responseType = _ref.responseType,
      responseType = _ref$responseType === void 0 ? '' : _ref$responseType,
      cache = _ref.cache;
  var time = new Date().getTime();

  if (!Object.keys(checkTime).length) {
    turnOnProgress();
  }

  checkTime = {};
  checkTime[time] = turnOffProgress;
  return new Promise(function (resolve, reject) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default()({
      baseURL: server_address,
      url: route + (cache ? "" : '?stuff=' + new Date().getTime()),
      method: method,
      params: params,
      data: data,
      headers: genHeader(),
      responseType: responseType
    }).then(function (res) {
      resolve(res.data);

      if (!!checkTime[time]) {
        checkTime[time]();
        delete checkTime[time];
      }
    }).catch(function (err) {
      reject(err);

      if (!!checkTime[time]) {
        checkTime[time]();
        delete checkTime[time];
      }
    });
  });
};
var signin = function signin(data) {
  return API({
    method: 'POST',
    route: '/signin',
    data: data
  });
};
var signup = function signup(data) {
  return API({
    method: 'POST',
    route: '/signup',
    data: data
  });
};
var filterUser = function filterUser(data) {
  return API({
    method: 'POST',
    route: '/search/user',
    data: data
  });
};
var filterRole = function filterRole(data) {
  return API({
    method: 'POST',
    route: '/search/role',
    data: data
  });
};
var searchEvent = function searchEvent(data) {
  return API({
    method: 'POST',
    route: '/search/event',
    data: data
  });
};
var getEvent = function getEvent(id) {
  return API({
    method: 'GET',
    route: "/event/".concat(id)
  });
};
var getStatusEvent = function getStatusEvent(id) {
  return API({
    method: 'GET',
    route: "/event/".concat(id, "/status")
  });
};
var createEvent = function createEvent(data) {
  return API({
    method: 'POST',
    route: "/event",
    data: data
  });
};
var updateEvent = function updateEvent(id, data) {
  return API({
    method: 'PUT',
    route: "/event/".concat(id),
    data: data
  });
};
var attendEvent = function attendEvent(id) {
  return API({
    method: 'POST',
    route: "/event/".concat(id, "/attended")
  });
};
var noAttendEvent = function noAttendEvent(id) {
  return API({
    method: 'POST',
    route: "/event/".concat(id, "/notattended")
  });
};
var addReferenceEvent = function addReferenceEvent(eventId, data) {
  return API({
    method: 'POST',
    route: "/event/".concat(eventId, "/add-reference/"),
    data: data
  });
};
var removeReferenceEvent = function removeReferenceEvent(eventId, referenceId) {
  return API({
    method: 'DELETE',
    route: "/event/".concat(eventId, "/remove-reference/").concat(referenceId)
  });
};
var changeStatusEvent = function changeStatusEvent(id, data) {
  return API({
    method: 'PUT',
    route: "/event/".concat(id, "/changestatus"),
    data: data
  });
};
var eventSendMailAndExport = function eventSendMailAndExport(id, data) {
  return API({
    method: 'POST',
    route: "/event/".concat(id, "/sendmail"),
    data: data
  });
};
var filerDepartment = function filerDepartment(data) {
  return API({
    method: 'POST',
    route: "/search/department",
    data: data
  });
};
var getDepartment = function getDepartment(_) {
  return API({
    route: '/department'
  });
};
var getUserByDepartment = function getUserByDepartment(_) {
  return API({
    method: 'POST',
    route: "/department/user"
  });
};
var createDepartment = function createDepartment(data) {
  return API({
    method: "POST",
    route: "/department",
    data: data
  });
};
var updateDepartment = function updateDepartment(id, data) {
  return API({
    method: "PUT",
    route: "/department/".concat(id),
    data: data
  });
};
var getDepartmentWithUser = function getDepartmentWithUser(data) {
  return API({
    method: "POST",
    route: "/department/user",
    data: data
  });
};
var deleteDepartment = function deleteDepartment(id) {
  return API({
    method: "DELETE",
    route: "/department/".concat(id)
  });
};
var getGroup = function getGroup(_) {
  return API({
    route: '/group'
  });
};
var createGroup = function createGroup(data) {
  return API({
    method: 'POST',
    route: '/group',
    data: data
  });
};
var updateGroup = function updateGroup(id, data) {
  return API({
    method: "PUT",
    route: "/group/".concat(id),
    data: data
  });
};
var deleteGroupTenant = function deleteGroupTenant(id) {
  return API({
    method: "DELETE",
    route: "/group/".concat(id)
  });
};
var filterJob = function filterJob(data) {
  return API({
    method: 'POST',
    route: '/search/jobCorner',
    data: data
  });
};
var getJob = function getJob(id) {
  return API({
    method: 'GET',
    route: "/jobCorner/".concat(id)
  });
};
var createJob = function createJob(data) {
  return API({
    method: 'POST',
    route: "/jobCorner",
    data: data
  });
};
var deleteJob = function deleteJob(id) {
  return API({
    method: 'DELETE',
    route: "/jobCorner/".concat(id)
  });
};
var newApplyJob = function newApplyJob(id, data) {
  return API({
    method: 'POST',
    route: "/jobCorner/".concat(id, "/applylist"),
    data: data
  });
};
var submitUpdateJob = function submitUpdateJob(id, data) {
  return API({
    method: 'PUT',
    route: "/jobCorner/".concat(id),
    data: data
  });
};
var approveJob = function approveJob(id, data) {
  return API({
    method: "POST",
    route: "jobCorner/approve/".concat(id),
    data: data
  });
};
var searchNotify = function searchNotify(data) {
  return API({
    method: 'POST',
    route: '/search/notification',
    data: data
  });
};
var getNotifyDetail = function getNotifyDetail(data) {
  return API({
    route: "/notification/".concat(data)
  });
};
var getFile = function getFile(path) {
  return API({
    route: "/".concat(path),
    responseType: 'blob',
    cache: true
  });
};
var createTenant = function createTenant(data) {
  return API({
    method: 'POST',
    route: '/tenants',
    data: data
  });
};
var getAllTenants = function getAllTenants(_) {
  return API({
    route: '/tenants'
  });
};
var getTenantDetail = function getTenantDetail(id) {
  return API({
    route: "/tenants/".concat(id)
  });
};
var updateTenant = function updateTenant(id, data) {
  return API({
    method: 'PUT',
    route: "/tenants/".concat(id),
    data: data
  });
};
var createCategory = function createCategory(data) {
  return API({
    method: 'POST',
    route: '/category',
    data: data
  });
};
var searchCategory = function searchCategory(data) {
  return API({
    method: 'POST',
    route: '/search/category',
    data: data
  });
};
var updateCategory = function updateCategory(id, data) {
  return API({
    method: 'PUT',
    route: "/category/".concat(id),
    data: data
  });
};
var listCategoryByTab = function listCategoryByTab(data) {
  return API({
    method: 'POST',
    route: "/tenants/listCategoryByTab/".concat(data)
  });
};
var listTenantByCategory = function listTenantByCategory(data) {
  return API({
    method: 'POST',
    route: "/tenants/listTenantByCategory/".concat(data)
  });
};
var deleteCategory = function deleteCategory(id) {
  return API({
    method: 'DELETE',
    route: "/category/".concat(id)
  });
};
var getAllCategory = function getAllCategory(_) {
  return API({
    method: 'POST',
    route: "/search/category"
  });
};
var getAllLocation = function getAllLocation(_) {
  return API({
    method: 'POST',
    route: "/search/location"
  });
};
var createLocation = function createLocation(data) {
  return API({
    method: 'POST',
    route: '/location',
    data: data
  });
};
var updateLocation = function updateLocation(id, data) {
  return API({
    method: 'PUT',
    route: "/location/".concat(id),
    data: data
  });
};
var deleteLocation = function deleteLocation(id) {
  return API({
    method: 'DELETE',
    route: "/location/".concat(id)
  });
};
var uploadFile = function uploadFile(data) {
  return API({
    method: 'POST',
    route: '/upload/file',
    data: data
  });
};
var createNotification = function createNotification(data) {
  return API({
    method: 'POST',
    route: '/notification',
    data: data
  });
};
var updateBookmark = function updateBookmark(id, data) {
  return API({
    method: 'PUT',
    route: "/notification/".concat(id, "/bookmark"),
    data: data
  });
};
var updateStatus = function updateStatus(id, data) {
  return API({
    method: 'PUT',
    route: "/notification/".concat(id, "/changestatus"),
    data: data
  });
};
var searchUser = function searchUser(data) {
  return API({
    method: "POST",
    route: '/search/user',
    data: data
  });
};
var getUserGroup = function getUserGroup() {
  return API({
    method: 'GET',
    route: '/user/group'
  });
};
var getListUserAndTenants = function getListUserAndTenants() {
  return API({
    method: 'GET',
    route: '/tenants/list/user'
  });
};
var updateNotify = function updateNotify(id, data) {
  return API({
    method: 'PUT',
    route: "/notification/".concat(id),
    data: data
  });
};
/** IR **/

var searchIR = function searchIR(data) {
  return API({
    method: 'POST',
    route: '/search/ir',
    data: data
  });
};
var getIR = function getIR(id) {
  return API({
    method: 'GET',
    route: "/ir/".concat(id)
  });
};
var createIR = function createIR(data) {
  return API({
    method: 'POST',
    route: "/ir",
    data: data
  });
};
var updateIR = function updateIR(id, data) {
  return API({
    method: 'PUT',
    route: "/ir/".concat(id),
    data: data
  });
};
var updateStatusIR = function updateStatusIR(id, data) {
  return API({
    method: 'PUT',
    route: "/ir/".concat(id, "/changestatus"),
    data: data
  });
};
var getDepartmentByTenant = function getDepartmentByTenant(id) {
  return API({
    method: 'GET',
    route: "/user/department/".concat(id)
  });
};
var getDepartmentByUser = function getDepartmentByUser(_) {
  return API({
    route: '/user/department'
  });
};
var updateUser = function updateUser(data) {
  return API({
    method: 'PUT',
    route: '/user',
    data: data
  });
};
var updateUserById = function updateUserById(id, data) {
  return API({
    method: 'PUT',
    route: "/user/".concat(id),
    data: data
  });
};
var getPromotion = function getPromotion(_) {
  return API({
    route: '/promotion'
  });
};
var getPromoDetail = function getPromoDetail(id) {
  return API({
    method: 'GET',
    route: "/promotion/".concat(id)
  });
};
var createPromo = function createPromo(data) {
  return API({
    method: 'POST',
    route: '/promotion',
    data: data
  });
};
var searchPromo = function searchPromo(data) {
  return API({
    method: "POST",
    route: "/search/promotion",
    data: data
  });
};
var approvePromo = function approvePromo(id, data) {
  return API({
    method: "POST",
    route: "promotion/approve/".concat(id),
    data: data
  });
};
var deletePromo = function deletePromo(id) {
  return API({
    method: "DELETE",
    route: "/promotion/".concat(id)
  });
};
var updatePromo = function updatePromo(id, data) {
  return API({
    method: "PUT",
    route: "/promotion/".concat(id),
    data: data
  });
};
var createBanner = function createBanner(data) {
  return API({
    method: 'POST',
    route: '/banner',
    data: data
  });
};
var getBannerById = function getBannerById(id) {
  return API({
    method: 'GET',
    route: "/banner/".concat(id)
  });
};
var searchBanner = function searchBanner(data) {
  return API({
    method: 'POST',
    route: '/search/banner',
    data: data
  });
};
var updateBanner = function updateBanner(id, data) {
  return API({
    method: 'PUT',
    route: "/banner/".concat(id),
    data: data
  });
};
var deleteBanner = function deleteBanner(id) {
  return API({
    method: 'DELETE',
    route: "/banner/".concat(id)
  });
};
var addElementBanner = function addElementBanner(id, data) {
  return API({
    method: 'POST',
    route: "/banner/".concat(id, "/addelement"),
    data: data
  });
};
var deleteElementBanner = function deleteElementBanner(idBanner, idElement) {
  return API({
    method: 'DELETE',
    route: "/banner/".concat(idBanner, "/deleteelement/").concat(idElement)
  });
};
var createDesignation = function createDesignation(data) {
  return API({
    method: "POST",
    route: "/designation",
    data: data
  });
};
var updateDesignation = function updateDesignation(id, data) {
  return API({
    method: "PUT",
    route: "/designation/".concat(id),
    data: data
  });
};
var searchDesignation = function searchDesignation(id, data) {
  return API({
    method: "POST",
    route: "/search/designation",
    data: data
  });
};
var designationDetail = function designationDetail(id) {
  return API({
    method: "GET",
    route: "/designation/".concat(id)
  });
};
var createDeptgroup = function createDeptgroup(data) {
  return API({
    method: "POST",
    route: "/deptgroup",
    data: data
  });
};
var updateDeptgroup = function updateDeptgroup(id, data) {
  return API({
    method: "PUT",
    route: "/deptgroup/".concat(id),
    data: data
  });
};
var searchDeptgroup = function searchDeptgroup(id, data) {
  return API({
    method: "POST",
    route: "/search/deptgroup",
    data: data
  });
};
var deptgroupDetail = function deptgroupDetail(id) {
  return API({
    method: "GET",
    route: "/deptgroup/".concat(id)
  });
};
var deleteDeptGroup = function deleteDeptGroup(id) {
  return API({
    method: 'DELETE',
    route: "deptgroup/".concat(id)
  });
};
var getInspecting = function getInspecting() {
  return API({
    route: '/inspecting'
  });
};
var createInspecting = function createInspecting(data) {
  return API({
    method: 'POST',
    route: '/inspecting',
    data: data
  });
};
var updateInspecting = function updateInspecting(id, data) {
  return API({
    method: 'PUT',
    route: "/inspecting/".concat(id),
    data: data
  });
};
var deleteInspecting = function deleteInspecting(id) {
  return API({
    method: 'DELETE',
    route: "/inspecting/".concat(id)
  });
};
var forgetPassword = function forgetPassword(data) {
  return API({
    method: 'POST',
    route: '/helpers/forgot-password',
    data: data
  });
};
var resetPassword = function resetPassword(data) {
  return API({
    method: 'POST',
    route: '/helpers/reset-password',
    data: data
  });
};
var resendEmail = function resendEmail(data) {
  return API({
    method: "POST",
    route: '/user/re-send/active',
    data: data
  });
};
var activeAccount = function activeAccount(data) {
  return API({
    method: 'POST',
    route: '/helpers/active-account',
    data: data
  });
};
var phoneBookVsip = function phoneBookVsip(data) {
  return API({
    method: "POST",
    route: '/phonebook/vsip',
    data: data
  });
};
var phoneBookTenant = function phoneBookTenant(data) {
  return API({
    method: "POST",
    route: '/phonebook/tenant',
    data: data
  });
};
var searchTenant = function searchTenant(data) {
  return API({
    method: 'POST',
    route: '/search/tenants/extra',
    data: data
  });
};
var createMasterBanner = function createMasterBanner(data) {
  return API({
    method: 'POST',
    route: '/master-banner',
    data: data
  });
};
var updateMasterBanner = function updateMasterBanner(id, data) {
  return API({
    method: 'PUT',
    route: "/master-banner/".concat(id),
    data: data
  });
};
var searchMasterBanner = function searchMasterBanner(data) {
  return API({
    method: 'POST',
    route: '/search/master-banner',
    data: data
  });
};
var deleteMasterBanner = function deleteMasterBanner(id) {
  return API({
    method: 'DELETE',
    route: "/master-banner/".concat(id)
  });
};
var resendEmailByTab = function resendEmailByTab(data) {
  return API({
    method: 'POST',
    route: '/user/re-send/active/list',
    data: data
  });
};
var indexBanner = function indexBanner(data) {
  return API({
    method: 'POST',
    route: '/master-banner/indexing',
    data: data
  });
};
var getListTenantAccount = function getListTenantAccount(data) {
  return API({
    method: 'POST',
    route: "/tenants/utils/list-tenant",
    data: data
  });
};

/***/ }),

/***/ "./services/auth.js":
/*!**************************!*\
  !*** ./services/auth.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api */ "./services/api.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Auth =
/*#__PURE__*/
function () {
  function Auth() {
    _classCallCheck(this, Auth);

    this.getInfo();
    this.role();
  }

  _createClass(Auth, [{
    key: "login",
    value: function login(data) {
      return new Promise(function (resolve, reject) {
        Object(_services_api__WEBPACK_IMPORTED_MODULE_0__["signin"])(data).then(function (res) {
          var success = res.success,
              results = res.results;

          if (success) {
            localStorage.setItem('user', JSON.stringify(results.user));
            localStorage.setItem('tenantsTab', JSON.stringify(results.tenantsTab));
            localStorage.setItem('token', results.token);
            resolve(res);
          } else {
            reject(res);
          }
        }).catch(function (err) {
          reject(err);
        });
      });
    }
  }, {
    key: "logout",
    value: function logout() {
      delete this._userInfo;
      localStorage.clear();
      return new Promise(function (resolve, reject) {
        resolve();
      });
    }
  }, {
    key: "checkAuth",
    value: function checkAuth() {
      var token = localStorage.token;

      if (token && token.length > 0) {
        return true;
      } else {
        delete this._userInfo;
        return false;
      }
    }
  }, {
    key: "role",
    value: function role() {
      this.getToken();
      var info = this.getInfo();
      var role = info.role;

      if (!!role && role.length) {
        return role[0];
      } else {
        return undefined;
      }
    }
  }, {
    key: "getInfo",
    value: function getInfo() {
      if (!!!this._userInfo) {
        var user = localStorage.user;

        if (user) {
          this._userInfo = JSON.parse(user);
        } else {
          this._userInfo = {};
        }
      }

      return this._userInfo;
    }
  }, {
    key: "getToken",
    value: function getToken() {
      var token = localStorage.token;

      if (token != this._token) {
        delete this._userInfo;
        this.getInfo();
      }

      this._token = token;
      return this._token;
    }
  }]);

  return Auth;
}();

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, updateState, turnonProgress, turnoffProgress, updateWidth, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateState", function() { return updateState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turnonProgress", function() { return turnonProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turnoffProgress", function() { return turnoffProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWidth", function() { return updateWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var NODE_ENV = "development" || "development";
var InitialState = {
  progressValue: 0,
  progressStatus: '',
  progressWidth: 1
};
var actionTypes = {
  UPDATE_STATE: 'UPDATE_STATE',
  ON_PROGRESS_BAR: 'ON_PROGRESS_BAR',
  OFF_PROGRESS_BAR: 'OFF_PROGRESS_BAR',
  UPDATE_WIDTH: 'UPDATE_WIDTH' // REDUCERS

};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.UPDATE_STATE:
      return Object.assign({}, state, {
        message: action.payload
      });

    case actionTypes.ON_PROGRESS_BAR:
      return Object.assign({}, state, {
        progressValue: action.payload,
        progressStatus: ""
      });

    case actionTypes.OFF_PROGRESS_BAR:
      return Object.assign({}, state, {
        progressStatus: action.payload
      });

    case actionTypes.UPDATE_WIDTH:
      return Object.assign({}, state, {
        progressWidth: action.payload
      });

    default:
      return state;
  }
}; // ACTION

var updateState = function updateState(text, type) {
  return function (dispatch) {
    if (text) {
      dispatch({
        type: actionTypes.UPDATE_STATE,
        payload: {
          text: text,
          type: type
        }
      });
    } else {
      dispatch({
        type: actionTypes.UPDATE_STATE
      });
    }
  };
};
var turnonProgress = function turnonProgress(_) {
  return function (dispatch, getState) {
    var _getState$main = _objectSpread({}, getState().main),
        progressWidth = _getState$main.progressWidth;

    if (isNaN(parseInt(progressWidth))) {
      progressWidth = 0;
    }

    var id = setInterval(function (_) {
      if (progressWidth >= 98) {
        clearInterval(id);
        dispatch({
          type: UPDATE_WIDTH,
          payload: 98
        });
        setTimeout(function () {
          turnoffProgress();
        }, 1500);
      } else {
        progressWidth++;
        dispatch({
          type: ON_PROGRESS_BAR,
          payload: progressWidth
        });
      }
    }, 10);
  };
};
var turnoffProgress = function turnoffProgress(_) {
  return function (dispatch, getState) {
    var _getState$main2 = _objectSpread({}, getState().main),
        progressWidth = _getState$main2.progressWidth;

    new Promise(function (resolve) {
      var id = setInterval(function (_) {
        if (progressWidth >= 100) {
          clearInterval(id);
          resolve(progressWidth);
        } else {
          progressWidth++;
        }
      }, 10);
    }).then(function (progressWidth) {
      if (progressWidth >= 100) {
        dispatch({
          type: OFF_PROGRESS_BAR,
          payload: 'none'
        });
        dispatch({
          type: UPDATE_WIDTH,
          payload: 1
        });
      }
    });
  };
};
var updateWidth = function updateWidth(value) {
  return function (dispatch) {
    dispatch({
      type: UPDATE_WIDTH,
      payload: value
    });
  };
};
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;

  if (NODE_ENV == "production") {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a));
  } else {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
  }
}

/***/ }),

/***/ 5:
/*!*****************************!*\
  !*** multi ./pages/home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/home.js */"./pages/home.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=home.js.map