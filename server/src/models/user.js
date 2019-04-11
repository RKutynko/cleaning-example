import { Schema, SchemaTypes, model } from "mongoose";

const userSchema = new Schema({
	email: { type: SchemaTypes.String, required: true },
	name: SchemaTypes.String,
	password: SchemaTypes.String,
	isActive: { type: SchemaTypes.Boolean, default: true },
	isEmailConfirmed: SchemaTypes.Number
});

userSchema.pre("save", function(next) {
	if (!this.isModified("email")) {
		console.log("need to reconfirm email");
		const token = Date.now();
		this.emailConfirmationToken = token;
	}
	next();
});

const User = model("User", userSchema);

export default User;
