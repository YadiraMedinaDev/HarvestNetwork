import mongoose, { Schema } from "mongoose";

const departmentSchema = new Schema(
    {
        code: {
            type: String,
            require: [true, "Por favor completa este campo"]
        },
        name: {
            type: String,
            require: [true, "Por favor completa este campo"]
        },
    },
    {
        timestamps: true,
        versionKey: false
    })

export const DepartmentModel = mongoose.model("Department", departmentSchema);