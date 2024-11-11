import express, { Application, Request, Response } from "express";
import cors from "cors";
import notFoundRoute from "./app/middlewares/notFoundRoutes";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import router from "./app/routes";
import cookieParser from "cookie-parser";
const app: Application = express();

// middlewares
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Origin", "Accept"],
  })
);
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "BOOKKI Server running 😎",
  });
});

// global route
app.use("/api", router);

// error handle
app.use(notFoundRoute);
app.use(globalErrorHandler);

export default app;
