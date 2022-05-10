import { prisma } from "../config/prisma";

export type FeedbackCreateData = {
  type: string;
  comment: string;
  screenshot?: string;
};

export type FeedbackResponseData = {
  id: string;
  type: string;
  comment: string;
  screenshot?: string;
};

export interface FeedbackRepositoryProps {
  create: (data: FeedbackCreateData) => Promise<FeedbackResponseData>;
}

class FeedbackRepository implements FeedbackRepositoryProps {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    const feedback = await prisma.feedback.create({
      data: { type, comment, screenshot },
    });
    return feedback as FeedbackResponseData;
  }
}

export default new FeedbackRepository();
