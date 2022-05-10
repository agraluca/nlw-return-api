import express from "express";

import * as FeedbackController from "../controllers/FeedbackController";

const routes = express.Router();

routes.get("/", (req, res) => res.send("Olá"));

routes.post("/feedbacks", FeedbackController.store);

export default routes;
