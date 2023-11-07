import { FarmerModel } from "../models/FarmerModel.js";
import { DepartmentModel } from "../models/DepartmentModel.js";
import { CityModel } from "../models/CityModel.js";

export const getFarmers = async (req, res) => {
    try {
        const farmers = await FarmerModel.find()
        res.status(200).json(farmers)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const getFarmer = (req, res) => {
    //const parametros=req.params
    const { id } = req.params
    res.json({ id })
    //res.json(parametros)
    //res.json({msg:"getFarmer"})
}
export const createFarmer = (req, res) => {
    const data = req.body
    res.json({ data })
    //res.json({msg:"createFarmer"})
}
export const updateFarmer = (req, res) => {
    res.json({ msg: "updateFarmer" })
}
export const deleteFarmer = (req, res) => {
    res.json({ msg: "deleteFarmer" })
}