/*

import mongoose from "mongoose";

const donorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 25,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
    },
    donorType: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});

const Donor = mongoose.models.Donor || mongoose.model('Donor', donorSchema);
export default Donor;
*/
