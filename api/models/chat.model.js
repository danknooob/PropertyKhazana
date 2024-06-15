import mongoose from 'mongoose';

const { Schema } = mongoose;

const chatSchema = new Schema({
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }, ],
    lastMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;