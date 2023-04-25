'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Car extends sequelize_1.Model {
        static associate(models) {
            // define association here
        }
    }
    Car.init({
        awsCognitoId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        brand: DataTypes.STRING,
        model: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Car',
    });
    return Car;
};
//# sourceMappingURL=car.js.map