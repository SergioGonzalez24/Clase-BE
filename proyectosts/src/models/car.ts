'use strict';

import { Model } from 'sequelize';

interface CarAttributes {
  awsCognitoId: string;
  brand: string;
  model: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Car extends Model<CarAttributes> implements CarAttributes {
    awsCognitoId!: string;
    brand!: string;
    model!: string;

    static associate(models:any) {
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