import { submitEmailTemplate } from "../utils/emailTemplate";

describe("Submit Email", () => {
  it("shoud be able to call submitEmailTemplate function", async () => {
    const submitFeedbackEmail = {
      send: jest.fn(({ type, comment }) => {
        return submitEmailTemplate({ type, comment });
      }),
    };
    const type = "idea";
    const comment = "Teste";
    submitFeedbackEmail.send({ type, comment });
    const submitedEmail = submitFeedbackEmail.send.mock.results[0].value;

    expect(submitedEmail).toEqual(
      [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p>Tipo do feedback: idea</p>`,
        `<p>Comentário: Teste </p>`,
        `<p>Nenhum screenshot anexado</p>`,
        `</div>`,
      ].join("\n")
    );
  });
});
