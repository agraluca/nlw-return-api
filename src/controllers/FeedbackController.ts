import { Request, Response } from "express";
import FeedbackRepository from "../repositories/FeedbackRepository";
import SubmitFeedbackEmail from "../services/SubmitFeedbackEmail";

export async function store(req: Request, res: Response) {
  const { type, comment, screenshot } = req.body;

  if (!comment) {
    return res.status(422).json({ msg: "O comentário é obrigatório" });
  }

  if (!type) {
    return res.status(422).json({ msg: "O tipo é obrigatório" });
  }

  if (!["idea", "bug", "other"].includes(type)) {
    return res.status(422).json({ msg: "O tipo inserido está incorreto" });
  }

  const feedback = await FeedbackRepository.create({
    type,
    comment,
    screenshot,
  });

  await SubmitFeedbackEmail.send({ type, comment, screenshot });

  res
    .status(201)
    .json({ feedback, msg: "O feedback foi enviado com sucesso!" });
}
