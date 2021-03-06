const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Volunteers extends Model {}

Volunteers.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "event",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "volunteers",
  }
);

module.exports = Volunteers;
