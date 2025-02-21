/*
import mongoose from 'mongoose';

export const connectToDatabase = async () => {

  const connection = {}

    try {
        if (connected.isConnected) {
          const database = await mongoose.connect(process.env.MONGO);
          connection.isConnected = database.connection[0].readyState;
        }
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    };

    */