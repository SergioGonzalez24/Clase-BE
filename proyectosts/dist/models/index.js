'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("../config/config"));
const Sequelize = require('sequelize');
const process = require('process');
const basename = path_1.default.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const db = {};
let sequelize;
if (env === 'development') {
    sequelize = new Sequelize(config_1.default.development.database, config_1.default.development.username, config_1.default.development.password, {
        host: config_1.default.development.host,
        define: {
            timestamps: false,
            freezeTableName: true
        },
        dialect: 'mysql'
    });
}
fs_1.default
    .readdirSync(__dirname)
    .filter(file => {
    return (file.indexOf('.') !== 0 &&
        file !== basename &&
        file.slice(-3) === '.js' &&
        file.indexOf('.test.js') === -1);
})
    .forEach(file => {
    const model = require(path_1.default.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
});
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
// module.exports = db;
exports.default = db;
//# sourceMappingURL=index.js.map