import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDb connected successfully');
  } catch (error) {
    console.log('error occures', error);
  }
};

export default connectDB;
