import { Router } from "express";
import authController from "./controllers/auth.controller";

export default app => {
	const rootRouter = Router();

	rootRouter.use(authController);

	app.use("/api", rootRouter);
};
