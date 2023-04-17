"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor(appInit) {
        this.app = (0, express_1.default)();
        this.port = appInit.port;
        this.env = appInit.env;
        this.loadControllers(appInit.controllers);
        this.loadMiddleware(appInit.middleware);
    }
    // Methods
    loadControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use(`/${controller.prefix}`, controller.router);
        });
    }
    loadMiddleware(middleware) {
        middleware.forEach((middleware) => {
            this.app.use(middleware);
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the @'http://localhost:${this.port}'`); //Con el arroba se convierte en un link en la consola
        });
    }
    init() {
        this.app.listen(this.port, () => {
            console.log(`Server::Running @'http://localhost:${this.port}'`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map