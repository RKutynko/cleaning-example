import path from "path";
import express from "express";
import morgan from "morgan";
import cookie from "cookie-parser";
import body from "body-parser";

import cors from "cors";
import configureRouter from "./routes";
import { config } from "dotenv";
import passport from "passport";
import mongoose from "mongoose";

config();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(cookie());
app.use(body.json());
app.use(body.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "assets")));

// localAuthentication(passport);
// googleAuthentication(passport);
// configurePassportSession(passport);
app.use(passport.initialize());

configureRouter(app);

app.listen(process.env.PORT || 5000, () => {
	console.log("server started");
});
