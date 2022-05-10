import { Request, Response, NextFunction } from "express";

export default () => (req: Request, res: Response, next: NextFunction) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    process.env.APP_PUBLIC_URL as string
  );
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Max-Age", "10");
  next();
};
