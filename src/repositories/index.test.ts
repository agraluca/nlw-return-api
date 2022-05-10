import FeedbackRepository from "./FeedbackRepository";

describe("Create Feedback", () => {
  it("shoud be able to submit a feedback", async () => {
    const type = "idea";
    const comment = "Teste";
    const createFeedback = await FeedbackRepository.create({
      type,
      comment,
    });

    expect(createFeedback).toHaveProperty("id");
  });
});
