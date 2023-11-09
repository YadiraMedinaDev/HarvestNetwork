import { CityModel } from "../models/CityModel.js";
import { Mongoose, ObjectId } from "mongoose";

export const getCitys = async (req, res) => {
    try {
        const { id_department } = req.params;
        console.log({ id_department })

        const city = await CityModel.find({ id_department: { $eq: id_department } });
        console.log({ city })
        if (!city) {
            return res.status(404).json(`Ciudad with ID: ${id} not found`)
        }
        res.status(200).json(city)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}