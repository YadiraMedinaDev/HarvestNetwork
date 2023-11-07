import express from "express";
import { getFarmers, getFarmer, createFarmer, updateFarmer, deleteFarmer } from "../controllers/FarmerConroller.js";

const router = express.Router();

router.get("/", getFarmers)
router.get("/:id", getFarmer)
router.put("/:id", updateFarmer)
router.post("/", createFarmer)
router.delete("/:id", deleteFarmer)

export default router