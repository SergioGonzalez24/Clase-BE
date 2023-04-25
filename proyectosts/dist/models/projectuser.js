'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class ProjectUser extends sequelize_1.Model {
        static associate(models) {
            // define association here
        }
    }
    ProjectUser.init({
        ProjectId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Project',
                key: 'id'
            }
        },
        UserId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'User',
                key: 'awsCognitoId'
            }
        },
        budget: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        sequelize,
        modelName: 'ProjectUser',
    });
    return ProjectUser;
};
//# sourceMappingURL=projectuser.js.map