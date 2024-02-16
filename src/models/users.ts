import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    password: { 
        type: String, 
        required: true,
    },
    createdAt: {
		type: Date,
		default: new Date(),
	},
})

export default mongoose.model("User", UserSchema)