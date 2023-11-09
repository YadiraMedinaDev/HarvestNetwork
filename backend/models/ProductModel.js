import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
    {
        id_farmer: {
            type: Schema.ObjectId,
            ref: 'farmers'
        },
        name: {
            type: String,
            require: [true, "Por favor completa este campo"]
        },
        quantity_available: {
            type: Number,
            require: [true, "Por favor completa este campo"]
        },
        description: {
            type: String
        },
        harvest_state: {
            type: String,
            require: [true, "Por favor completa este campo"]
        },
        availability_date: {
            type: Date
        },
        price: {
            type: Number,
            require: [true, "Por favor completa este campo"]
        },
        image: {
            type: Buffer
        },
        state: {
            type: Boolean
        }
    },
    {
        timestamps: true,
        versionKey: false
    })

export const ProductModel = mongoose.model("Product", productSchema);