"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const notFoundRoutes_1 = __importDefault(require("./app/middlewares/notFoundRoutes"));
const globalErrorHandler_1 = require("./app/middlewares/globalErrorHandler");
const routes_1 = __importDefault(require("./app/routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
// middlewares
app.use((0, cors_1.default)({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Origin", "Accept"],
}));
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
// global route
app.use("/api", routes_1.default);
// error handle
app.use(notFoundRoutes_1.default);
app.use(globalErrorHandler_1.globalErrorHandler);
app.get("/", (req, res) => {
    res.json({
        message: "Library Server running 😎",
    });
});
exports.default = app;
