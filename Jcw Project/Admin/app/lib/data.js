/*
import Donor from "./models.js";
import { connectToDatabase } from "./utils.js";

export const fetchDonors = async () => {
    try {
        connectToDatabase();
        const donors = await Donor.find();
        return donors;
    } catch (error) {
        console.log(error);
        throw new Error("Donor not found!");
    }
};
*/