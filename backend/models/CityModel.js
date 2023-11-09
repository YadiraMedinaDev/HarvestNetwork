import mongoose, { Schema } from "mongoose";

const citySchema = new Schema(
    {
        code: {
            type: String,
            require: [true, "Por favor completa este campo"]
        },
        name: {
            type: String,
            require: [true, "Por favor completa este campo"]
        },
        code_department: {
            type: String,
        },
        id_department: {
            type: String,
            ref: 'departments',
        }
    },
    {
        timestamps: true,
        versionKey: false
    })

export const CityModel = mongoose.model("City", citySchema);