(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["namepiege-namepiege-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/namepiege/namepiege.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/namepiege/namepiege.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <!--<ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Paramètres UPC</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\" (click)=\"onSynchroB1B2();\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>-->  \n  </ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" id=\"refresher\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <h3 style=\"text-align: center;\">Paramètres Généraux UPC</h3>\n  <ion-card>\n    <ion-card-content>\n      <ion-row><ion-col size=\"6\">Nom de l'UPC</ion-col><ion-col size=\"6\"><ion-input [(ngModel)]=\"name\" enterkeyhint=\"enter\" placeholder=\"Nom de l'UPC...\" (ionFocus)=\"unsubscribeRefresh()\" (focusout)=\"onChangeName();\"></ion-input></ion-col></ion-row>\n      <ion-row><ion-col size=\"6\">Nombre de pièges</ion-col><ion-col size=\"6\"><ion-input [(ngModel)]=\"nbpiege\" enterkeyhint=\"enter\" placeholder=\"Nombre de pièges...\" (ionFocus)=\"unsubscribeRefresh()\" (focusout)=\"onChangePieges();\"></ion-input></ion-col></ion-row>\n      <ion-row><ion-col size=\"6\">UUID</ion-col><ion-col size=\"6\">{{uuid}}</ion-col></ion-row>\n      <ion-row><ion-col size=\"6\">Fuseau Horaire (h)</ion-col><ion-col size=\"6\"><ion-input [(ngModel)]=\"fusehor\" enterkeyhint=\"enter\" type=\"number\" (ionFocus)=\"unsubscribeRefresh()\" (focusout)=\"onChangeFusHor()\"></ion-input></ion-col></ion-row>\n      <ion-row><ion-col size=\"6\">Horloge</ion-col><ion-col size=\"6\">{{horloge}}</ion-col></ion-row>\n      <ion-row><ion-col size=\"6\">Firmware</ion-col><ion-col size=\"6\">{{\"v\"+firm}}</ion-col></ion-row>\n    </ion-card-content>\n  </ion-card>\n  \n\n  <div style=\"text-align: center;\">\n  <ion-button color=\"danger\" (click)=\"onWipe();\">\n    WIPE\n  </ion-button>\n  <ion-button color=\"warning\" (click)=\"onReset();\">RESET</ion-button>\n</div>\n</ion-content>\n<ion-footer style=\"display: inline-block\">\n  <ion-button *ngIf=\"!global.displayLoading\" style=\"float: left\" fill=\"clear\" (click)=\"global.onReadStatiqueEnable()\">    \n    <ion-icon name=\"refresh\"></ion-icon>\n  </ion-button>\n  <ion-button *ngIf=\"global.displayLoading\" style=\"float: left;\" fill=\"clear\" color=\"primary\">\n    <ion-spinner></ion-spinner>\n  </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/namepiege/namepiege-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/namepiege/namepiege-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: NamepiegePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamepiegePageRoutingModule", function() { return NamepiegePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _namepiege_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./namepiege.page */ "./src/app/namepiege/namepiege.page.ts");




var routes = [
    {
        path: '',
        component: _namepiege_page__WEBPACK_IMPORTED_MODULE_3__["NamepiegePage"]
    }
];
var NamepiegePageRoutingModule = /** @class */ (function () {
    function NamepiegePageRoutingModule() {
    }
    NamepiegePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NamepiegePageRoutingModule);
    return NamepiegePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/namepiege/namepiege.module.ts":
/*!***********************************************!*\
  !*** ./src/app/namepiege/namepiege.module.ts ***!
  \***********************************************/
/*! exports provided: NamepiegePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamepiegePageModule", function() { return NamepiegePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _namepiege_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./namepiege-routing.module */ "./src/app/namepiege/namepiege-routing.module.ts");
/* harmony import */ var _namepiege_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./namepiege.page */ "./src/app/namepiege/namepiege.page.ts");







var NamepiegePageModule = /** @class */ (function () {
    function NamepiegePageModule() {
    }
    NamepiegePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _namepiege_routing_module__WEBPACK_IMPORTED_MODULE_5__["NamepiegePageRoutingModule"]
            ],
            declarations: [_namepiege_page__WEBPACK_IMPORTED_MODULE_6__["NamepiegePage"]]
        })
    ], NamepiegePageModule);
    return NamepiegePageModule;
}());



/***/ }),

/***/ "./src/app/namepiege/namepiege.page.scss":
/*!***********************************************!*\
  !*** ./src/app/namepiege/namepiege.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  border: solid 1px black;\n  text-align: center;\n  color: black;\n}\n\nion-col {\n  color: black;\n}\n\n/*.bgred {\n\tbackground-color: red;\n    color : black;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmFtZXBpZWdlL0M6XFxVc2Vyc1xcZGV2ZWxcXE9uZURyaXZlXFxCdXJlYXVcXGItRGV2L3NyY1xcYXBwXFxuYW1lcGllZ2VcXG5hbWVwaWVnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL25hbWVwaWVnZS9uYW1lcGllZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7QUNFSjs7QURDQTs7O0VBQUEiLCJmaWxlIjoic3JjL2FwcC9uYW1lcGllZ2UvbmFtZXBpZWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgICB0ZXh0LWFsaWduIDpjZW50ZXI7XG4gICAgY29sb3IgOiBibGFjaztcbiB9XG5pb24tY29sIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi8qLmJncmVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yIDogYmxhY2s7XG59Ki9cblxuIiwiaW9uLWlucHV0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tY29sIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4vKi5iZ3JlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjb2xvciA6IGJsYWNrO1xufSovIl19 */"

/***/ }),

/***/ "./src/app/namepiege/namepiege.page.ts":
/*!*********************************************!*\
  !*** ./src/app/namepiege/namepiege.page.ts ***!
  \*********************************************/
/*! exports provided: NamepiegePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamepiegePage", function() { return NamepiegePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/upcv3/correspondancesRegistres */ "./src/app/model/upcv3/correspondancesRegistres.ts");





var NamepiegePage = /** @class */ (function () {
    // Pièges sauvegardes plan
    function NamepiegePage(global, platform, ngZone, cd, alertCTRL, events) {
        this.global = global;
        this.platform = platform;
        this.ngZone = ngZone;
        this.cd = cd;
        this.alertCTRL = alertCTRL;
        this.events = events;
        this.name = "";
        this.nbpiege = 0;
        this.uuid = "";
        this.firm = "";
        this.redBackground = false;
        this.length = 0;
        this.global.checkMode();
    }
    NamepiegePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.global.connexionRequise = "UPC";
        this.correspondancesRegistres = new _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_4__["CorrespondancesRegistres"]();
        this.global.onReadStatiqueEnable().then(function () {
            _this.subscribeRefresh();
        });
        this.horloge = this.global.upcmodbus.general.upcClock;
    };
    NamepiegePage.prototype.doRefresh = function (event) {
        this.ionViewWillEnter();
        event.target.complete();
    };
    NamepiegePage.prototype.toZero4 = function (d) {
        return ("0000" + (+d).toString(16)).substr(-4);
    };
    NamepiegePage.prototype.onChangeName = function () {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change upcname");
        this.global.onWriteEnable(this.correspondancesRegistres.upcNameId, this.name);
    };
    NamepiegePage.prototype.onChangePieges = function () {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change nbpiege");
        this.global.onWriteEnable(this.correspondancesRegistres.upcTrapNum, this.nbpiege);
    };
    /*async onWipe() {
      let alert = await this.alertCTRL.create({message : "Êtes vous sûr d'effectuer un Wipe ?",
                                               buttons : [{text : "Non"},{text : "Oui",handler : ()=>{
                                                this.global.onWriteModbusVariables().then(res=>{
                                                  var d = new Date()
                                                  this.global.logs.push(this.global.msToTime(d.getTime())+" - début écriture")
                                                  this.global.ecritureEnCours = true;
                                                  this.global.upcmodbus.client.setIntInHoldingRegister(40011,1,61166).then(res=>{
                                                    var d = new Date()
                                                    this.global.logs.push(this.global.msToTime(d.getTime())+" - écriture réussie")
                                                    this.subscribeRefresh()
                                                    this.global.ecritureEnCours = false;
                                                  }).catch(err=>{
                                                    var d = new Date()
                                                    this.global.logs.push(this.global.msToTime(d.getTime())+" - écriture échouée")
                                                    this.subscribeRefresh()
                                                    this.global.ecritureEnCours = false;
                                                  })
                                                })
                                               }}]
                                        })
      alert.present();
    }
  
    async onReset() {
      let alert = await this.alertCTRL.create({message : "Êtes vous sûr d'effectuer un Reset ?",
                                               buttons : [{text : "Non"},{text : "Oui", handler : ()=>{
                                                this.global.onWriteModbusVariables().then(res=>{
                                                  var d = new Date()
                                                  this.global.logs.push(this.global.msToTime(d.getTime())+" - début écriture")
                                                  this.global.ecritureEnCours = true;
                                                  this.global.upcmodbus.client.setIntInHoldingRegister(40011,1,65535).then(res=>{
                                                    var d = new Date()
                                                    this.global.logs.push(this.global.msToTime(d.getTime())+" - écriture réussie")
                                                    this.subscribeRefresh()
                                                    this.global.ecritureEnCours = false;
                                                  }).catch(err=>{
                                                    var d = new Date()
                                                    this.global.logs.push(this.global.msToTime(d.getTime())+" - écriture échouée")
                                                    this.subscribeRefresh()
                                                    this.global.ecritureEnCours = false;
                                                  })
                                                })
                                                  
                                                
                                               }}]
      })
      alert.present();
      
    }*/
    NamepiegePage.prototype.onChangeFusHor = function () {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change fushor");
        this.global.onWriteEnable(this.correspondancesRegistres.upcTimeZone, this.fusehor);
    };
    NamepiegePage.prototype.unsubscribeRefresh = function () {
        this.events.unsubscribe("loadParameters");
    };
    NamepiegePage.prototype.subscribeRefresh = function () {
        var _this = this;
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - subscribe");
        this.events.subscribe("loadParameters", function ($event) {
            _this.name = _this.global.upcmodbus.nameId;
            _this.length = _this.name.length;
            _this.nbpiege = _this.global.upcmodbus.general.upcTrapNum;
            _this.uuid = _this.global.upcmodbus.general.upcMcuUid;
            _this.fusehor = _this.global.upcmodbus.general.upcTimeZone;
            _this.firm = "" + _this.global.upcmodbus.general.upcFwVer;
            _this.horloge = _this.global.upcmodbus.general.upcClock;
        });
    };
    NamepiegePage.ctorParameters = function () { return [
        { type: _api_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] }
    ]; };
    NamepiegePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-namepiege',
            template: __webpack_require__(/*! raw-loader!./namepiege.page.html */ "./node_modules/raw-loader/index.js!./src/app/namepiege/namepiege.page.html"),
            styles: [__webpack_require__(/*! ./namepiege.page.scss */ "./src/app/namepiege/namepiege.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]])
    ], NamepiegePage);
    return NamepiegePage;
}());



/***/ })

}]);
//# sourceMappingURL=namepiege-namepiege-module-es5.js.map