import express from "express";
import routes from "./routes";
import cors from "./middlewares/cors";

const port = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log("Servidor iniciado!");
});
