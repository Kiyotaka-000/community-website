import express from "express";
import Controllers from "../controllers/user-controller.js";

const UserRoutes = express.Router();
UserRoutes.post("/eventregister",Controllers.EventRegister);
export default UserRoutes;
