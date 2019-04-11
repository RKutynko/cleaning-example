import { Router } from "express";
import User from "../models/user";
const UsersController = Router();

UsersController.get("/", async (_, res) => {
	res.send(await User.find({ isActive: true }));
});

UsersController.post("/", async (req, res) => {
	const user = {
		email: req.body.email,
		name: req.body.name,
		password: req.body.password
	};

	const possibleDuplicate = await User.findOne({
		email: user.email,
		isActive: true
	});
	if (possibleDuplicate) {
		res.sendStatus(400);
		return;
	}

	const newUser = await User.create(user);
	const newUserLocation = `/api/users/${newUser.id}`;

	res.setHeader("Location", newUserLocation);
	res.status(201).send(newUser);
});

UsersController.get("/:id", async (req, res) => {
	console.log(req.params.id);
	const user = await User.findOne({ _id: req.params.id });
	if (!user) {
		res.sendStatus(404);
		return;
	}

	return res.send(user);
});

UsersController.put("/:id", (req, res) => {
	const user = {
		email: req.body.email,
		name: req.body.name,
		password: req.body.password
	};

	res.sendStatus(200);
});

UsersController.delete("/:id", async (req, res) => {
	let updatedUser = await User.findOneAndUpdate(
		{ _id: req.params.id },
		{ isActive: false }
	);
	if (!updatedUser) res.sendStatus(404);
	else res.sendStatus(204);
});

export default UsersController;
