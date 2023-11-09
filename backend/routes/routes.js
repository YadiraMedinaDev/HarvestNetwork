import express from "express";
import { getFarmers, getFarmer, createFarmer, updateFarmer, deleteFarmer, loginFarmer } from "../controllers/FarmerController.js";
import { getProducts, getProduct, createProduct } from "../controllers/ProductController.js";
import { getDepartments } from "../controllers/DepartmentController.js";
import { getCitys } from "../controllers/CityController.js";

const router = express.Router();

router.post("/login", loginFarmer)
router.get("/product", getProducts)
router.get("/department", getDepartments)

router.get("/", getFarmers)
router.get("/:id", getFarmer)
router.put("/:id", updateFarmer)
router.post("/", createFarmer)
router.delete("/:id", deleteFarmer)

//router.get("/product/:id_farmer", getProduct)
router.post("/product", createProduct)
router.get("/city/:id_department", getCitys)

export default router