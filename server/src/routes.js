import { Router } from "express";
import authController from "./controllers/auth.controller";
import usersController from "./controllers/users.controller";

export default app => {
	const rootRouter = Router();

	rootRouter.use(authController);
	rootRouter.use("/users", usersController);

	app.use("/api", rootRouter);
};
