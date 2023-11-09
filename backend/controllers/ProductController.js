import { ProductModel } from "../models/ProductModel.js";


export const getProducts = async (req, res) => {
    try {
        console.log("entra controller")
        const products = await ProductModel.find()
        res.status(200).json(products)
    } catch (error) {
        console.log({error})
        res.status(500).json({ message: error.message })
    }
}
export const getProduct = async (req, res) => {
    try {
        const { id_farmer } = req.body
        const objectId = mongoose.Types.ObjectId(id_farmer);
        const product = await ProductModel.find({ id_farmer: objectId });
        if (!product) {
            return res.status(404).json(`Products with farmer ID: ${id} not found`)
        }
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}
export const createProduct = async (req, res) => {
    try {
        const product = await ProductModel.create(req.body)
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({ message: "An error has ocurred" })
    }
}
