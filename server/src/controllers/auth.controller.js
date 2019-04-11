import { Router } from "express";
const AuthController = Router();

AuthController.post("/login", (req, res) => {
	res.sendStatus(200);
});

AuthController.post("/logout", (req, res) => {
	res.sendStatus(200);
});

AuthController.get("/login/google");
AuthController.get("/login/google/return");
AuthController.get("/login/facebook");
AuthController.get("/login/facebook/return");

export default AuthController;
