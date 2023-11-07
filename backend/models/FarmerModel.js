import mongoose, { Schema } from "mongoose";

const farmerSchema = new Schema(
    {
        name: {
            type: String,
            require: [true, "Por favor completa este campo"]
        },
        mail: {
            type: String,
            require: [true, "Por favor completa este campo"],
            unique: true,
            match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        },
        phone_number: {
            type: Number,
            require: [true, "Por favor completa este campo"]
        },
        user_name: {
            type: String,
            require: [true, "Por favor completa este campo"],
            unique: true
        },
        password: {
            type: String,
            require: [true, "Por favor completa este campo"]
        },
        id_department: {
            type: Schema.ObjectId,
            ref: 'departments',
            require: [true, "Por favor completa este campo"]
        },
        id_city: {
            type: Schema.ObjectId,
            ref: 'cities',
            require: [true, "Por favor completa este campo"]
        },
        address: {
            type: String,
            require: [true, "Por favor completa este campo"]
        },
    },
    {
        timestamps: true,
        versionKey: false
    })

export const FarmerModel = mongoose.model("Farmer", farmerSchema);