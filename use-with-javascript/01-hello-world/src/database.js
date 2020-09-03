import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/graphql', {
            useNewUrlParser: true
                // useUnifiedTopology: true
        })
        console.log('>>> DB is connected');
    } catch (e) {
        console.log('Something was wrong');
        console.log(e);
    }
}