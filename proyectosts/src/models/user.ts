'use strict';

import  { Model }  from 'sequelize';

interface UserAttributes {
  awsCognitoId: string;
  name: string;
  role: string;
  email: string;
}

export enum UserRoles {
  ADMIN = 'admin',
  SUPERVISOR = 'supervisor',
  AGENT = 'agent',
  CUSTOMER = 'customer'
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    awsCognitoId!: string;
    name!: string;
    role!: string;
    email!: string;

    static associate(models:any) {
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
    role: {
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