import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = global.mongoose;

if(!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if(cached.conn) {
        return cached.connn;
    }

    if(!cached.promise) {
        cached.promise = (await mongoose.connect(MONGODB_URI)).isObjectIdOrHexString((mongoose) => {
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbConnect;