"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractController = void 0;
const express_1 = require("express");
// Middleware
// Services
class AbstractController {
    get prefix() { return this._prefix; } // Getter
    get router() { return this._router; } // Getter
    constructor(prefix) {
        // Se utiliza "_" para indicar que es un miembro privado
        this._router = (0, express_1.Router)();
        this._prefix = prefix;
        this.initRoutes();
    }
}
exports.AbstractController = AbstractController;
exports.default = AbstractController;
//# sourceMappingURL=AbstractController.js.map