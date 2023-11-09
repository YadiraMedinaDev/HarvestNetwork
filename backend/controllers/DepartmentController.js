import { DepartmentModel } from "../models/DepartmentModel.js";

export const getDepartments = async (req, res) => {
    try {
        const departments = await DepartmentModel.find()
        res.status(200).json(departments)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
