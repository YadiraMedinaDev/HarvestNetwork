import { FarmerModel } from "../models/FarmerModel.js";
import { DepartmentModel } from "../models/DepartmentModel.js";
import { CityModel } from "../models/CityModel.js";
import jwt from "jsonwebtoken";


export const getFarmers = async (req, res) => {
    try {
        const farmers = await FarmerModel.find()
        res.status(200).json(farmers)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const getFarmer = async (req, res) => {
    try {
        const { id } = req.params
        const farmer = await FarmerModel.findById(id)
        if (!farmer) {
            return res.status(404).json(`Farmer with ID: ${id} not found`)
        }
        res.status(200).json(farmer)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const createFarmer = async (req, res) => {
    try {
        const farmer = await FarmerModel.create(req.body)
        res.status(201).json(farmer)
    } catch (error) {
        res.status(500).json({ message: "An error has ocurred" })
    }
}
export const updateFarmer = async (req, res) => {
    try {
        const { id } = req.params
        const farmer = await FarmerModel.findByIdAndUpdate(
            { _id: id },
            req.body,
            { new: true }
        )
        res.status(200).json(farmer)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const deleteFarmer = async (req, res) => {
    try {
        const { id } = req.params
        const farmer = await FarmerModel.findByIdAndDelete(id)
        if (!farmer) {
            return res.status(404).json(`Farmer with ID: ${id} not found`)
        }
        res.status(200).json("Farmer successfully removed")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const loginFarmer = async (req, res) => {
    try {
        const { user_name, password } = req.body;
        const farmer = await FarmerModel.findOne({ user_name: user_name });
        console.log(farmer)
        if (!farmer) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }
        if (farmer.password !== password) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }
        const token = jwt.sign({ _id: farmer._id }, 'secretKey');
        res.status(200).json({ farmer, token })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}