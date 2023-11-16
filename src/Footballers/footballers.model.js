import { DataTypes } from "sequelize";
import { connection } from "../config/database.js";

export const Footballers = connection.define("footballers", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(15)
    },
    age: {
        type: DataTypes.SMALLINT
    },
    team: {
        type: DataTypes.STRING(15)
    }
}, {
    timestamps: false
})