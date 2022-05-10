type SubmitEmailTemplate = {
  type: string;
  comment: string;
  screenshot?: string;
};

export const submitEmailTemplate = ({
  type,
  comment,
  screenshot,
}: SubmitEmailTemplate) => {
  return [
    `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
    `<p>Tipo do feedback: ${type}</p>`,
    `<p>Comentário: ${comment} </p>`,
    `${
      screenshot
        ? `<p>Screenshot: ${screenshot} </p>`
        : "<p>Nenhum screenshot anexado</p>"
    }`,
    `</div>`,
  ].join("\n");
};
