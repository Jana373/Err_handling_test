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
exports.BaseError = void 0;
// all our custom error classes will extend the BaseError class
var BaseError = /** @class */ (function (_super) {
    __extends(BaseError, _super);
    function BaseError(name, httpCode, description, isOperational) {
        var _this = _super.call(this, description) || this;
        _this.name = name;
        _this.httpCode = httpCode;
        _this.isOperational = isOperational;
        // omit stack trace 
        Error.captureStackTrace(_this, BaseError);
        return _this;
    }
    return BaseError;
}(Error));
exports.BaseError = BaseError;
