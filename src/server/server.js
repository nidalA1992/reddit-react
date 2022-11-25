import express from "express";
import ReactDOM from "react-dom/server";
import { App } from "../App";
import { indexTemplate } from "./indexTemplate";
import compression from "compression";
import helmet from "helmet";

const PORT = process.env.PORT || 4000;
const IS_DEV = process.env !== "production";

const app = express();

app.use("/static", express.static("./dist/client")); // по url /static будут достуны все файлы по следующему аддресу

if (IS_DEV) {
  app.use(compression());
  app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
    })
  );
}

app.get("/auth", (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.get("*", (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
