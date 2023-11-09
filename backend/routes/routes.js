import express from "express";
import { getFarmers, getFarmer, createFarmer, updateFarmer, deleteFarmer, loginFarmer } from "../controllers/FarmerController.js";

const router = express.Router();

router.post("/login", loginFarmer)
router.get("/", getFarmers)
router.get("/:id", getFarmer)
router.put("/:id", updateFarmer)
router.post("/", createFarmer)
router.delete("/:id", deleteFarmer)

export default router