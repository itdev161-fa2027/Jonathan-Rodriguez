import mongoose from 'mongoose';
import config from 'config';

const connectDatabase = async () => {
    try {
        const db = config.get('mongoURI');

        await mongoose.connect(db);

        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error.message);
    }
};

export default connectDatabase;