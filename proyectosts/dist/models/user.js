'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoles = void 0;
const sequelize_1 = require("sequelize");
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["SUPERVISOR"] = "supervisor";
    UserRoles["AGENT"] = "agent";
    UserRoles["CUSTOMER"] = "customer";
})(UserRoles = exports.UserRoles || (exports.UserRoles = {}));
module.exports = (sequelize, DataTypes) => {
    class User extends sequelize_1.Model {
        static associate(models) {
            // define association here
            User.belongsToMany(models.Project, { through: 'ProjectUser' });
        }
    }
    User.init({
        awsCognitoId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: UserRoles.CUSTOMER
        }
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};
//# sourceMappingURL=user.js.map