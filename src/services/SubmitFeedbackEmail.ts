import { submitEmailTemplate } from "../utils/emailTemplate";
import { transport } from "../config/smtp";

interface SubmitFeedbackRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

class SubmitFeedbackEmail {
  async send({ type, comment, screenshot }: SubmitFeedbackRequest) {
    await transport.sendMail({
      from: "Equipe Feedget <no-reply@feedback.com>",
      to: "Luca Agra <luca.agra@hotmail.com>",
      subject: "Novo feedback",
      html: submitEmailTemplate({ type, comment, screenshot }),
    });
  }
}

export default new SubmitFeedbackEmail();
