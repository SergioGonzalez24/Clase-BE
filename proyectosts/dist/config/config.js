"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
exports.default = {
    "development": {
        "username": _1.DB_USER,
        "password": _1.DB_PASSWORD,
        "database": _1.DB_NAME,
        "host": _1.DB_HOST,
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
};
//# sourceMappingURL=config.js.map