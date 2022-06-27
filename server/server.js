import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { APP_PORT } from "./config";
import torrentRequest from "./routes/torrentRequest";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/", torrentRequest);

app.listen(APP_PORT, () => {
  console.log(`Server is listening on port ${APP_PORT}`);
});
