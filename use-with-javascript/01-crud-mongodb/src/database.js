import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect('mongodb://admin:mongodb@localhost:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('>>> DB is connected');
    } catch (e) {
        console.log('Something was wrong');
        console.log(e);
    }
}