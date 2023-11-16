// Import DB connection
import { connection } from "../config/database.js";

// Import Model
import { Footballers } from "./footballers.model.js";
import { QueryTypes } from "sequelize";

export const createFootballer = async (req,res) => {
    try {
        const newFootballerPayload = {
            name: req.body.name,
            age: req.body.age,
            team: req.body.team
        }

        await Footballers.create(newFootballerPayload);

        return res.json({
            responseCode: 200,
            message: "Successful"
        })
    }
    catch (err) {
        return res.json({
            responseCode: 500,
            message: "Server down."
        })
    }
}

export const updateFootballer = async (req, res) => {
    try {   
        await Footballers.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        return res.json({
            responseCode: 200,
            message: "Successful"
        })
    }
    catch (err) {
        return res.json({
            responseCode: 500,
            message: "Server down."
        })
    }
}

export const getAllFootballers = async (req, res) => {
    try {
        const footballers = await Footballers.findAll();

        return res.json({
            responseCode: 200,
            data: footballers
        })
    }
    catch (err) {
        return res.json({
            responseCode: 500,
            message: "Server down."
        })
    }
}

export const getSingleFootballer = async (req, res) => {
    try {
        const query = "select * from footballers where id = ?";

        const singleFootballer = await connection.query(query, {
            replacements: [req.params.id],
            model: Footballers,
            type: QueryTypes.SELECT
        })

        return res.json({
            responseCode: 200,
            data: singleFootballer
        })
    }
    catch (err) {
        return res.json({
            responseCode: 500,
            message: "Server down."
        })
    }
}

export const filterFootballersByTeamAndAge = async (req, res) => {
    try {
        const query = "select * from footballers where age IN (select age from footballers where team = ? and age < ?);"
        
        const filteredFootballers = await connection.query(query, {
            replacements: [req.params.team, req.params.age],
            model: Footballers,
            type: QueryTypes.SELECT
        })

        return res.json({
            responseCode: 200,
            data: filteredFootballers
        })
    }
    catch (err) {
        return res.json({
            responseCode: 500,
            message: "Server down."
        })
    }
}