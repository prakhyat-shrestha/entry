webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* #fullPage {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmin-height: 100vh;\r\n} */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* .main{\r\n    width: 500px;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    border: 2px solid #d7d7d7;\r\n    border-bottom: 0px;\r\n    margin-top: 20px;\r\n    font-family: sans-serif;\r\n}\r\n\r\nh1{\r\n    text-align: center;\r\n    background-color: #5c8297;\r\n    padding: 30px 0px;\r\n    margin-top: 0px;\r\n    color: white;\r\n}\r\n\r\n.addItem {\r\n    position: relative;\r\n    padding-bottom: 0px;\r\n    height: 30px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.addText{\r\n    width: 80%;\r\n    height: 30px;\r\n    padding: 5px;\r\n    font-size: 20px;\r\n}\r\n\r\n.addItem button {\r\n    height: 45px;\r\n    width: 50px;\r\n    padding: 5px;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n    font-size: 20px;\r\n    color: #686868;\r\n    margin-left: -40px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\nli {\r\n    border-bottom: 1px solid #bfbfbf;\r\n    background-color: #d7d7d7;\r\n    padding: 10px 0px;\r\n    margin-bottom:5px;\r\n}\r\n\r\nspan {\r\n    cursor: pointer;\r\n    position: relative;\r\n    float: right;\r\n    margin-right: 5px;\r\n}\r\n */\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"main\">\n  <h1>Todo Items List</h1>\n  <div class=\"addItem\">\n    <input [(ngModel)]=\"newItem\" placeholder=\"Add Item\" class=\"addText\">\n    <button (click)=\"pushItem()\">Add</button>\n  </div>\n  <ul>\n    <li *ngFor = \"let i of items; let ind = index\">\n      {{i.name}}\n      <span (click)=\"removeItem(ind)\">x</span>\n    </li>\n  </ul>\n\n</div> -->\n\n\n<div id=\"fullPage\">\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_data_service__ = __webpack_require__("../../../../../src/app/my-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(myDataService) {
        this.myDataService = myDataService;
        this.title = 'app Works';
        this.items = [];
        this.newItem = "";
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__my_data_service__["a" /* MyDataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_data_service__ = __webpack_require__("../../../../../src/app/my-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todo_todo_todo_component__ = __webpack_require__("../../../../../src/app/todo/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__customers_customers_component__ = __webpack_require__("../../../../../src/app/customers/customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__customers_customers_service__ = __webpack_require__("../../../../../src/app/customers/customers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__repairs_repairs_component__ = __webpack_require__("../../../../../src/app/repairs/repairs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__repairs_repairs_service__ = __webpack_require__("../../../../../src/app/repairs/repairs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__states_states_component__ = __webpack_require__("../../../../../src/app/states/states.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__states_states_service__ = __webpack_require__("../../../../../src/app/states/states.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__brands_brands_component__ = __webpack_require__("../../../../../src/app/brands/brands.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__brands_brands_service__ = __webpack_require__("../../../../../src/app/brands/brands.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__employees_employees_component__ = __webpack_require__("../../../../../src/app/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__employees_employees_service__ = __webpack_require__("../../../../../src/app/employees/employees.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__models_models_component__ = __webpack_require__("../../../../../src/app/models/models.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__models_models_service__ = __webpack_require__("../../../../../src/app/models/models.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__equipments_equipments_component__ = __webpack_require__("../../../../../src/app/equipments/equipments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__equipments_equipments_service__ = __webpack_require__("../../../../../src/app/equipments/equipments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ng_pick_datetime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_ng_pick_datetime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__details_details_component__ = __webpack_require__("../../../../../src/app/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__details_details_service__ = __webpack_require__("../../../../../src/app/details/details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pipes__ = __webpack_require__("../../../../../src/app/pipes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_8__login_form_login_form_component__["a" /* LoginFormComponent */]
    },
    {
        path: 'dashboard',
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
    },
    {
        path: 'customers',
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_14__customers_customers_component__["a" /* CustomersComponent */]
    },
    {
        path: 'states',
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_18__states_states_component__["a" /* StatesComponent */]
    },
    {
        path: 'brands',
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_23__brands_brands_component__["a" /* BrandsComponent */]
    },
    {
        path: 'equipments',
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_29__equipments_equipments_component__["a" /* EquipmentsComponent */]
    },
    {
        path: 'employees',
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_25__employees_employees_component__["a" /* EmployeesComponent */]
    },
    {
        path: 'models',
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_27__models_models_component__["a" /* ModelsComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_35__pipes__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_6__todo_todo_todo_component__["a" /* TodoComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_form_login_form_component__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__customers_customers_component__["a" /* CustomersComponent */],
                __WEBPACK_IMPORTED_MODULE_16__repairs_repairs_component__["a" /* RepairsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__states_states_component__["a" /* StatesComponent */],
                __WEBPACK_IMPORTED_MODULE_23__brands_brands_component__["a" /* BrandsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__employees_employees_component__["a" /* EmployeesComponent */],
                __WEBPACK_IMPORTED_MODULE_27__models_models_component__["a" /* ModelsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__equipments_equipments_component__["a" /* EquipmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_32__details_details_component__["a" /* DetailsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_20__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_22_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_31_ng_pick_datetime__["DateTimePickerModule"],
                __WEBPACK_IMPORTED_MODULE_34_ngx_pagination__["a" /* NgxPaginationModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__my_data_service__["a" /* MyDataService */],
                __WEBPACK_IMPORTED_MODULE_12__user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_11__auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_15__customers_customers_service__["a" /* CustomersService */],
                __WEBPACK_IMPORTED_MODULE_17__repairs_repairs_service__["a" /* RepairsService */],
                __WEBPACK_IMPORTED_MODULE_19__states_states_service__["a" /* StatesService */],
                __WEBPACK_IMPORTED_MODULE_24__brands_brands_service__["a" /* BrandsService */],
                __WEBPACK_IMPORTED_MODULE_26__employees_employees_service__["a" /* EmployeesService */],
                __WEBPACK_IMPORTED_MODULE_28__models_models_service__["a" /* ModelsService */],
                __WEBPACK_IMPORTED_MODULE_30__equipments_equipments_service__["a" /* EquipmentsService */],
                __WEBPACK_IMPORTED_MODULE_33__details_details_service__["a" /* DetailsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(user) {
        this.user = user;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.user.getUserLoggedIn();
        ;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/brands/brands.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/brands/brands.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navigation></app-navigation>\n\n<div class=\"container\">\n  <div class=\"col-md-12\">\n    <div class=\"row\">\n      <div class=\"col-md-10\"><h2>Brands List</h2></div>\n      <div class=\"col-md-2 addButton-right\">    \n        <button class=\"btn btn-primary\"\n        (click)=\"showAddBrandForm()\"\n        data-toggle=\"modal\" \n        data-target=\"#addBrandModal\">\n    <i class=\"fa fa-plus\"></i>&nbsp;Brand\n    </button></div>\n    </div>\n    \n\n    <table class=\"table table-bordered table-striped table-hover\">\n      <thead>\n        <tr>\n          <th class=\"text-center\">S.N</th>\n          <th class=\"text-center\">Brand Name</th>\n          <th class=\"text-center\">Brand Description</th>\n          \n          <th class=\"text-center\">&nbsp;</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor = \"let brand of brands;let ind=index\">\n          <td>{{ind+1}}</td>\n          <td>{{brand.brandName}}</td>\n          <td>{{brand.brandDescription}}</td>\n          \n          <td>\n            <button class=\"btn btn-success\"\n              (click)=\"showBrandDetails(brand)\"\n              data-toggle=\"modal\" \n            data-target=\"#addBrandModal\">\n              <i class=\"fa fa-eye\"></i>\n            </button>\n            <button class=\"btn btn-info\"\n                    (click)=\"showEditBrandForm(brand)\"\n                    data-toggle=\"modal\" \n                  data-target=\"#addBrandModal\">\n              <i class=\"fa fa-edit\"></i>\n            </button>\n            <button class=\"btn btn-danger\"\n                    (click)=\"removeBrand(brand._id)\">\n                <i class=\"fa fa-minus\"></i>\n              </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <form *ngIf=\"brandForm\" #brandEntryForm=\"ngForm\">\n      <div class=\"modal fade\" \n            id=\"addBrandModal\" \n            tabindex=\"-1\" role=\"dialog\" \n            aria-labelledby=\"addBrandModal\" \n            aria-hidden=\"true\"\n            data-backdrop=\"static\" \n            data-keyboard=\"false\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" \n                      class=\"close\" \n                      (click)=\"cancelAddEdit()\"\n                      data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n              <h4 class=\"modal-title\" id=\"myModalLabel\" *ngIf=\"!showDetails\">Add/Edit Brand</h4>\n              <h4 class=\"modal-title\" id=\"myModalLabel\" *ngIf=\"showDetails\">Brand Details</h4>\n            </div>\n            <div class=\"modal-body\">\n              \n                \n\n                <div class=\"form-group\" \n                [class.has-success]=\"brandName.dirty && brandName.valid\"\n                [class.has-error]=\"(brandName.touched) && !(brandName.valid)\">\n\n\n                <label for=\"brandName\">Brand Name</label>\n                  <input type=\"text\" \n                          class=\"form-control\"\n                          id=\"brandName\"\n                          name=\"brandName\"\n                          id=\"brandName\"\n                          #brandName=\"ngModel\"\n                          [(ngModel)]=\"newBrand.brandName\"\n                          required   \n                          >\n                  <div *ngIf=\"(brandName.dirty||brandName.touched) && !(brandName.valid)\" class=\"alert alert-danger\">\n                      Name is required!\n                  </div>\n\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"brandDesc\">Description</label>\n                    <textarea\n                          class=\"form-control\"\n                         id=\"brandDesc\"\n                          name=\"brandDesc\"\n                          [(ngModel)]=\"newBrand.brandDescription\"\n                          rows=\"3\"\n                          ></textarea>\n                 </div>\n   \n            </div>\n            <div class=\"modal-footer\" *ngIf=\"!showDetails\" >\n\n                <button type=\"button\" \n                class=\"btn btn-primary\"\n                data-dismiss=\"modal\" \n                (click)=\"saveBrand(newBrand)\"\n                [disabled]=\"!brandEntryForm.form.valid\"\n                >Save changes</button>\n                \n\n              <button type=\"button\" \n                      class=\"btn btn-default\" \n                      data-dismiss=\"modal\"\n                      (click)=\"cancelAddEdit()\"\n                      >Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/brands/brands.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brands_service__ = __webpack_require__("../../../../../src/app/brands/brands.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrandsComponent = (function () {
    function BrandsComponent(brandsService, toastr) {
        this.brandsService = brandsService;
        this.toastr = toastr;
        this.brandForm = false;
        this.showDetails = false;
        this.newBrand = {};
    }
    BrandsComponent.prototype.ngOnInit = function () {
        this.fetchBrands();
    };
    BrandsComponent.prototype.fetchBrands = function () {
        var _this = this;
        this.brandsService.fetchBrands().subscribe(function (data) { return _this.brands = data; });
    };
    BrandsComponent.prototype.showBrandDetails = function (Brand) {
        if (!Brand) {
            this.brandForm = false;
            return;
        }
        this.brandForm = true;
        this.isNewForm = false;
        this.newBrand = Brand;
        this.showDetails = true;
    };
    BrandsComponent.prototype.showEditBrandForm = function (Brand) {
        if (!Brand) {
            this.brandForm = false;
            return;
        }
        this.brandForm = true;
        this.isNewForm = false;
        this.newBrand = Brand;
        this.showDetails = false;
    };
    BrandsComponent.prototype.showAddBrandForm = function () {
        //resets form if edited Brand
        console.log(this.brands.length);
        if (this.brands.length) {
            this.newBrand = {};
        }
        this.brandForm = true;
        this.isNewForm = true;
        this.showDetails = false;
    };
    BrandsComponent.prototype.saveBrand = function (Brand) {
        var _this = this;
        if (this.isNewForm) {
            //add a new Brand
            this.brandsService.addBrand(Brand).subscribe(function (data) {
                console.log(data);
                _this.fetchBrands();
            });
            this.showAddSuccess();
        }
        else {
            //update an existing Brand
            this.brandsService.updateBrand(Brand).toPromise()
                .then(function () {
                _this.fetchBrands();
            });
            this.showEditSuccess();
        }
        this.brandForm = false;
    };
    BrandsComponent.prototype.removeBrand = function (id) {
        var _this = this;
        if (confirm("Are you sure?")) {
            this.brandsService.removeBrand(id).toPromise()
                .then(function () {
                _this.fetchBrands();
            });
            this.showDeleteSuccess();
        }
    };
    BrandsComponent.prototype.cancelAddEdit = function () {
        this.brandForm = false;
        this.fetchBrands();
    };
    BrandsComponent.prototype.showAddSuccess = function () {
        this.toastr.success('Brand Added Successfully!!');
    };
    BrandsComponent.prototype.showEditSuccess = function () {
        this.toastr.success('Brand Edited Successfully!!');
    };
    BrandsComponent.prototype.showDeleteSuccess = function () {
        this.toastr.success('Brand Deleted Successfully!!');
    };
    BrandsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-brands',
            template: __webpack_require__("../../../../../src/app/brands/brands.component.html"),
            styles: [__webpack_require__("../../../../../src/app/brands/brands.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__brands_service__["a" /* BrandsService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], BrandsComponent);
    return BrandsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/brands/brands.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrandsService = (function () {
    function BrandsService(http) {
        this.http = http;
    }
    BrandsService.prototype.fetchBrands = function () {
        return this.http.get('http://159.89.170.175:3000/api/brands')
            .map(function (response) { return response.json(); });
    };
    BrandsService.prototype.addBrand = function (brand) {
        return this.http.post("http://159.89.170.175:3000/api/brands", brand);
    };
    BrandsService.prototype.removeBrand = function (id) {
        var url = "http://159.89.170.175:3000/api/brands" + "/" + id;
        return this.http.delete(url);
    };
    BrandsService.prototype.updateBrand = function (brand) {
        var url = "http://159.89.170.175:3000/api/brands" + "/" + brand._id;
        return this.http.put(url, brand);
    };
    BrandsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], BrandsService);
    return BrandsService;
}());



/***/ }),

/***/ "../../../../../src/app/customers/customers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customers/customers.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n<div class=\"container\">\n  <div class=\"col-md-12\">\n    <div class=\"row\">\n      <div class=\"col-md-10\"><h2>Customers List</h2></div>\n      <div class=\"col-md-2 addButton-right\">    \n        <button class=\"btn btn-primary\"\n        (click)=\"showAddCustomerForm()\"\n        data-toggle=\"modal\" \n        data-target=\"#addCustomerModal\">\n    <i class=\"fa fa-plus\"></i>&nbsp;Customer\n    </button></div>\n    </div>\n    \n\n    <table class=\"table table-bordered table-striped table-hover\">\n      <thead>\n        <tr>\n          <th class=\"text-center\">S.N</th>\n          <th class=\"text-center\">Name</th>\n          <th class=\"text-center\">Company</th>\n          <th class=\"text-center\">Phone</th>\n          <th class=\"text-center\">&nbsp;</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor = \"let cust of customers | paginate:{ itemsPerPage: 5, currentPage: p }; let i=index\">\n          <td>{{i+1}}</td>\n          <td>{{cust.name}}</td>\n          <td>{{cust.company}}</td>\n          <td>{{cust.phone}}</td>\n          <td>\n            <button class=\"btn btn-success\"\n              (click)=\"showCustomerDetails(cust)\"\n              data-toggle=\"modal\" \n            data-target=\"#addCustomerModal\">\n              <i class=\"fa fa-eye\"></i>\n            </button>\n            <button class=\"btn btn-info\"\n                    (click)=\"showEditCustomerForm(cust)\"\n                    data-toggle=\"modal\" \n                  data-target=\"#addCustomerModal\">\n              <i class=\"fa fa-edit\"></i>\n            </button>\n            <button class=\"btn btn-danger\"\n                    (click)=\"removeCustomer(cust._id)\">\n                <i class=\"fa fa-minus\"></i>\n              </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\n    <form *ngIf=\"customerForm\" #customerEntryForm=\"ngForm\">\n      <div class=\"modal fade\" \n            id=\"addCustomerModal\" \n            tabindex=\"-1\" role=\"dialog\" \n            aria-labelledby=\"addCustomerModal\" \n            aria-hidden=\"true\"\n            data-backdrop=\"static\" \n            data-keyboard=\"false\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" \n                      class=\"close\" \n                      (click)=\"cancelAddEdit()\"\n                      data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n              <h4 class=\"modal-title\" id=\"myModalLabel\" *ngIf=\"!showDetails\">Add/Edit Customer</h4>\n              <h4 class=\"modal-title\" id=\"myModalLabel\" *ngIf=\"showDetails\">Customer Details</h4>\n            </div>\n            <div class=\"modal-body\">\n              \n                \n\n                <div class=\"form-group\" \n                [class.has-success]=\"custName.dirty && custName.valid\"\n                [class.has-error]=\"(custName.touched) && !(custName.valid)\">\n\n\n                  <label for=\"custName\">Customer Name (required)</label>\n                  <input type=\"text\" \n                          class=\"form-control\" \n                          name=\"custName\"\n                          id=\"custName\"\n                          #custName=\"ngModel\"\n                          [(ngModel)]=\"newCustomer.name\"\n                          required   \n                          >\n                  <div *ngIf=\"(custName.dirty||custName.touched) && !(custName.valid)\" class=\"alert alert-danger\">\n                      Name is required!\n                  </div>\n\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"custCompany\">Company</label>\n                  <input type=\"text\" \n                          class=\"form-control\"\n                          id=\"custCompany\"\n                          name=\"custCompany\"\n                          [(ngModel)]=\"newCustomer.company\"\n                          >\n                 </div>\n                 <div class=\"form-group\">\n                    <label for=\"custPhone\">Phone</label>\n                    <input type=\"text\" \n                            class=\"form-control\"\n                            id=\"custPhone\"\n                            name=\"custPhone\"\n                            [(ngModel)]=\"newCustomer.phone\">\n                   </div>\n                   <div class=\"form-group\">\n                      <label for=\"custMobile\">Mobile</label>\n                      <input type=\"text\" \n                              class=\"form-control\"\n                              id=\"custMobile\"\n                              name=\"custMobile\"\n                              [(ngModel)]=\"newCustomer.mobile\">\n                     </div>\n                     <div class=\"form-group\">\n                        <label for=\"custEmail\">Email</label>\n                        <input type=\"text\" \n                                class=\"form-control\"\n                                id=\"custEmail\"\n                                name=\"custEmail\"\n                                [(ngModel)]=\"newCustomer.email\">\n                       </div>\n                       <div class=\"form-group\">\n                          <label for=\"custAddress\">Address</label>\n                          <input type=\"text\" \n                                  class=\"form-control\"\n                                  id=\"custAddress\"\n                                  name=\"custAddress\"\n                                  [(ngModel)]=\"newCustomer.address\">\n                         </div>\n                         <div class=\"form-group\">\n                            <label for=\"custCity\">City</label>\n                            <input type=\"text\" \n                                    class=\"form-control\"\n                                    id=\"custCity\"\n                                    name=\"custCity\"\n                                    [(ngModel)]=\"newCustomer.city\">\n                           </div>\n\n<!--                 <button type=\"button\" \n                        class=\"btn btn-primary\"\n                        (click)=\"saveCustomer(newCustomer)\"\n                        >Submit</button>\n                <button type=\"button\" \n                        class=\"btn btn-warning\"\n                        (click)=\"cancelAddEdit()\">Cancel</button> -->\n              \n            </div>\n            <div class=\"modal-footer\" *ngIf=\"!showDetails\" >\n\n                <button type=\"button\" \n                class=\"btn btn-primary\"\n                data-dismiss=\"modal\" \n                (click)=\"saveCustomer(newCustomer)\"\n                [disabled]=\"!customerEntryForm.form.valid\"\n                >Save changes</button>\n                <!-- [disabled]=\"!customerEntryForm.form.valid\" -->\n\n              <button type=\"button\" \n                      class=\"btn btn-default\" \n                      data-dismiss=\"modal\"\n                      (click)=\"cancelAddEdit()\"\n                      >Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/customers/customers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customers_service__ = __webpack_require__("../../../../../src/app/customers/customers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomersComponent = (function () {
    function CustomersComponent(customersService, toastr) {
        this.customersService = customersService;
        this.toastr = toastr;
        this.customerForm = false;
        this.showDetails = false;
        this.newCustomer = {};
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.fetchCustomers();
    };
    CustomersComponent.prototype.fetchCustomers = function () {
        var _this = this;
        this.customersService.fetchCustomers().subscribe(function (data) {
            _this.customers = data;
            _this.customers.sort(_this.sortByCustomerName);
        });
    };
    CustomersComponent.prototype.showCustomerDetails = function (customer) {
        if (!customer) {
            this.customerForm = false;
            return;
        }
        this.customerForm = true;
        this.isNewForm = false;
        this.newCustomer = customer;
        this.showDetails = true;
    };
    CustomersComponent.prototype.showEditCustomerForm = function (customer) {
        if (!customer) {
            this.customerForm = false;
            return;
        }
        this.customerForm = true;
        this.isNewForm = false;
        this.newCustomer = customer;
        this.showDetails = false;
    };
    CustomersComponent.prototype.showAddCustomerForm = function () {
        //resets form if edited customer
        console.log(this.customers.length);
        if (this.customers.length) {
            this.newCustomer = {};
        }
        this.customerForm = true;
        this.isNewForm = true;
        this.showDetails = false;
    };
    CustomersComponent.prototype.saveCustomer = function (customer) {
        var _this = this;
        if (this.isNewForm) {
            //add a new customer
            this.customersService.addCustomer(customer).subscribe(function (data) {
                console.log(data);
                _this.fetchCustomers();
            });
            this.showAddSuccess();
        }
        else {
            //update an existing customer
            this.customersService.updateCustomer(customer).toPromise()
                .then(function () {
                _this.fetchCustomers();
            });
            this.showEditSuccess();
        }
        this.customerForm = false;
    };
    CustomersComponent.prototype.removeCustomer = function (id) {
        var _this = this;
        if (confirm("Are you sure?")) {
            this.customersService.removeCustomer(id).toPromise()
                .then(function () {
                _this.fetchCustomers();
            });
            this.showDeleteSuccess();
        }
    };
    CustomersComponent.prototype.cancelAddEdit = function () {
        this.customerForm = false;
        this.fetchCustomers();
    };
    CustomersComponent.prototype.showAddSuccess = function () {
        this.toastr.success('Customer Added Successfully!!');
    };
    CustomersComponent.prototype.showEditSuccess = function () {
        this.toastr.success('Customer Edited Successfully!!');
    };
    CustomersComponent.prototype.showDeleteSuccess = function () {
        this.toastr.success('Customer Deleted Successfully!!');
    };
    CustomersComponent.prototype.sortByCustomerName = function (a, b) {
        if (a.name > b.name)
            return 1;
        else if (a.name === b.name)
            return 0;
        else
            return -1;
    };
    CustomersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__("../../../../../src/app/customers/customers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customers/customers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__customers_service__["a" /* CustomersService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customers/customers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomersService = (function () {
    function CustomersService(http) {
        this.http = http;
    }
    CustomersService.prototype.fetchCustomers = function () {
        return this.http.get('http://159.89.170.175:3000/api/customers')
            .map(function (response) { return response.json(); });
    };
    CustomersService.prototype.addCustomer = function (customer) {
        return this.http.post("http://159.89.170.175:3000/api/customers", customer);
    };
    CustomersService.prototype.removeCustomer = function (id) {
        var url = "http://159.89.170.175:3000/api/customers" + "/" + id;
        return this.http.delete(url);
    };
    CustomersService.prototype.updateCustomer = function (customer) {
        var url = "http://159.89.170.175:3000/api/customers" + "/" + customer._id;
        return this.http.put(url, customer);
    };
    CustomersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], CustomersService);
    return CustomersService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-repairs></app-repairs>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(user) {
        this.user = user;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/details/details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  details works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__details_service__ = __webpack_require__("../../../../../src/app/details/details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = (function () {
    function DetailsComponent(detailsService, toastr) {
        this.detailsService = detailsService;
        this.toastr = toastr;
        this.detailForm = false;
        this.showDetails = false;
        this.newDetail = {};
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.fetchDetails();
    };
    DetailsComponent.prototype.fetchDetails = function () {
        var _this = this;
        this.detailsService.fetchDetails().subscribe(function (data) { return _this.details = data; });
    };
    DetailsComponent.prototype.showDetailDetails = function (Detail) {
        if (!Detail) {
            this.detailForm = false;
            return;
        }
        this.detailForm = true;
        this.isNewForm = false;
        this.newDetail = Detail;
        this.showDetails = true;
    };
    DetailsComponent.prototype.showEditDetailForm = function (Detail) {
        if (!Detail) {
            this.detailForm = false;
            return;
        }
        this.detailForm = true;
        this.isNewForm = false;
        this.newDetail = Detail;
        this.showDetails = false;
    };
    DetailsComponent.prototype.showAddDetailForm = function () {
        //resets form if edited Detail
        console.log(this.details.length);
        if (this.details.length) {
            this.newDetail = {};
        }
        this.detailForm = true;
        this.isNewForm = true;
        this.showDetails = false;
    };
    DetailsComponent.prototype.saveDetail = function (Detail) {
        var _this = this;
        if (this.isNewForm) {
            //add a new Detail
            this.detailsService.addDetail(Detail).subscribe(function (data) {
                console.log(data);
                _this.fetchDetails();
            });
            this.showAddSuccess();
        }
        else {
            //update an existing Detail
            this.detailsService.updateDetail(Detail).toPromise()
                .then(function () {
                _this.fetchDetails();
            });
            this.showEditSuccess();
        }
        this.detailForm = false;
    };
    DetailsComponent.prototype.removeDetail = function (id) {
        var _this = this;
        this.detailsService.removeDetail(id).toPromise()
            .then(function () {
            _this.fetchDetails();
        });
        this.showDeleteSuccess();
    };
    DetailsComponent.prototype.cancelAddEdit = function () {
        this.detailForm = false;
        this.fetchDetails();
    };
    DetailsComponent.prototype.showAddSuccess = function () {
        this.toastr.success('Detail Added Successfully!!');
    };
    DetailsComponent.prototype.showEditSuccess = function () {
        this.toastr.success('Detail Edited Successfully!!');
    };
    DetailsComponent.prototype.showDeleteSuccess = function () {
        this.toastr.success('Detail Deleted Successfully!!');
    };
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-details',
            template: __webpack_require__("../../../../../src/app/details/details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__details_service__["a" /* DetailsService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/details/details.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsService = (function () {
    function DetailsService(http) {
        this.http = http;
    }
    DetailsService.prototype.fetchDetails = function () {
        return this.http.get('http://159.89.170.175:3000/api/details')
            .map(function (response) { return response.json(); });
    };
    DetailsService.prototype.fetchDetailsById = function (id) {
        // const url = `${"http://159.89.170.175:3000/api/repairs"}/${id}/${"details"}`;
        var url = "http://159.89.170.175:3000/api/details" + "/" + id;
        return this.http.get(url)
            .map(function (response) { return response.json(); });
        // http://159.89.170.175:3000/api/repairs/5a3efa18f8e026139c014359/details
    };
    DetailsService.prototype.addDetail = function (detail) {
        return this.http.post("http://159.89.170.175:3000/api/details", detail)
            .map(function (response) { return response.json(); });
    };
    DetailsService.prototype.removeDetail = function (id) {
        // const url = `${"http://159.89.170.175:3000/api/repairs"}/${id}/${"details"}`;
        var url = "http://159.89.170.175:3000/api/details" + "/" + id;
        return this.http.delete(url);
    };
    DetailsService.prototype.updateDetail = function (detail) {
        // console.log(detail.repairId);
        //const url = `${"http://159.89.170.175:3000/api/details/update/?where[repairId]="}${detail.repairId}`;
        var url = "http://159.89.170.175:3000/api/details" + "/" + detail._id;
        return this.http.put(url, detail);
    };
    DetailsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DetailsService);
    return DetailsService;
}());



/***/ }),

/***/ "../../../../../src/app/employees/employees.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employees/employees.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navigation></app-navigation>\n\n<div class=\"container\">\n  <div class=\"col-md-12\">\n    <div class=\"row\">\n      <div class=\"col-md-10\"><h2>Employees List</h2></div>\n      <div class=\"col-md-2 addButton-right\">    \n        <button class=\"btn btn-primary\"\n        (click)=\"showAddEmployeeForm()\"\n        data-toggle=\"modal\" \n        data-target=\"#addEmployeeModal\">\n    <i class=\"fa fa-plus\"></i>&nbsp;Employee\n    </button></div>\n    </div>\n    \n\n    <table class=\"table table-bordered table-striped table-hover\">\n      <thead>\n        <tr>\n          <th class=\"text-center\">S.N</th>\n          <th class=\"text-center\">Employee Name</th>\n          <th class=\"text-center\">Employee Mobile</th>\n          \n          <th class=\"text-center\">&nbsp;</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor = \"let employee of employees;let ind=index\">\n          <td>{{ind+1}}</td>\n          <td>{{employee.employeeName}}</td>\n          <td>{{employee.employeeMobile}}</td>\n          \n          <td>\n            <button class=\"btn btn-success\"\n              (click)=\"showEmployeeDetails(employee)\"\n              data-toggle=\"modal\" \n            data-target=\"#addEmployeeModal\">\n              <i class=\"fa fa-eye\"></i>\n            </button>\n            <button class=\"btn btn-info\"\n                    (click)=\"showEditEmployeeForm(employee)\"\n                    data-toggle=\"modal\" \n                  data-target=\"#addEmployeeModal\">\n              <i class=\"fa fa-edit\"></i>\n            </button>\n            <button class=\"btn btn-danger\"\n                    (click)=\"removeEmployee(employee._id)\">\n                <i class=\"fa fa-minus\"></i>\n              </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <form *ngIf=\"employeeForm\" #employeeEntryForm=\"ngForm\">\n      <div class=\"modal fade\" \n            id=\"addEmployeeModal\" \n            tabindex=\"-1\" role=\"dialog\" \n            aria-labelledby=\"addEmployeeModal\" \n            aria-hidden=\"true\"\n            data-backdrop=\"static\" \n            data-keyboard=\"false\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" \n                      class=\"close\" \n                      (click)=\"cancelAddEdit()\"\n                      data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n              <h4 class=\"modal-title\" id=\"myModalLabel\" *ngIf=\"!showDetails\">Add/Edit Employee</h4>\n              <h4 class=\"modal-title\" id=\"myModalLabel\" *ngIf=\"showDetails\">Employee Details</h4>\n            </div>\n            <div class=\"modal-body\">\n              \n                \n\n                <div class=\"form-group\" \n                [class.has-success]=\"employeeName.dirty && employeeName.valid\"\n                [class.has-error]=\"(employeeName.touched) && !(employeeName.valid)\">\n\n\n                <label for=\"employeeName\">Employee Name</label>\n                  <input type=\"text\" \n                          class=\"form-control\"\n                          id=\"employeeName\"\n                          name=\"employeeName\"\n                          id=\"employeeName\"\n                          #employeeName=\"ngModel\"\n                          [(ngModel)]=\"newEmployee.employeeName\"\n                          required   \n                          >\n                  <div *ngIf=\"(employeeName.dirty||employeeName.touched) && !(employeeName.valid)\" class=\"alert alert-danger\">\n                      Name is required!\n                  </div>\n\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"employeeMobile\">Mobile Number</label>\n                    <input type=\"text\" \n                          class=\"form-control\"\n                          id=\"employeeMobile\"\n                          name=\"employeeMobile\"\n                          [(ngModel)]=\"newEmployee.employeeMobile\"\n                          rows=\"3\"\n                          >\n                 </div>\n   \n            </div>\n            <div class=\"modal-footer\" *ngIf=\"!showDetails\" >\n\n                <button type=\"button\" \n                class=\"btn btn-primary\"\n                data-dismiss=\"modal\" \n                (click)=\"saveEmployee(newEmployee)\"\n                [disabled]=\"!employeeEntryForm.form.valid\"\n                >Save changes</button>\n                \n\n              <button type=\"button\" \n                      class=\"btn btn-default\" \n                      data-dismiss=\"modal\"\n                      (click)=\"cancelAddEdit()\"\n                      >Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/employees/employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employees_service__ = __webpack_require__("../../../../../src/app/employees/employees.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeesComponent = (function () {
    function EmployeesComponent(employeesService, toastr) {
        this.employeesService = employeesService;
        this.toastr = toastr;
        this.employeeForm = false;
        this.showDetails = false;
        this.newEmployee = {};
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        this.fetchEmployees();
    };
    EmployeesComponent.prototype.fetchEmployees = function () {
        var _this = this;
        this.employeesService.fetchEmployees().subscribe(function (data) { return _this.employees = data; });
    };
    EmployeesComponent.prototype.showEmployeeDetails = function (Employee) {
        if (!Employee) {
            this.employeeForm = false;
            return;
        }
        this.employeeForm = true;
        this.isNewForm = false;
        this.newEmployee = Employee;
        this.showDetails = true;
    };
    EmployeesComponent.prototype.showEditEmployeeForm = function (Employee) {
        if (!Employee) {
            this.employeeForm = false;
            return;
        }
        this.employeeForm = true;
        this.isNewForm = false;
        this.newEmployee = Employee;
        this.showDetails = false;
    };
    EmployeesComponent.prototype.showAddEmployeeForm = function () {
        //resets form if edited Employee
        console.log(this.employees.length);
        if (this.employees.length) {
            this.newEmployee = {};
        }
        this.employeeForm = true;
        this.isNewForm = true;
        this.showDetails = false;
    };
    EmployeesComponent.prototype.saveEmployee = function (Employee) {
        var _this = this;
        if (this.isNewForm) {
            //add a new Employee
            this.employeesService.addEmployee(Employee).subscribe(function (data) {
                console.log(data);
                _this.fetchEmployees();
            });
            this.showAddSuccess();
        }
        else {
            //update an existing Employee
            this.employeesService.updateEmployee(Employee).toPromise()
                .then(function () {
                _this.fetchEmployees();
            });
            this.showEditSuccess();
        }
        this.employeeForm = false;
    };
    EmployeesComponent.prototype.removeEmployee = function (id) {
        var _this = this;
        if (confirm("Are you sure?")) {
            this.employeesService.removeEmployee(id).toPromise()
                .then(function () {
                _this.fetchEmployees();
            });
            this.showDeleteSuccess();
        }
    };
    EmployeesComponent.prototype.cancelAddEdit = function () {
        this.employeeForm = false;
        this.fetchEmployees();
    };
    EmployeesComponent.prototype.showAddSuccess = function () {
        this.toastr.success('Employee Added Successfully!!');
    };
    EmployeesComponent.prototype.showEditSuccess = function () {
        this.toastr.success('Employee Edited Successfully!!');
    };
    EmployeesComponent.prototype.showDeleteSuccess = function () {
        this.toastr.success('Employee Deleted Successfully!!');
    };
    EmployeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__("../../../../../src/app/employees/employees.component.html"),
            styles: [__webpack_require__("../../../../../src/app/employees/employees.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__employees_service__["a" /* EmployeesService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/employees/employees.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeesService = (function () {
    function EmployeesService(http) {
        this.http = http;
    }
    EmployeesService.prototype.fetchEmployees = function () {
        return this.http.get('http://159.89.170.175:3000/api/employees')
            .map(function (response) { return response.json(); });
    };
    EmployeesService.prototype.addEmployee = function (employee) {
        return this.http.post("http://159.89.170.175:3000/api/employees", employee);
    };
    EmployeesService.prototype.removeEmployee = function (id) {
        var url = "http://159.89.170.175:3000/api/employees" + "/" + id;
        return this.http.delete(url);
    };
    EmployeesService.prototype.updateEmployee = function (employee) {
        var url = "http://159.89.170.175:3000/api/employees" + "/" + employee._id;
        return this.http.put(url, employee);
    };
    EmployeesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], EmployeesService);
    return EmployeesService;
}());



/***/ }),

/***/ "../../../../../src/app/equipments/equipments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/equipments/equipments.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navigation></app-navigation>\n\n<div class=\"container\">\n  <div class=\"col-md-12\">\n    <div class=\"row\">\n      <div class=\"col-md-10\"><h2>Equipments List</h2></div>\n      <div class=\"col-md-2 addButton-right\">    \n        <button class=\"btn btn-primary\"\n        (click)=\"showAddEquipmentForm()\"\n        data-toggle=\"modal\" \n        data-target=\"#addEquipmentModal\">\n    <i class=\"fa fa-plus\"></i>&nbsp;Equipment\n    </button></div>\n    </div>\n    \n\n    <table class=\"table table-bordered table-striped table-hover\">\n      <thead>\n        <tr>\n          <th class=\"text-center\">S.N</th>\n          <th class=\"text-center\">Equipment Name</th>\n          <th class=\"text-center\">Equipment Description</th>\n          \n          <th class=\"text-center\">&nbsp;</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor = \"let equipment of equipments;let ind=index\">\n          <td>{{ind+1}}</td>\n          <td>{{equipment.equipmentName}}</td>\n          <td>{{equipment.equipmentDescription}}</td>\n          \n          <td>\n            <button class=\"btn btn-success\"\n              (click)=\"showEquipmentDetails(equipment)\"\n              data-toggle=\"modal\" \n            data-target=\"#addEquipmentModal\">\n              <i class=\"fa fa-eye\"></i>\n            </button>\n            <button class=\"btn btn-info\"\n                    (click)=\"showEditEquipmentForm(equipment)\"\n                    data-toggle=\"modal\" \n                  data-target=\"#addEquipmentModal\">\n              <i class=\"fa fa-edit\"></i>\n            </button>\n            <button class=\"btn btn-danger\"\n                    (click)=\"removeEquipment(equipment._id)\">\n                <i class=\"fa fa-minus\"></i>\n              </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <form *ngIf=\"equipmentForm\" #equipmentEntryForm=\"ngForm\">\n      <div class=\"modal fade\" \n            id=\"addEquipmentModal\" \n            tabindex=\"-1\" role=\"dialog\" \n            aria-labelledby=\"addEquipmentModal\" \n            aria-hidden=\"true\"\n            data-backdrop=\"static\" \n            data-keyboard=\"false\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" \n                      class=\"close\" \n                      (click)=\"cancelAddEdit()\"\n                      data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n              <h4 class=\"modal-title\" id=\"myModalLabel\" *ngIf=\"!showDetails\">Add/Edit Equipment</h4>\n              <h4 class=\"modal-title\" id=\"myModalLabel\" *ngIf=\"showDetails\">Equipment Details</h4>\n            </div>\n            <div class=\"modal-body\">\n              \n                \n\n                <div class=\"form-group\" \n                [class.has-success]=\"equipmentName.dirty && equipmentName.valid\"\n                [class.has-error]=\"(equipmentName.touched) && !(equipmentName.valid)\">\n\n\n                <label for=\"equipmentName\">Equipment Name</label>\n                  <input type=\"text\" \n                          class=\"form-control\"\n                          id=\"equipmentName\"\n                          name=\"equipmentName\"\n                          id=\"equipmentName\"\n                          #equipmentName=\"ngModel\"\n                          [(ngModel)]=\"newEquipment.equipmentName\"\n                          required   \n                          >\n                  <div *ngIf=\"(equipmentName.dirty||equipmentName.touched) && !(equipmentName.valid)\" class=\"alert alert-danger\">\n                      Name is required!\n                  </div>\n\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"equipmentDesc\">Description</label>\n                    <textarea\n                          class=\"form-control\"\n                         id=\"equipmentDesc\"\n                          name=\"equipmentDesc\"\n                          [(ngModel)]=\"newEquipment.equipmentDescription\"\n                          rows=\"3\"\n                          ></textarea>\n                 </div>\n   \n            </div>\n            <div class=\"modal-footer\" *ngIf=\"!showDetails\" >\n\n                <button type=\"button\" \n                class=\"btn btn-primary\"\n                data-dismiss=\"modal\" \n                (click)=\"saveEquipment(newEquipment)\"\n                [disabled]=\"!equipmentEntryForm.form.valid\"\n                >Save changes</button>\n                \n\n              <button type=\"button\" \n                      class=\"btn btn-default\" \n                      data-dismiss=\"modal\"\n                      (click)=\"cancelAddEdit()\"\n                      >Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/equipments/equipments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equipments_service__ = __webpack_require__("../../../../../src/app/equipments/equipments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EquipmentsComponent = (function () {
    function EquipmentsComponent(equipmentsService, toastr) {
        this.equipmentsService = equipmentsService;
        this.toastr = toastr;
        this.equipmentForm = false;
        this.showDetails = false;
        this.newEquipment = {};
    }
    EquipmentsComponent.prototype.ngOnInit = function () {
        this.fetchEquipments();
    };
    EquipmentsComponent.prototype.fetchEquipments = function () {
        var _this = this;
        this.equipmentsService.fetchEquipments().subscribe(function (data) { return _this.equipments = data; });
    };
    EquipmentsComponent.prototype.showEquipmentDetails = function (Equipment) {
        if (!Equipment) {
            this.equipmentForm = false;
            return;
        }
        this.equipmentForm = true;
        this.isNewForm = false;
        this.newEquipment = Equipment;
        this.showDetails = true;
    };
    EquipmentsComponent.prototype.showEditEquipmentForm = function (Equipment) {
        if (!Equipment) {
            this.equipmentForm = false;
            return;
        }
        this.equipmentForm = true;
        this.isNewForm = false;
        this.newEquipment = Equipment;
        this.showDetails = false;
    };
    EquipmentsComponent.prototype.showAddEquipmentForm = function () {
        //resets form if edited Equipment
        console.log(this.equipments.length);
        if (this.equipments.length) {
            this.newEquipment = {};
        }
        this.equipmentForm = true;
        this.isNewForm = true;
        this.showDetails = false;
    };
    EquipmentsComponent.prototype.saveEquipment = function (Equipment) {
        var _this = this;
        if (this.isNewForm) {
            //add a new Equipment
            this.equipmentsService.addEquipment(Equipment).subscribe(function (data) {
                console.log(data);
                _this.fetchEquipments();
            });
            this.showAddSuccess();
        }
        else {
            //update an existing Equipment
            this.equipmentsService.updateEquipment(Equipment).toPromise()
                .then(function () {
                _this.fetchEquipments();
            });
            this.showEditSuccess();
        }
        this.equipmentForm = false;
    };
    EquipmentsComponent.prototype.removeEquipment = function (id) {
        var _this = this;
        if (confirm("Are you sure?")) {
            this.equipmentsService.removeEquipment(id).toPromise()
                .then(function () {
                _this.fetchEquipments();
            });
            this.showDeleteSuccess();
        }
    };
    EquipmentsComponent.prototype.cancelAddEdit = function () {
        this.equipmentForm = false;
        this.fetchEquipments();
    };
    EquipmentsComponent.prototype.showAddSuccess = function () {
        this.toastr.success('Equipment Added Successfully!!');
    };
    EquipmentsComponent.prototype.showEditSuccess = function () {
        this.toastr.success('Equipment Edited Successfully!!');
    };
    EquipmentsComponent.prototype.showDeleteSuccess = function () {
        this.toastr.success('Equipment Deleted Successfully!!');
    };
    EquipmentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-equipments',
            template: __webpack_require__("../../../../../src/app/equipments/equipments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/equipments/equipments.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__equipments_service__["a" /* EquipmentsService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], EquipmentsComponent);
    return EquipmentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/equipments/equipments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EquipmentsService = (function () {
    function EquipmentsService(http) {
        this.http = http;
    }
    EquipmentsService.prototype.fetchEquipments = function () {
        return this.http.get('http://159.89.170.175:3000/api/equipments')
            .map(function (response) { return response.json(); });
    };
    EquipmentsService.prototype.addEquipment = function (equipment) {
        return this.http.post("http://159.89.170.175:3000/api/equipments", equipment);
    };
    EquipmentsService.prototype.removeEquipment = function (id) {
        var url = "http://159.89.170.175:3000/api/equipments" + "/" + id;
        return this.http.delete(url);
    };
    EquipmentsService.prototype.updateEquipment = function (equipment) {
        var url = "http://159.89.170.175:3000/api/equipments" + "/" + equipment._id;
        return this.http.put(url, equipment);
    };
    EquipmentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], EquipmentsService);
    return EquipmentsService;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\r\n    text-align: center;\r\n    padding: 20px 0;\r\n    font-size: 30px;\r\n    border-bottom: 2px solid #eee;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  Keshtronix Camera Repair\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex-positive: 1;\r\n\t        flex-grow: 1;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\ndiv.input {\r\n\tposition: relative;\r\n}\r\n\r\ndiv.input label {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\t-webkit-transform: translateY(-50%);\r\n\t        transform: translateY(-50%);\r\n\tleft: 10px;\r\n\tbackground: white;\r\n\tpadding: 5px 2px;\r\n}\r\n\r\ndiv.input input {\r\n\tpadding: 10px 20px;\r\n\tfont-size: 25px;\r\n\toutline: 0;\r\n}\r\n\r\ndiv.input {\r\n\tmargin-top: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit) = \"loginUser($event)\">\n  <div class=\"input\">\n    <label>Username</label>\n    <input type=\"text\">\n  </div>\n  <div class=\"input\">\n    <label>Password</label>\n    <input type=\"password\">\n  </div>\n  <div class=\"input\">\n    <input type=\"submit\" value=\"Login\">\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = (function () {
    function LoginFormComponent(router, user) {
        this.router = router;
        this.user = user;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.loginUser = function (e) {
        e.preventDefault();
        var username = e.target.elements[0].value;
        var password = e.target.elements[1].value;
        //console.log(username,password);
        if (username == 'raja' && password == 'rani') {
            this.user.setUserLoggedIn();
            this.router.navigate(['dashboard']);
        }
        else {
            alert("Wrong UserName & Password Combination! Please Try Again!");
        }
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__("../../../../../src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/models.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/models/models.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navigation></app-navigation>\n\n<div class=\"container\">\n  <div class=\"col-md-12\">\n    <div class=\"row\">\n      <div class=\"col-md-10\"><h2>Models List</h2></div>\n      <div class=\"col-md-2 addButton-right\">    \n        <button class=\"btn btn-primary\"\n        (click)=\"showAddModelForm()\"\n        data-toggle=\"modal\" \n        data-target=\"#addModelModal\">\n    <i class=\"fa fa-plus\"></i>&nbsp;Model\n    </button></div>\n    </div>\n    \n\n    <table class=\"table table-bordered table-striped table-hover\">\n      <thead>\n        <tr>\n          <th>S.N</th>\n          <th>Model Name</th>\n          <th>Model Description</th>\n          <th>Brand</th>\n          <th>Equipment Type</th>\n          <th>&nbsp;</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor = \"let model of models;let ind=index\">\n          <td>{{ind+1}}</td>\n          <td>{{model.model_Name}}</td>\n          <td>{{model.model_Description}}</td>\n          <td>{{model.brandId.brandName}}</td>\n          <td>{{model.equipmentId.equipmentName}}</td>  \n          <td>\n            <button class=\"btn btn-success\"\n              (click)=\"showModelDetails(model)\"\n              data-toggle=\"modal\" \n            data-target=\"#addModelModal\">\n              <i class=\"fa fa-eye\"></i>\n            </button>\n            <button class=\"btn btn-info\"\n                    (click)=\"showEditModelForm(model)\"\n                    data-toggle=\"modal\" \n                  data-target=\"#addModelModal\">\n              <i class=\"fa fa-edit\"></i>\n            </button>\n            <button class=\"btn btn-danger\"\n                    (click)=\"removeModel(model._id)\">\n                <i class=\"fa fa-minus\"></i>\n              </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <form *ngIf=\"modelForm\" #modelEntryForm=\"ngForm\">\n      <div class=\"modal fade\" \n            id=\"addModelModal\" \n            tabindex=\"-1\" role=\"dialog\" \n            aria-labelledby=\"addModelModal\" \n            aria-hidden=\"true\"\n            data-backdrop=\"static\" \n            data-keyboard=\"false\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" \n                      class=\"close\" \n                      (click)=\"cancelAddEdit()\"\n                      data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n              <h4 class=\"modal-title\" id=\"myModalLabel\" *ngIf=\"!showDetails\">Add/Edit Model</h4>\n              <h4 class=\"modal-title\" id=\"myModalLabel\" *ngIf=\"showDetails\">Model Details</h4>\n            </div>\n            <div class=\"modal-body\">\n              \n                \n\n                <div class=\"form-group\" \n                [class.has-success]=\"model_Name.dirty && model_Name.valid\"\n                [class.has-error]=\"(model_Name.touched) && !(model_Name.valid)\">\n\n\n                <label for=\"model_Name\">Model Name *</label>\n                  <input type=\"text\" \n                          class=\"form-control\"\n                          id=\"model_Name\"\n                          name=\"model_Name\"\n                          id=\"model_Name\"\n                          #model_Name=\"ngModel\"\n                          [(ngModel)]=\"newModel.model_Name\"\n                          required   \n                          >\n                  <div *ngIf=\"(model_Name.dirty||model_Name.touched) && !(model_Name.valid)\" class=\"alert alert-danger\">\n                      Name is required!\n                  </div>\n\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"modelDesc\">Description</label>\n                    <textarea\n                          class=\"form-control\"\n                          id=\"modelDesc\"\n                          name=\"modelDesc\"\n                          [(ngModel)]=\"newModel.model_Description\"\n                          rows=\"3\"\n                          ></textarea>\n                 </div>\n                  <div class=\"form-group\">\n                   <label for=\"modelBrand\">Brand</label><br>\n                   <select  class=\"form-control\" \n                            name=\"brands\" \n                             [(ngModel)]=\"newModel.brandId\"\n                            >\n                      <option value=\"\" disabled >Choose a Brand</option>\n                      <option *ngFor=\"let brand of brands\" value=\"{{brand._id}}\">\n                               {{brand.brandName}}</option>\n                    </select>\n\n                 </div>\n\n\n                 <div class=\"form-group\">\n                    <label for=\"modelBrand\">Equipment Type</label><br>\n                    <select  class=\"form-control\" \n                             name=\"equipments\" \n                             [(ngModel)]=\"newModel.equipmentId\">\n                       <option *ngFor=\"let equipment of equipments\" value=\"{{equipment._id}}\">{{equipment.equipmentName}}</option>\n                     </select>\n \n                  </div>\n\n                \n            </div>\n            <div class=\"modal-footer\" *ngIf=\"!showDetails\" >\n\n                <button type=\"button\" \n                class=\"btn btn-primary\"\n                data-dismiss=\"modal\" \n                (click)=\"saveModel(newModel)\"\n                [disabled]=\"!modelEntryForm.form.valid\"\n                >Save changes</button>\n                \n\n              <button type=\"button\" \n                      class=\"btn btn-default\" \n                      data-dismiss=\"modal\"\n                      (click)=\"cancelAddEdit()\"\n                      >Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/models/models.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_service__ = __webpack_require__("../../../../../src/app/models/models.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brands_brands_service__ = __webpack_require__("../../../../../src/app/brands/brands.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__equipments_equipments_service__ = __webpack_require__("../../../../../src/app/equipments/equipments.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModelsComponent = (function () {
    function ModelsComponent(modelsService, toastr, brandsService, equipmentsService) {
        this.modelsService = modelsService;
        this.toastr = toastr;
        this.brandsService = brandsService;
        this.equipmentsService = equipmentsService;
        this.modelForm = false;
        this.showDetails = false;
        this.newModel = {};
        this.newModelx = {};
    }
    ModelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchModels();
        this.brandsService.fetchBrands().subscribe(function (data) { return _this.brands = data; });
        this.equipmentsService.fetchEquipments().subscribe(function (data) { return _this.equipments = data; });
    };
    ModelsComponent.prototype.fetchModels = function () {
        var _this = this;
        this.modelsService.fetchModels().subscribe(function (data) {
            return _this.models = data;
        });
    };
    ModelsComponent.prototype.showModelDetails = function (model) {
        if (!model) {
            this.modelForm = false;
            return;
        }
        this.modelForm = true;
        this.isNewForm = false;
        this.newModel = model;
        this.newModel.brandId = model.brandId['_id'];
        this.newModel.equipmentId = model.equipmentId['_id'];
        this.showDetails = true;
    };
    ModelsComponent.prototype.showEditModelForm = function (model) {
        console.log(model);
        if (!model) {
            this.modelForm = false;
            return;
        }
        this.modelForm = true;
        this.isNewForm = false;
        this.newModel = model;
        this.newModel.brandId = model.brandId['_id'];
        this.newModel.equipmentId = model.equipmentId['_id'];
        this.showDetails = false;
    };
    ModelsComponent.prototype.showAddModelForm = function () {
        //resets form if edited Model
        console.log(this.models.length);
        if (this.models.length) {
            this.newModel = {};
        }
        this.modelForm = true;
        this.isNewForm = true;
        this.showDetails = false;
    };
    ModelsComponent.prototype.saveModel = function (model) {
        var _this = this;
        console.log(model);
        this.sendModel = {
            _id: model._id,
            model_Name: model.model_Name,
            model_Description: model.model_Description,
            brandId: model.brandId,
            equipmentId: model.equipmentId
        };
        if (this.isNewForm) {
            //add a new Model
            this.modelsService.addModel(this.sendModel).subscribe(function (data) {
                _this.fetchModels();
            });
            this.showAddSuccess();
        }
        else {
            //update an existing Model
            this.modelsService.updateModel(this.sendModel).toPromise()
                .then(function (data) {
                //console.log(data);
                _this.fetchModels();
            });
            console.log(model);
            this.showEditSuccess();
        }
        this.modelForm = false;
    };
    ModelsComponent.prototype.removeModel = function (id) {
        var _this = this;
        if (confirm("Are you sure?")) {
            this.modelsService.removeModel(id).toPromise()
                .then(function () {
                _this.fetchModels();
            });
            this.showDeleteSuccess();
        }
    };
    ModelsComponent.prototype.cancelAddEdit = function () {
        this.modelForm = false;
        this.fetchModels();
    };
    ModelsComponent.prototype.showAddSuccess = function () {
        this.toastr.success('Model Added Successfully!!');
    };
    ModelsComponent.prototype.showEditSuccess = function () {
        this.toastr.success('Model Edited Successfully!!');
    };
    ModelsComponent.prototype.showDeleteSuccess = function () {
        this.toastr.success('Model Deleted Successfully!!');
    };
    ModelsComponent.prototype.getBrandName = function (id) {
        for (var _i = 0, _a = this.brands; _i < _a.length; _i++) {
            var brand = _a[_i];
            if (brand._id == id) {
                return brand.brandName;
            }
        }
        return "Not Available.";
    };
    ModelsComponent.prototype.getEquipmentName = function (id) {
        for (var _i = 0, _a = this.equipments; _i < _a.length; _i++) {
            var equipment = _a[_i];
            if (equipment._id == id) {
                return equipment.equipmentName;
            }
        }
        return "Not Available.";
    };
    ModelsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-models',
            template: __webpack_require__("../../../../../src/app/models/models.component.html"),
            styles: [__webpack_require__("../../../../../src/app/models/models.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__models_service__["a" /* ModelsService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__brands_brands_service__["a" /* BrandsService */],
            __WEBPACK_IMPORTED_MODULE_4__equipments_equipments_service__["a" /* EquipmentsService */]])
    ], ModelsComponent);
    return ModelsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/models.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModelsService = (function () {
    function ModelsService(http) {
        this.http = http;
    }
    ModelsService.prototype.fetchModels = function () {
        //return this.http.get('http://159.89.170.175:3000/api/models?filter[include]=brand&filter[include]=equipment')
        return this.http.get('http://159.89.170.175:3000/api/models')
            .map(function (response) { return response.json(); });
    };
    ModelsService.prototype.fetchModelsOnly = function () {
        return this.http.get('http://159.89.170.175:3000/api/models')
            .map(function (response) { return response.json(); });
    };
    ModelsService.prototype.addModel = function (model) {
        return this.http.post("http://159.89.170.175:3000/api/models", model);
    };
    ModelsService.prototype.removeModel = function (id) {
        var url = "http://159.89.170.175:3000/api/models" + "/" + id;
        return this.http.delete(url);
    };
    ModelsService.prototype.updateModel = function (model) {
        var url = "http://159.89.170.175:3000/api/models" + "/" + model._id;
        return this.http.put(url, model);
    };
    ModelsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ModelsService);
    return ModelsService;
}());



/***/ }),

/***/ "../../../../../src/app/my-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyDataService = (function () {
    function MyDataService(http) {
        this.http = http;
    }
    MyDataService.prototype.fetchData = function () {
        /*     return this.http.get('http://localhost:3000/api/items')
              .map(
                (response) => response.json() )
                ; */
    };
    MyDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], MyDataService);
    return MyDataService;
}());



/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container\">\n\n  <div class=\"row\">\n\n      <div class=\"col-md-12\">\n          <ul class=\"nav nav-pills\">\n              <li role=\"presentation\"><a routerLink=\"/dashboard\">Repairs</a></li>\n              <li role=\"presentation\"><a routerLink=\"/customers\">Customers</a></li>\n              <li role=\"presentation\" class=\"dropdown\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Manage <span class=\"caret\"></span>\n                </a>\n                <ul class=\"dropdown-menu\">\n                  <li role=\"presentation\"><a routerLink=\"/states\">States</a></li>\n                  <li role=\"presentation\"><a routerLink=\"/equipments\">Equipment Type</a></li>\n                  <li role=\"presentation\"><a routerLink=\"/brands\">Brand</a></li>\n                  <li role=\"presentation\"><a routerLink=\"/models\">Model</a></li>\n                  <li role=\"presentation\"><a routerLink=\"/employees\">Employees</a></li>\n                  \n                </ul>\n              </li>\n              <li role=\"presentation\"><a routerLink=\"/\">LogOut</a></li>\n            </ul>\n\n      </div>\n      \n    </div>\n\n  </div>"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, input) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el) {
                return el.customerId.name.toLowerCase().indexOf(input) > -1;
            });
        }
        return value;
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'FilterPipe',
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/repairs/repairs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/repairs/repairs.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navigation>\n</app-navigation>\n\n<div class=\"container-fluid\">\n  <div class=\"col-md-12\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <h2>Repairs List</h2>\n        \n      </div>\n      <div class=\"col-md-8 searchBox\"><input type=\"text\" [(ngModel)]=\"queryString\" id=\"search\" placeholder=\"Search Customer\"></div>\n      <div class=\"col-md-2 addButton-right\">\n        <button class=\"btn btn-primary\" (click)=\"showAddRepairForm()\" data-toggle=\"modal\" data-target=\"#addRepairModal\">\n          <i class=\"fa fa-plus\"></i>&nbsp;Repair\n        </button>\n      </div>\n    </div>\n\n\n    <table class=\"table table-bordered table-striped table-hover\">\n      <thead>\n        <tr>\n          <th class=\"\">S.N</th>\n          <th class=\"\">Bill No</th>\n          <th class=\"\">Date Received</th>\n          <th class=\"\">Customer</th>\n          <th class=\"\">Company</th>\n          <th class=\"\">Model</th>\n          <th class=\"status\">Status</th>\n          <th class=\"\">Assigned To</th>\n          <th class=\"\">Staff Note</th>\n          <th class=\"\">Problem Reported</th>\n          <th class=\"\">&nbsp;</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let repair of repairs  | FilterPipe: queryString | paginate:{ itemsPerPage: 5, currentPage: p }; let ind=index\">\n          <td>{{ind+1}}</td>\n          <td>{{repair.billNo}}</td>\n          <td>{{repair.dateReceived | date}}</td>   \n          <td>{{repair.customerId.name}}</td> \n          <td>{{repair.customerId.company}}</td>\n          <td>{{repair.modelId.model_Name}}</td>\n          <td>{{repair.stateId.stateName}}</td>\n          <td>{{repair.employeeId.employeeName}}</td>\n\n          <td>{{repair.note}}</td>\n          <td>{{repair.problem}}</td>\n          \n          <td>\n            <button class=\"btn btn-success\" (click)=\"showRepairDetails(repair)\" data-toggle=\"modal\" data-target=\"#addRepairModal\">\n              <i class=\"fa fa-eye\"></i>\n            </button>\n            <button class=\"btn btn-info\" (click)=\"showEditRepairForm(repair)\" data-toggle=\"modal\" data-target=\"#addRepairModal\">\n              <i class=\"fa fa-edit\"></i>\n            </button>\n            <button class=\"btn btn-danger\" (click)=\"removeRepair(repair)\">\n              <i class=\"fa fa-minus\"></i>\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\n  </div>\n</div>\n\n<div class=\"container\">\n    <form *ngIf=\"repairForm\" #repairEntryForm=\"ngForm\" role=\"form\">\n      <div class=\"modal fade\" id=\"addRepairModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addRepairModal\" aria-hidden=\"true\"\n        data-backdrop=\"static\" data-keyboard=\"false\">\n        <div class=\"modal-dialog modal-lg\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" (click)=\"cancelAddEdit()\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n              <h4 class=\"modal-title\" id=\"myModalLabel\" *ngIf=\"!showDetails\">Add/Edit Repair</h4>\n              <h4 class=\"modal-title\" id=\"myModalLabel\" *ngIf=\"showDetails\">Repair Details</h4>\n            </div>\n            <div class=\"modal-body\">\n              <!-- START -->\n    \n                \n                      <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                          <div>\n                              <div class=\"form-group\">\n                                <label for=\"customers\">Select a Customer</label>\n                                <a data-dismiss=\"modal\" (click)=\"createNewCustomerLinkClicked()\" \n                                    class=\"createNewCustomerLink\">Create New</a>\n                                <select class=\"form-control\" name=\"customers\" \n                                        [(ngModel)]=\"newRepair.customerId\">\n                                  <option *ngFor=\"let cust of customers\" \n                                          value=\"{{cust._id}}\">{{cust.name}}({{cust.company}}-{{cust.address}})</option>\n                                </select>\n                              </div>\n\n                              <div class=\"form-group\" [class.has-success]=\"billNo.dirty && billNo.valid\" \n                                    [class.has-error]=\"(billNo.touched) && !(billNo.valid)\">\n                                  <label for=\"billNo\">Bill No *</label>\n                                  <input type=\"text\" class=\"form-control\" \n                                        id=\"billNo\" name=\"billNo\" id=\"billNo\" \n                                        #billNo=\"ngModel\" \n                                        [(ngModel)]=\"newRepair.billNo\"\n                                    required>\n                                  <div *ngIf=\"(billNo.dirty||billNo.touched) && !(billNo.valid)\" class=\"alert alert-danger\">\n                                    Name is required!\n                                  </div>\n                              </div>\n\n                              <div class=\"form-group\">\n                                <label for=\"states\">Repair Status</label>\n                                <select class=\"form-control\" name=\"states\" [(ngModel)]=\"newRepair.stateId\">\n                                  <option *ngFor=\"let state of states;let i=index\" \n                                          value=\"{{state._id}}\"\n                                          >{{state.stateName}}</option>\n                                </select>\n                              </div>\n\n                              <div class=\"form-group\">\n                                <label for=\"problem\">Problem</label>\n                                <textarea class=\"form-control\" id=\"problem\" \n                                          name=\"problem\" \n                                          [(ngModel)]=\"newRepair.problem\" rows=\"4\"></textarea>\n                              </div>\n                              \n                              <div class=\"form-group\">\n                                <label for=\"estimatedPrice\">Estimated Cost</label>\n                                <input type=\"text\" class=\"form-control\" \n                                      id=\"estimatedPrice\" name=\"estimatedPrice\" \n                                      [(ngModel)]=\"newRepair.estimatedPrice\">\n                              </div>\n\n                              <div class=\"form-group\">\n                                <label for=\"chargedPrice\">Customer Charged</label>\n                                <input type=\"text\" class=\"form-control\" \n                                      id=\"chargedPrice\" name=\"chargedPrice\" \n                                      [(ngModel)]=\"newRepair.chargedPrice\">\n                              </div>\n\n                          </div>\n                        </div>\n                        <div class=\"col-sm-8\">\n                          <div>\n<!--                               <div class=\"form-group col-sm-6\">\n                                <label for=\"dateReceived\">Date Received</label>\n                                <input class=\"form-control\" \n                                        type=\"date\" name=\"dateReceived\" \n                                        id=\"dateReceived\" \n                                        [(ngModel)]=\"newRepair.dateReceived\"\n                                        >\n                              </div>  -->\n                              <div class=\"form-group col-sm-6\">\n                                  <label for=\"dateReceived\">Date Received</label>\n                                          <owl-date-time  [(ngModel)]=\"newRepair.dateReceived\"\n                                          [dateFormat]=\"'YYYY-MM-DD'\"\n                                          [type]=\"'calendar'\" [placeHolder]=\"'yyyy/mm/dd'\"\n                                          name=\"dateReceived\" \n                                          [inputId]=\"'dateReceived'\"></owl-date-time>\n                                </div>\n                                <div class=\"form-group col-sm-6\">\n                                    <label for=\"dateReturned\">Date Returned</label>\n                                            <owl-date-time  [(ngModel)]=\"newRepair.dateReturned\"\n                                            [dateFormat]=\"'YYYY-MM-DD'\"\n                                            [type]=\"'calendar'\" [placeHolder]=\"'yyyy/mm/dd'\"\n                                            name=\"dateReturned\" \n                                            [inputId]=\"'dateReturned'\"></owl-date-time>\n                                  </div>\n\n                                  <div class=\"form-group col-sm-4 top-buffer\">\n                                    <label for=\"equipments\">Equipment Type</label>\n                                    <select class=\"form-control\" \n                                            name=\"equipments\" \n                                            [(ngModel)]=\"newRepair.equipmentId\"\n                                            >\n                                      <option *ngFor=\"let equipment of equipments\" value=\"{{equipment._id}}\">{{equipment.equipmentName}}</option>\n                                    </select>\n                                  </div>\n                                  <div class=\"form-group col-sm-4 top-buffer\"\n                                        >\n                                    <label for=\"brands\">Brand *</label>\n                                    <select class=\"form-control\" name=\"brands\" \n                                            [(ngModel)]=\"newRepair.brandId\"\n                                            (change)=\"onSelect($event.target.value)\"\n                                            required>\n                                            <!-- <option value=\"0\">--Select--</option> -->\n                                      <option *ngFor=\"let brand of brands\" value=\"{{brand._id}}\">{{brand.brandName}}</option>\n                                    </select>\n                                  </div>\n                                  <div class=\"form-group col-sm-4 top-buffer\">\n                                    <label for=\"models\">Model *</label>\n                                    \n                                    <select class=\"form-control\" name=\"models\" \n                                            [(ngModel)]=\"newRepair.modelId\"\n                                            >\n                                           \n                                      <!-- <option *ngIf='newRepair.brandId == 0' value=\"0\">--Select--</option> -->\n                                      <option *ngFor=\"let model of models\" value=\"{{model._id}}\">{{model.model_Name}}</option>\n                                    </select>\n                                  </div>\n                                  <div class=\"form-group col-sm-12\">\n                                    <label for=\"serialNo\">Serial No / IMEI</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"serialNo\" name=\"serialNo\" [(ngModel)]=\"newRepair.serialNo\">\n                                  </div>\n                                  <div class=\"form-group col-sm-12\">\n                                    <label for=\"accessories\">Accessories Delivered</label>\n                                    <br>\n                                    <div class=\"checkbox-inline\">\n                                      <label class=\"\"><input type=\"checkbox\" value=\"\" name=\"cover\"\n                                                            [(ngModel)]=\"newDetail.cover\"\n                                                            >Cover</label>\n                                    </div>\n                                    <div class=\"checkbox-inline\">\n                                      <label><input type=\"checkbox\" \n                                                    value=\"\"\n                                                    name=\"battery\"\n                                                    [(ngModel)]=\"newDetail.battery\">\n                                                    Battery</label>\n                                    </div>\n                                    <div class=\"checkbox-inline\">\n                                      <label><input type=\"checkbox\" \n                                                    value=\"\"\n                                                    name=\"filter\"\n                                                    [(ngModel)]=\"newDetail.filter\">Filter</label>\n                                    </div>\n                                    <div class=\"checkbox-inline\">\n                                      <label><input type=\"checkbox\" value=\"\"\n                                                    name=\"fcap\"\n                                                    [(ngModel)]=\"newDetail.fcap\">F-Cap</label>\n                                    </div>\n                                    <div class=\"checkbox-inline\">\n                                      <label><input type=\"checkbox\" \n                                                    value=\"\"\n                                                    name=\"rcap\"\n                                                    [(ngModel)]=\"newDetail.rcap\">R-Cap</label>\n                                    </div>\n\n                                  </div>\n\n                                  <div class=\"form-group col-sm-12\">\n                                    \n                                    <div class=\"checkbox-inline\">\n                                      <label><input type=\"checkbox\" value=\"\"\n                                                    name=\"bcap\"\n                                                    [(ngModel)]=\"newDetail.bcap\">B-Cap</label>\n                                    </div>\n                                    <div class=\"checkbox-inline\">\n                                      <label><input type=\"checkbox\" value=\"\"\n                                                     name=\"strap\"\n                                                      [(ngModel)]=\"newDetail.strap\">Strap</label>\n                                    </div>\n                                    <div class=\"checkbox-inline\">\n                                      <label><input type=\"checkbox\" value=\"\"\n                                                    name=\"card\"\n                                                    [(ngModel)]=\"newDetail.card\">Card</label>\n                                    </div>\n                                    <div class=\"checkbox-inline\">\n                                      <label><input type=\"checkbox\" value=\"\"\n                                                     name=\"eyePiece\"\n                                                    [(ngModel)]=\"newDetail.eyePiece\">Eye Piece</label>\n                                    </div>\n                                    <div class=\"checkbox-inline\">\n                                      <label><input type=\"checkbox\" value=\"\"\n                                                     name=\"hood\"\n                                                    [(ngModel)]=\"newDetail.hood\">Hood</label>\n                                    </div>\n                                  </div>\n                                \n                                  <div class=\"form-group col-sm-6\">\n                                    <label for=\"note\">Staff Note</label>\n                                    <textarea class=\"form-control\" id=\"note\" \n                                              name=\"note\" \n                                              [(ngModel)]=\"newRepair.note\" rows=\"4\"></textarea>\n                                  </div>\n                                  <div class=\"form-group col-sm-6\">\n                                    <label for=\"description\">Repair Description</label>\n                                    <textarea class=\"form-control\" id=\"description\" \n                                              name=\"description\" \n                                              [(ngModel)]=\"newRepair.description\" rows=\"4\"></textarea>\n                                  </div>\n                                  <div class=\"form-group col-sm-6 top-buffer\">\n                                    <label for=\"employees\">Assigned To</label>\n                                    <select class=\"form-control\" name=\"employees\" [(ngModel)]=\"newRepair.employeeId\">\n                                      <option *ngFor=\"let employee of employees\" value=\"{{employee._id}}\">{{employee.employeeName}}</option>\n                                    </select>\n                                  </div>\n\n                                 \n                          </div>\n                        </div>\n                      </div>\n                \n    \n              <!-- FIN -->\n             \n            </div> \n            <div class=\"modal-footer\" *ngIf=\"!showDetails\">\n                <p style=\"float:left;\">*Bill No, *Brand and *Model is Required!!</p>\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"saveRepair(newRepair,newDetail)\" [disabled]=\"!repairEntryForm.form.valid\">Save changes</button>\n    \n    \n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"cancelAddEdit()\">Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n\n    </div>\n\n    "

/***/ }),

/***/ "../../../../../src/app/repairs/repairs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepairsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repairs_service__ = __webpack_require__("../../../../../src/app/repairs/repairs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customers_customers_service__ = __webpack_require__("../../../../../src/app/customers/customers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_states_service__ = __webpack_require__("../../../../../src/app/states/states.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__equipments_equipments_service__ = __webpack_require__("../../../../../src/app/equipments/equipments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__brands_brands_service__ = __webpack_require__("../../../../../src/app/brands/brands.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_models_service__ = __webpack_require__("../../../../../src/app/models/models.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__employees_employees_service__ = __webpack_require__("../../../../../src/app/employees/employees.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__details_details_service__ = __webpack_require__("../../../../../src/app/details/details.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RepairsComponent = (function () {
    function RepairsComponent(repairsService, detailsService, customersService, statesService, equipmentsService, brandsService, modelsService, employeesService, toastr, router) {
        this.repairsService = repairsService;
        this.detailsService = detailsService;
        this.customersService = customersService;
        this.statesService = statesService;
        this.equipmentsService = equipmentsService;
        this.brandsService = brandsService;
        this.modelsService = modelsService;
        this.employeesService = employeesService;
        this.toastr = toastr;
        this.router = router;
        this.repairForm = false;
        this.showDetails = false;
        this.newRepair = {};
        this.newDetail = {};
    }
    RepairsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchRepairs();
        this.customersService.fetchCustomers().subscribe(function (data) { return _this.customers = data; });
        this.statesService.fetchStates().subscribe(function (data) { return _this.states = data; });
        this.equipmentsService.fetchEquipments().subscribe(function (data) { return _this.equipments = data; });
        this.brandsService.fetchBrands().subscribe(function (data) { return _this.brands = data; });
        this.modelsService.fetchModelsOnly().subscribe(function (data) { return _this.modelsx = data; });
        this.employeesService.fetchEmployees().subscribe(function (data) { return _this.employees = data; });
        //this.modelsService.fetchModelsByBrandId()
    };
    RepairsComponent.prototype.fetchRepairs = function () {
        var _this = this;
        this.repairsService.fetchRepairs().subscribe(function (data) {
            _this.repairs = data;
            _this.repairs.sort(_this.sortByReceivedDate);
        });
        this.detailsService.fetchDetails().subscribe(function (data) {
            _this.details = data;
        });
    };
    RepairsComponent.prototype.showRepairDetails = function (repair) {
        var _this = this;
        this.loadRepairSyncData(repair);
        this.detailsService.fetchDetailsById(repair.detailId)
            .subscribe(function (data) {
            _this.paramNew = data;
            //console.log(this.paramNew);
            _this.loadDetailSyncData(_this.paramNew, repair.detailId);
            _this.newDetail = _this.sendDetail;
        });
        if (!repair) {
            this.repairForm = false;
            return;
        }
        this.repairForm = true;
        this.isNewForm = false;
        this.newRepair = this.sendRepair;
        this.showDetails = true;
    };
    RepairsComponent.prototype.showEditRepairForm = function (repair) {
        var _this = this;
        //console.log(repair);
        this.loadRepairSyncData(repair);
        this.detailsService.fetchDetailsById(repair.detailId)
            .subscribe(function (data) {
            _this.paramNew = data;
            //console.log(this.paramNew);
            _this.loadDetailSyncData(_this.paramNew, repair.detailId);
            _this.newDetail = _this.sendDetail;
        });
        if (!repair) {
            this.repairForm = false;
            return;
        }
        this.repairForm = true;
        this.isNewForm = false;
        this.newRepair = this.sendRepair;
        this.showDetails = false;
    };
    RepairsComponent.prototype.showAddRepairForm = function () {
        //resets form if edited Repair
        if (this.repairs.length) {
            this.newRepair = {};
            this.newRepair.stateId = this.states[0]._id;
            this.newRepair.equipmentId = this.equipments[0]._id;
            this.newRepair.employeeId = this.employees[0]._id;
            this.newRepair.customerId = this.customers[0]._id;
            this.newDetail = {};
        }
        this.repairForm = true;
        this.isNewForm = true;
        this.showDetails = false;
    };
    RepairsComponent.prototype.saveRepair = function (repair, detail) {
        var _this = this;
        this.sendDetailP = {
            _id: detail._id,
            cover: detail.cover,
            battery: detail.battery,
            filter: detail.filter,
            fcap: detail.fcap,
            rcap: detail.rcap,
            bcap: detail.bcap,
            strap: detail.strap,
            card: detail.card,
            eyePiece: detail.eyePiece,
            hood: detail.hood,
        };
        if (this.isNewForm) {
            //add new detail and than repair
            this.detailsService.addDetail(this.sendDetailP).subscribe(function (data) {
                _this.addedData = data;
                _this.callRepair(repair, _this.addedData._id);
            });
            this.showAddSuccess();
        }
        else {
            //update an existing Repair
            this.callUpdateRepair(repair);
            this.callDetailUpdate(detail, detail._id);
            this.showEditSuccess();
        }
        this.repairForm = false;
    };
    RepairsComponent.prototype.removeRepair = function (repair) {
        var _this = this;
        if (confirm("Are you sure?")) {
            this.repairsService.removeRepair(repair._id)
                .toPromise()
                .then(function () {
                _this.detailsService.removeDetail(repair.detailId)
                    .toPromise()
                    .then(function () {
                    _this.fetchRepairs();
                });
            });
            this.showDeleteSuccess();
        }
    };
    RepairsComponent.prototype.cancelAddEdit = function () {
        this.repairForm = false;
        this.fetchRepairs();
    };
    RepairsComponent.prototype.showAddSuccess = function () {
        this.toastr.success('Repair Added Successfully!!');
    };
    RepairsComponent.prototype.showEditSuccess = function () {
        this.toastr.success('Repair Edited Successfully!!');
    };
    RepairsComponent.prototype.showDeleteSuccess = function () {
        this.toastr.success('Repair Deleted Successfully!!');
    };
    RepairsComponent.prototype.createNewCustomerLinkClicked = function () {
        this.router.navigate(['/customers']);
    };
    RepairsComponent.prototype.onSelect = function (brandId) {
        this.models = this.modelsx.filter(function (data) { return data.brandId['_id'] == brandId; });
    };
    RepairsComponent.prototype.loadRepairSyncData = function (repair) {
        console.log(repair);
        this.sendRepair = {
            _id: repair._id,
            billNo: repair.billNo,
            dateReceived: repair.dateReceived,
            dateReturned: repair.dateReturned,
            serialNo: repair.serialNo,
            problem: repair.problem,
            estimatedPrice: repair.estimatedPrice,
            chargedPrice: repair.chargedPrice,
            note: repair.note,
            description: repair.description,
            detailId: repair.detailId['_id'],
            customerId: repair.customerId['_id'],
            stateId: repair.stateId['_id'],
            brandId: repair.brandId['_id'],
            equipmentId: repair.equipmentId['_id'],
            modelId: repair.modelId['_id'],
            employeeId: repair.employeeId['_id']
        };
        this.onSelect(this.sendRepair.brandId);
    };
    RepairsComponent.prototype.loadDetailSyncData = function (detail, id) {
        console.log(detail);
        this.sendDetail = {
            _id: id,
            cover: detail.cover,
            battery: detail.battery,
            filter: detail.filter,
            fcap: detail.fcap,
            rcap: detail.rcap,
            bcap: detail.bcap,
            strap: detail.strap,
            card: detail.card,
            eyePiece: detail.eyePiece,
            hood: detail.hood,
        };
    };
    RepairsComponent.prototype.callRepair = function (repair, id) {
        var _this = this;
        this.sendRepairP = {
            _id: repair._id,
            billNo: repair.billNo,
            dateReceived: repair.dateReceived,
            dateReturned: repair.dateReturned,
            serialNo: repair.serialNo,
            problem: repair.problem,
            estimatedPrice: repair.estimatedPrice,
            chargedPrice: repair.chargedPrice,
            note: repair.note,
            description: repair.description,
            detailId: id,
            customerId: repair.customerId,
            stateId: repair.stateId,
            brandId: repair.brandId,
            equipmentId: repair.equipmentId,
            modelId: repair.modelId,
            employeeId: repair.employeeId
        };
        this.repairsService.addRepair(this.sendRepairP).subscribe(function (data) {
            _this.fetchRepairs();
        });
    };
    RepairsComponent.prototype.callUpdateRepair = function (repair) {
        this.sendRepairP = {
            _id: repair._id,
            billNo: repair.billNo,
            dateReceived: repair.dateReceived,
            dateReturned: repair.dateReturned,
            serialNo: repair.serialNo,
            problem: repair.problem,
            estimatedPrice: repair.estimatedPrice,
            chargedPrice: repair.chargedPrice,
            note: repair.note,
            description: repair.description,
            detailId: repair.detailId,
            customerId: repair.customerId,
            stateId: repair.stateId,
            brandId: repair.brandId,
            equipmentId: repair.equipmentId,
            modelId: repair.modelId,
            employeeId: repair.employeeId
        };
        this.repairsService.updateRepair(this.sendRepairP).subscribe(function (data) {
            console.log(data);
        });
    };
    RepairsComponent.prototype.callDetailUpdate = function (detail, id) {
        var _this = this;
        console.log(detail);
        this.sendDetailP = {
            _id: id,
            cover: detail.cover,
            battery: detail.battery,
            filter: detail.filter,
            fcap: detail.fcap,
            rcap: detail.rcap,
            bcap: detail.bcap,
            strap: detail.strap,
            card: detail.card,
            eyePiece: detail.eyePiece,
            hood: detail.hood,
        };
        console.log(this.sendDetailP);
        this.detailsService.updateDetail(this.sendDetailP).subscribe(function (data) {
            console.log(data);
            _this.fetchRepairs();
        });
    };
    RepairsComponent.prototype.sortByReceivedDate = function (a, b) {
        if (a.billNo.valueOf() > b.billNo.valueOf()) {
            return -1;
        }
        else if (a.billNo.valueOf() < b.billNo.valueOf()) {
            return 1;
        }
        else {
            return 0;
        }
    };
    RepairsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-repairs',
            template: __webpack_require__("../../../../../src/app/repairs/repairs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/repairs/repairs.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__repairs_service__["a" /* RepairsService */],
            __WEBPACK_IMPORTED_MODULE_10__details_details_service__["a" /* DetailsService */],
            __WEBPACK_IMPORTED_MODULE_2__customers_customers_service__["a" /* CustomersService */],
            __WEBPACK_IMPORTED_MODULE_3__states_states_service__["a" /* StatesService */],
            __WEBPACK_IMPORTED_MODULE_4__equipments_equipments_service__["a" /* EquipmentsService */],
            __WEBPACK_IMPORTED_MODULE_5__brands_brands_service__["a" /* BrandsService */],
            __WEBPACK_IMPORTED_MODULE_6__models_models_service__["a" /* ModelsService */],
            __WEBPACK_IMPORTED_MODULE_7__employees_employees_service__["a" /* EmployeesService */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* Router */]])
    ], RepairsComponent);
    return RepairsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/repairs/repairs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepairsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RepairsService = (function () {
    function RepairsService(http) {
        this.http = http;
    }
    RepairsService.prototype.fetchRepairs = function () {
        return this.http.get("http://159.89.170.175:3000/api/repairs")
            .map(function (response) { return response.json(); });
    };
    RepairsService.prototype.addRepair = function (repair) {
        return this.http.post("http://159.89.170.175:3000/api/repairs", repair)
            .map(function (response) { return response.json(); });
    };
    RepairsService.prototype.removeRepair = function (id) {
        var url = "http://159.89.170.175:3000/api/repairs" + "/" + id;
        return this.http.delete(url);
    };
    RepairsService.prototype.updateRepair = function (repair) {
        var url = "http://159.89.170.175:3000/api/repairs" + "/" + repair._id;
        return this.http.put(url, repair);
    };
    RepairsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], RepairsService);
    return RepairsService;
}());



/***/ }),

/***/ "../../../../../src/app/states/states.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/states/states.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navigation></app-navigation>\n\n<div class=\"container\">\n  <div class=\"col-md-12\">\n    <div class=\"row\">\n      <div class=\"col-md-10\"><h2>States List</h2></div>\n      <div class=\"col-md-2 addButton-right\">    \n        <button class=\"btn btn-primary\"\n        (click)=\"showAddStateForm()\"\n        data-toggle=\"modal\" \n        data-target=\"#addStateModal\">\n    <i class=\"fa fa-plus\"></i>&nbsp;State\n    </button></div>\n    </div>\n    \n\n    <table class=\"table table-bordered table-striped table-hover\">\n      <thead>\n        <tr>\n          <th class=\"text-center\">S.N</th>\n          <th class=\"text-center\">State Name</th>\n          <th class=\"text-center\">State Description</th>\n          \n          <th class=\"text-center\">&nbsp;</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor = \"let state of states;let ind=index\">\n          <td>{{ind+1}}</td>\n          <td>{{state.stateName}}</td>\n          <td>{{state.stateDescription}}</td>\n          \n          <td>\n            <button class=\"btn btn-success\"\n              (click)=\"showStateDetails(state)\"\n              data-toggle=\"modal\" \n            data-target=\"#addStateModal\">\n              <i class=\"fa fa-eye\"></i>\n            </button>\n            <button class=\"btn btn-info\"\n                    (click)=\"showEditStateForm(state)\"\n                    data-toggle=\"modal\" \n                  data-target=\"#addStateModal\">\n              <i class=\"fa fa-edit\"></i>\n            </button>\n            <button class=\"btn btn-danger\"\n                    (click)=\"removeState(state._id)\">\n                <i class=\"fa fa-minus\"></i>\n              </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <form *ngIf=\"stateForm\" #stateEntryForm=\"ngForm\">\n      <div class=\"modal fade\" \n            id=\"addStateModal\" \n            tabindex=\"-1\" role=\"dialog\" \n            aria-labelledby=\"addStateModal\" \n            aria-hidden=\"true\"\n            data-backdrop=\"static\" \n            data-keyboard=\"false\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" \n                      class=\"close\" \n                      (click)=\"cancelAddEdit()\"\n                      data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n              <h4 class=\"modal-title\" id=\"myModalLabel\" *ngIf=\"!showDetails\">Add/Edit State</h4>\n              <h4 class=\"modal-title\" id=\"myModalLabel\" *ngIf=\"showDetails\">State Details</h4>\n            </div>\n            <div class=\"modal-body\">\n              \n                \n\n                <div class=\"form-group\" \n                [class.has-success]=\"stateName.dirty && stateName.valid\"\n                [class.has-error]=\"(stateName.touched) && !(stateName.valid)\">\n\n\n                <label for=\"stateName\">State Name *</label>\n                  <input type=\"text\" \n                          class=\"form-control\"\n                          id=\"stateName\"\n                          name=\"stateName\"\n                          id=\"stateName\"\n                          #stateName=\"ngModel\"\n                          [(ngModel)]=\"newState.stateName\"\n                          required   \n                          >\n                  <div *ngIf=\"(stateName.dirty||stateName.touched) && !(stateName.valid)\" class=\"alert alert-danger\">\n                      Name is required!\n                  </div>\n\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"stateDesc\">Description</label>\n                    <textarea\n                          class=\"form-control\"\n                          id=\"stateDesc\"\n                          name=\"stateDesc\"\n                          [(ngModel)]=\"newState.stateDescription\"\n                          rows=\"3\"\n                          ></textarea>\n                 </div>\n   \n            </div>\n            <div class=\"modal-footer\" *ngIf=\"!showDetails\" >\n\n                <button type=\"button\" \n                class=\"btn btn-primary\"\n                data-dismiss=\"modal\" \n                (click)=\"saveState(newState)\"\n                [disabled]=\"!stateEntryForm.form.valid\"\n                >Save changes</button>\n                \n\n              <button type=\"button\" \n                      class=\"btn btn-default\" \n                      data-dismiss=\"modal\"\n                      (click)=\"cancelAddEdit()\"\n                      >Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/states/states.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_service__ = __webpack_require__("../../../../../src/app/states/states.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatesComponent = (function () {
    function StatesComponent(statesService, toastr) {
        this.statesService = statesService;
        this.toastr = toastr;
        this.stateForm = false;
        this.showDetails = false;
        this.newState = {};
    }
    StatesComponent.prototype.ngOnInit = function () {
        this.fetchStates();
    };
    StatesComponent.prototype.fetchStates = function () {
        var _this = this;
        this.statesService.fetchStates().subscribe(function (data) { return _this.states = data; });
    };
    StatesComponent.prototype.showStateDetails = function (State) {
        if (!State) {
            this.stateForm = false;
            return;
        }
        this.stateForm = true;
        this.isNewForm = false;
        this.newState = State;
        this.showDetails = true;
    };
    StatesComponent.prototype.showEditStateForm = function (State) {
        if (!State) {
            this.stateForm = false;
            return;
        }
        this.stateForm = true;
        this.isNewForm = false;
        this.newState = State;
        this.showDetails = false;
    };
    StatesComponent.prototype.showAddStateForm = function () {
        //resets form if edited State
        console.log(this.states.length);
        if (this.states.length) {
            this.newState = {};
        }
        this.stateForm = true;
        this.isNewForm = true;
        this.showDetails = false;
    };
    StatesComponent.prototype.saveState = function (State) {
        var _this = this;
        if (this.isNewForm) {
            //add a new State
            this.statesService.addState(State).subscribe(function (data) {
                console.log(data);
                _this.fetchStates();
            });
            this.showAddSuccess();
        }
        else {
            //update an existing State
            /*         this.statesService.updateState(State).toPromise()
                    .then( () => {
                      this.fetchStates();
                    }
                    ); */
            this.statesService.updateState(State).toPromise()
                .then(function () {
                _this.fetchStates();
            });
            this.showEditSuccess();
        }
        this.stateForm = false;
    };
    StatesComponent.prototype.removeState = function (id) {
        var _this = this;
        if (confirm("Are you sure?")) {
            this.statesService.removeState(id).toPromise()
                .then(function () {
                _this.fetchStates();
            });
            this.showDeleteSuccess();
        }
    };
    StatesComponent.prototype.cancelAddEdit = function () {
        this.stateForm = false;
        this.fetchStates();
    };
    StatesComponent.prototype.showAddSuccess = function () {
        this.toastr.success('State Added Successfully!!');
    };
    StatesComponent.prototype.showEditSuccess = function () {
        this.toastr.success('State Edited Successfully!!');
    };
    StatesComponent.prototype.showDeleteSuccess = function () {
        this.toastr.success('State Deleted Successfully!!');
    };
    StatesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-states',
            template: __webpack_require__("../../../../../src/app/states/states.component.html"),
            styles: [__webpack_require__("../../../../../src/app/states/states.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__states_service__["a" /* StatesService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], StatesComponent);
    return StatesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/states/states.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StatesService = (function () {
    function StatesService(http) {
        this.http = http;
    }
    StatesService.prototype.fetchStates = function () {
        return this.http.get('http://159.89.170.175:3000/api/states')
            .map(function (response) { return response.json(); });
    };
    StatesService.prototype.addState = function (state) {
        return this.http.post("http://159.89.170.175:3000/api/states", state);
    };
    StatesService.prototype.removeState = function (id) {
        var url = "http://159.89.170.175:3000/api/states" + "/" + id;
        return this.http.delete(url);
    };
    StatesService.prototype.updateState = function (state) {
        var url = "http://159.89.170.175:3000/api/states" + "/" + state._id;
        return this.http.put(url, state).map(function (success) { return success.status; });
    };
    StatesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], StatesService);
    return StatesService;
}());



/***/ }),

/***/ "../../../../../src/app/todo/todo/todo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  todo works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/todo/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoComponent = (function () {
    function TodoComponent() {
    }
    TodoComponent.prototype.ngOnInit = function () {
    };
    TodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__("../../../../../src/app/todo/todo/todo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/todo/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = (function () {
    function UserService() {
        this.isUserLoggedIn = false;
    }
    UserService.prototype.setUserLoggedIn = function () {
        this.isUserLoggedIn = true;
        this.username = 'admin';
    };
    UserService.prototype.getUserLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map