"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractController_1 = require("./AbstractController");
class UserController extends AbstractController_1.AbstractController {
    validateBody(type) {
        throw new Error("Method not implemented.");
    }
    // Método de clase
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new UserController('user');
        return this.instance;
    }
    initRoutes() {
        this.router.get('/readUser', this.getReadUser.bind(this));
        this.router.post('/createUser', this.postCreateUser.bind(this));
    }
    getReadUser(req, res) {
        res.status(200).send("servicio de lectura de usuarios");
    }
    postCreateUser(req, res) {
        res.status(200).send("servicio de creación de usuarios");
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map