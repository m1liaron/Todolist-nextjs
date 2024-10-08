import mongoose from 'mongoose'


const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
});


export default mongoose.model('Task', TaskSchema);