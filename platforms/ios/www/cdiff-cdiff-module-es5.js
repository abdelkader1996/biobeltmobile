(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cdiff-cdiff-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cdiff/cdiff.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cdiff/cdiff.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Contrôle diffusion CO2</ion-title>\n    <!--<ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\" (click)=\"onSynchroB1B2();\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>-->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> \n  <h3 style=\"text-align: center;\">Débits et pression CO2 </h3>\n  <ion-grid style=\"padding-top: 5%;\">\n    <ion-row style=\"text-align: center;\">\n      <ion-col size=\"12\"><ion-button shape=\"round\" expand=\"block\" [color]=\"diffcolor\" disabled=\"true\">{{typediff}}</ion-button></ion-col>\n    </ion-row>\n    <ion-row style=\"text-align: center;\">\n      <ion-col size=\"3\"><ion-button shape=\"round\" size=\"small\" color=\"danger\" (click)=\"onDisableDiff();\">OFF</ion-button></ion-col>\n      <ion-col size=\"3\"><ion-button shape=\"round\" size=\"small\" color=\"primary\" (click)=\"onEnableDiff();\">{{textplaydiff}}</ion-button></ion-col>\n      <ion-col size=\"3\"><ion-button shape=\"round\" size=\"small\" color=\"tertiary\" (click)=\"startstop();\">{{textdiff}}</ion-button></ion-col>\n      \n      \n      <ion-col size=\"3\"><ion-button shape=\"round\" size=\"small\" color=\"warning\" (click)=\"onCheck();\">CHECK</ion-button></ion-col>\n    </ion-row>\n\n  </ion-grid>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title style=\"text-align: center;\">Paramètre</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col>\n            Débit Max\n          </ion-col>\n          <ion-col>\n            <input *ngIf=\"!redBackground\"  type=\"number\" class=\"form-control form-control-sm\" step=\"0.1\"\n                    (click)=\"unsubscribeRefresh()\"\n                    (change)=\"changeFluxMax()\"\n                    [(ngModel)]=\"fluxmax\">\n            <ion-label *ngIf=\"redBackground\">-</ion-label>        \n          </ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col>Intensité</ion-col>\n          <ion-col> <input *ngIf=\"!redBackground\"  type=\"number\" class=\"form-control form-control-sm\"\n            (click)=\"unsubscribeRefresh()\"  \n            (change)=\"changeIntensity();\"\n            [(ngModel)]=\"intensity\"><ion-label *ngIf=\"redBackground\">-</ion-label>  </ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col >Bouteille active</ion-col>\n          <ion-col>\n            <select *ngIf=\"!redBackground\" class=\"custom-select custom-select-sm\"\n                \n            (ngModelChange)=\"changeResAct($event);\"\n            [(ngModel)]=\"resActive\">\n      <option value=\"0\">B0</option>\n      <option value=\"1\">B1</option>\n      <option value=\"2\">B2</option>\n      </select>\n      <ion-label *ngIf=\"redBackground\">-</ion-label>  \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title style=\"text-align: center;\">Mesures</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"6\">\n            <ion-label *ngIf=\"!redBackground\" color=\"dark\">{{\"Intensité : \"+ intensity}}</ion-label>\n            <ion-label *ngIf=\"redBackground\">-</ion-label>  \n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-label *ngIf=\"!redBackground\" color=\"dark\">{{\"Température : \"+temp.toFixed(2)+\" °C\"}}</ion-label>\n            <ion-label *ngIf=\"redBackground\">-</ion-label>  \n          </ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"6\"></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\" style=\"font-weight :bolder\"> Réf</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\" style=\"font-weight :bolder\">Mesure</ion-label></ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"6\"><ion-label color=\"dark\">Débit (nl/min):</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label *ngIf=\"!redBackground\" color=\"dark\">{{debiRef.toFixed(3)}}</ion-label><ion-label *ngIf=\"redBackground\">-</ion-label>  </ion-col>\n          <ion-col size=\"3\" [ngClass]=\"{'bgsuccess':backgroundeb,'bgdanger':!backgroundeb, 'bgwarning':backgrounddangerdeb}\"><ion-label *ngIf=\"!redBackground\" color=\"dark\">{{debiMes.toFixed(3)}}</ion-label><ion-label *ngIf=\"redBackground\">-</ion-label>  </ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"6\"><ion-label color=\"dark\">PE (Bars):</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\"></ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label *ngIf=\"!redBackground\" color=\"dark\">{{peMes.toFixed(3)}}</ion-label><ion-label *ngIf=\"redBackground\">-</ion-label>  </ion-col>\n\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"6\"><ion-label color=\"dark\">PS (Bars):</ion-label></ion-col>\n          <ion-col size=\"3\"></ion-col>\n          <ion-col size=\"3\"><ion-label *ngIf=\"!redBackground\" color=\"dark\">{{psMes.toFixed(3)}}</ion-label><ion-label *ngIf=\"redBackground\">-</ion-label>  </ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n          <ion-col size=\"6\"><ion-label color=\"dark\">PS comp (Bars):</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\"></ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label *ngIf=\"!redBackground\" color=\"dark\">{{psCompMes.toFixed(3)}}</ion-label><ion-label *ngIf=\"redBackground\">-</ion-label>  </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card> \n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-card-title style=\"text-align: center;\">Offsets</ion-card-title>\n        <ion-card-content>\n          <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n            <ion-col size=\"6\">PE (bar)</ion-col>\n            <ion-col size=\"6\"><ion-input *ngIf=\"!redBackground\" type=\"tel\" [(ngModel)]=\"offsetPE\" (focusout)=\"changeoffsetPE();\"></ion-input><ion-label *ngIf=\"redBackground\">-</ion-label>  </ion-col>\n            <ion-col size=\"6\">PS (bar)</ion-col>\n            <ion-col size=\"6\"><ion-input *ngIf=\"!redBackground\" [(ngModel)]=\"offsetPS\" type=\"tel\" (focusout)=\"changeoffsetPS();\"></ion-input><ion-label *ngIf=\"redBackground\">-</ion-label>  </ion-col>\n            <ion-col size=\"6\">Debit (nl/min)</ion-col>\n            <ion-col size=\"6\"><ion-input *ngIf=\"!redBackground\" [(ngModel)]=\"offsetdeb\" type=\"tel\" (focusout)=\"changeoffsetdeb();\"></ion-input><ion-label *ngIf=\"redBackground\">-</ion-label>  </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-card-title style=\"text-align: center;\">PID</ion-card-title>\n        <ion-card-content>\n          <ion-row [ngClass]=\"{'bgred' : redBackground}\">\n            <ion-col size=\"6\">Prop</ion-col>\n            <ion-col size=\"6\"><ion-input *ngIf=\"!redBackground\" [(ngModel)]=\"pidprog\" type=\"tel\" (focusout)=\"changePID();\"></ion-input><ion-label *ngIf=\"redBackground\">-</ion-label>  </ion-col>\n            <ion-col size=\"6\">INT</ion-col>\n            <ion-col size=\"6\"><ion-input *ngIf=\"!redBackground\" [(ngModel)]=\"pidint\" type=\"tel\" (focusout)=\"changeINT();\"></ion-input><ion-label *ngIf=\"redBackground\">-</ion-label>  </ion-col>\n            <ion-col size=\"6\">DER</ion-col>\n            <ion-col size=\"6\"><ion-input *ngIf=\"!redBackground\" [(ngModel)]=\"pider\" type=\"tel\" (focusout)=\"changeDIR()\"></ion-input><ion-label *ngIf=\"redBackground\">-</ion-label>  </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n<ion-footer>\n  <ion-button *ngIf=\"!global.displayLoading\" style=\"float: left\" fill=\"clear\" (click)=\"global.onReadStatiqueEnable()\">    \n    <ion-icon name=\"refresh\"></ion-icon>\n  </ion-button>\n  <ion-button *ngIf=\"global.displayLoading\" style=\"float: left;\" fill=\"clear\" color=\"primary\">\n    <ion-spinner></ion-spinner>\n  </ion-button>\n  <ion-button *ngIf=\"display\" style='float: right' fill='clear' (click)='goToNextPage()'>Suivant<ion-icon name='arrow-forward'></ion-icon></ion-button>\n</ion-footer>\n\n"

/***/ }),

/***/ "./src/app/cdiff/cdiff-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/cdiff/cdiff-routing.module.ts ***!
  \***********************************************/
/*! exports provided: CdiffPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdiffPageRoutingModule", function() { return CdiffPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cdiff_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cdiff.page */ "./src/app/cdiff/cdiff.page.ts");




var routes = [
    {
        path: '',
        component: _cdiff_page__WEBPACK_IMPORTED_MODULE_3__["CdiffPage"]
    }
];
var CdiffPageRoutingModule = /** @class */ (function () {
    function CdiffPageRoutingModule() {
    }
    CdiffPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CdiffPageRoutingModule);
    return CdiffPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/cdiff/cdiff.module.ts":
/*!***************************************!*\
  !*** ./src/app/cdiff/cdiff.module.ts ***!
  \***************************************/
/*! exports provided: CdiffPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdiffPageModule", function() { return CdiffPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cdiff_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cdiff-routing.module */ "./src/app/cdiff/cdiff-routing.module.ts");
/* harmony import */ var _cdiff_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cdiff.page */ "./src/app/cdiff/cdiff.page.ts");







var CdiffPageModule = /** @class */ (function () {
    function CdiffPageModule() {
    }
    CdiffPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _cdiff_routing_module__WEBPACK_IMPORTED_MODULE_5__["CdiffPageRoutingModule"]
            ],
            declarations: [_cdiff_page__WEBPACK_IMPORTED_MODULE_6__["CdiffPage"]]
        })
    ], CdiffPageModule);
    return CdiffPageModule;
}());



/***/ }),

/***/ "./src/app/cdiff/cdiff.page.scss":
/*!***************************************!*\
  !*** ./src/app/cdiff/cdiff.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgdanger {\n  background-color: red;\n}\n\n.bgsuccess {\n  background-color: green;\n}\n\n.bgwarning {\n  background-color: yellow;\n}\n\nion-input {\n  border: solid 1px;\n  text-align: center;\n}\n\n/*.bgred {\n\tbackground-color: red;\n    color : black;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2RpZmYvQzpcXFVzZXJzXFxkZXZlbFxcT25lRHJpdmVcXEJ1cmVhdVxcYi1EZXYvc3JjXFxhcHBcXGNkaWZmXFxjZGlmZi5wYWdlLnNjc3MiLCJzcmMvYXBwL2NkaWZmL2NkaWZmLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBRENBO0VBQ0ksd0JBQUE7QUNFSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQzs7O0VBQUEiLCJmaWxlIjoic3JjL2FwcC9jZGlmZi9jZGlmZi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdkYW5nZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmJnc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4uYmd3YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cblxuaW9uLWlucHV0e1xuICAgIGJvcmRlcjogc29saWQgMXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG4gLyouYmdyZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3IgOiBibGFjaztcbn0qL1xuXG4iLCIuYmdkYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5iZ3N1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmJnd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuaW9uLWlucHV0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyouYmdyZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3IgOiBibGFjaztcbn0qLyJdfQ== */"

/***/ }),

/***/ "./src/app/cdiff/cdiff.page.ts":
/*!*************************************!*\
  !*** ./src/app/cdiff/cdiff.page.ts ***!
  \*************************************/
/*! exports provided: CdiffPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdiffPage", function() { return CdiffPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/upcv3/correspondancesRegistres */ "./src/app/model/upcv3/correspondancesRegistres.ts");









var CdiffPage = /** @class */ (function () {
    //diffusion à l'arrêt start reload front detectchange 
    function CdiffPage(global, platform, loadingCTRL, ngZone, hotspot, network, cd, router, storage, events) {
        this.global = global;
        this.platform = platform;
        this.loadingCTRL = loadingCTRL;
        this.ngZone = ngZone;
        this.hotspot = hotspot;
        this.network = network;
        this.cd = cd;
        this.router = router;
        this.storage = storage;
        this.events = events;
        this.textdiff = "ADJUST";
        this.colordif = "light";
        this.textplaydiff = "DIFF";
        this.colorplayfiff = "light";
        this.colordis = "light";
        this.colorcheck = "light";
        this.offsetPE = 0;
        this.offsetPS = 0;
        this.offsetdeb = 0;
        this.pidprog = 0;
        this.pidint = 0;
        this.pider = 0;
        this.fluxmax = 0;
        this.intensity = 0;
        this.resActive = 0;
        this.temp = 0;
        this.debiRef = 0;
        this.peRef = 0;
        this.psRef = 0;
        this.debiMes = 0;
        this.peMes = 0;
        this.psMes = 0;
        this.psComp = 0;
        this.psCompMes = 0;
        this.backgroundeb = false;
        this.backgrounddangerdeb = false;
        this.diffcolor = "light";
        this.typediff = "Mode de diffusion";
        this.redBackground = false;
        this.display = false;
        this.global.checkMode();
    }
    CdiffPage.prototype.ngOnInit = function () { };
    CdiffPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.global.connexionRequise = "UPC";
        /*affichage bouton suivant*/
        this.global.checkNextPage().then(function (res) {
            if (res == true) {
                _this.display = true;
            }
        });
        this.upc3s = JSON.parse(localStorage.getItem("upc3"));
        this.correspondancesRegistres = new _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_8__["CorrespondancesRegistres"]();
        this.global.onReadStatiqueEnable().then(function () {
            _this.subscribeRefresh();
        });
    };
    CdiffPage.prototype.startstop = function () {
        this.onChangeDiff();
    };
    CdiffPage.prototype.doRefresh = function (event) {
        var _this = this;
        this.unsubscribeRefresh();
        this.global.onReadStatiqueEnable().then(function () {
            _this.subscribeRefresh();
        });
    };
    CdiffPage.prototype.onChangeDiff = function () {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change diff");
        this.global.onWriteEnable(this.correspondancesRegistres.upcMode, 2);
    };
    CdiffPage.prototype.onDisableDiff = function () {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on disable diff");
        this.global.onWriteEnable(this.correspondancesRegistres.upcMode, 0);
    };
    CdiffPage.prototype.onEnableDiff = function () {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on enable diff");
        this.global.onWriteEnable(this.correspondancesRegistres.upcMode, 1);
    };
    CdiffPage.prototype.onCheck = function () {
        var _this = this;
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on check");
        this.global.onWriteEnable(this.correspondancesRegistres.upcMode, 3).then(function () {
            _this.colorcheck = "primary";
            _this.colordis = "light";
            _this.colorplayfiff = "light";
            _this.colordif = "light";
            _this.typediff = "Mode CHECK Pressions";
            _this.diffcolor = "warning";
        });
    };
    CdiffPage.prototype.changeIntensity = function () {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change intensity");
        this.global.onWriteEnable(this.correspondancesRegistres.upcDiffLvlAdj, this.intensity);
    };
    CdiffPage.prototype.changeFluxMax = function () {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change flux max");
        this.global.onWriteEnable(this.correspondancesRegistres.co2FlowRefAdj, this.fluxmax);
    };
    CdiffPage.prototype.changeResAct = function () {
        this.resActive = this.resActive == 1 ? 2 : 1;
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change res act");
        this.global.onWriteEnable(this.correspondancesRegistres.co2ResActAdj, this.resActive);
    };
    CdiffPage.prototype.changePID = function () {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change PID");
        this.global.onWriteEnable(this.correspondancesRegistres.upcCo2PidProp, this.pidprog);
    };
    CdiffPage.prototype.changeINT = function () {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change INT");
        this.global.onWriteEnable(this.correspondancesRegistres.upcCo2PidInteg, this.pidint);
    };
    CdiffPage.prototype.changeDIR = function () {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change DIR");
        this.global.onWriteEnable(this.correspondancesRegistres.upcCo2PidDiff, this.pider);
    };
    CdiffPage.prototype.changeoffsetPE = function () {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change offsetPE");
        this.global.onWriteEnable(this.correspondancesRegistres.co2PressInpOffs, this.offsetPE);
    };
    CdiffPage.prototype.changeoffsetPS = function () {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change offsetPS");
        this.global.onWriteEnable(this.correspondancesRegistres.co2PressoutOffs, this.offsetPS);
    };
    CdiffPage.prototype.changeoffsetdeb = function () {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change offsetdeb");
        this.global.onWriteEnable(this.correspondancesRegistres.co2FlowOffs, this.offsetdeb);
    };
    CdiffPage.prototype.goToNextPage = function () {
        var _this = this;
        this.storage.get("nexturl").then(function (res) {
            _this.router.navigate([res]);
        });
    };
    CdiffPage.prototype.subscribeRefresh = function () {
        var _this = this;
        this.events.subscribe("loadParameters", function ($event) {
            var status = _this.global.upcmodbus.general.upcStatus;
            if (status == 0) {
                _this.colordis = "danger";
                _this.colorcheck = "light";
                _this.colorplayfiff = "light";
                _this.colordif = "light";
                _this.typediff = "Diffusion OFF";
                _this.diffcolor = "danger";
            }
            else if (status == 3) {
                _this.colorcheck = "primary";
                _this.colordis = "light";
                _this.colorplayfiff = "light";
                _this.colordif = "light";
                _this.typediff = "Mode CHECK Pressions";
                _this.diffcolor = "warning";
            }
            else if (status == 2) {
                _this.colordif = "primary";
                _this.colorplayfiff = "light";
                _this.colordis = "light";
                _this.colorcheck = "light";
                _this.diffcolor = "tertiary";
                _this.typediff = "Mode ADJUST";
            }
            else {
                _this.colorplayfiff = "primary";
                _this.colordif = "light";
                _this.colorcheck = "light";
                _this.colordis = "light";
                _this.typediff = "Diff. programmée ACTIF";
                _this.diffcolor = "primary";
            }
            _this.offsetPE = _this.global.upcmodbus.diffusions.co2PressInpOffs;
            _this.offsetPS = _this.global.upcmodbus.diffusions.co2PressOutOffs;
            _this.offsetdeb = _this.global.upcmodbus.diffusions.co2FlowOffs;
            _this.pidprog = _this.global.upcmodbus.general.upcCo2PidProp;
            _this.pidint = _this.global.upcmodbus.general.upcCo2PidInteg;
            _this.pider = _this.global.upcmodbus.general.upcCo2PidDiff;
            //40018
            _this.fluxmax = _this.global.upcmodbus.general.co2FlowRefAdj;
            //40065
            _this.intensity = _this.global.upcmodbus.diffusions.upcDiffLvlAdj;
            //40150
            _this.resActive = _this.global.upcmodbus.reserves.co2ResActAdj;
            _this.debiRef = (_this.fluxmax * _this.intensity) / 10;
            //this.global.interval = setInterval(async ()=>{
            //40416
            //this.intensity = this.upc.client.registerToUint32(res[0]); 
            //40435                    
            _this.peMes = _this.global.upcmodbus.diffusions.co2PresInpAvg;
            //40437                    
            _this.psMes = _this.global.upcmodbus.diffusions.co2PresOutAvg;
            //40439                     
            _this.debiMes = _this.global.upcmodbus.diffusions.co2FlowAvg;
            if (Math.abs(((_this.debiMes - _this.debiRef) / _this.debiRef) * 100) < 5) {
                _this.backgroundeb = true;
                _this.backgrounddangerdeb = false;
            }
            else if (Math.abs(((_this.debiMes - _this.debiRef) / _this.debiRef) * 100) < 10) {
                _this.backgrounddangerdeb = true;
            }
            else {
                _this.backgroundeb = false;
                _this.backgrounddangerdeb = false;
            }
            //40451                    
            _this.temp = _this.global.upcmodbus.diffusions.co2TempAvg;
            //40463                   
            _this.psCompMes = _this.global.upcmodbus.diffusions.co2PressOutComp;
        });
    };
    CdiffPage.prototype.unsubscribeRefresh = function () {
        this.events.unsubscribe("loadParameters");
    };
    CdiffPage.ctorParameters = function () { return [
        { type: _api_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_4__["Hotspot"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] }
    ]; };
    CdiffPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cdiff',
            template: __webpack_require__(/*! raw-loader!./cdiff.page.html */ "./node_modules/raw-loader/index.js!./src/app/cdiff/cdiff.page.html"),
            styles: [__webpack_require__(/*! ./cdiff.page.scss */ "./src/app/cdiff/cdiff.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_4__["Hotspot"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]])
    ], CdiffPage);
    return CdiffPage;
}());



/***/ })

}]);
//# sourceMappingURL=cdiff-cdiff-module-es5.js.map