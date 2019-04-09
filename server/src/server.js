import path from "path";
import express from "express";
import morgan from "morgan";
import cookie from "cookie-parser";
import body from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(cookie());
app.use(body.json());
app.use(body.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "assets")));

app.listen(process.env.PORT || 5000, () => {
	console.log("server started");
});
