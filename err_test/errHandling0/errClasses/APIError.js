"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.APIEroor = void 0;
var BaseError_1 = require("./BaseError");
var HttpStatusCode_1 = require("../static/HttpCode/HttpStatusCode");
var APIEroor = /** @class */ (function (_super) {
    __extends(APIEroor, _super);
    function APIEroor(name, httpCode, isOperational, description) {
        if (httpCode === void 0) { httpCode = HttpStatusCode_1.HttpStatusCode.INTERNAL_SERVER; }
        if (isOperational === void 0) { isOperational = true; }
        if (description === void 0) { description = 'this is an API error'; }
        return _super.call(this, name, httpCode, description, isOperational) || this;
    }
    return APIEroor;
}(BaseError_1.BaseError));
exports.APIEroor = APIEroor;
