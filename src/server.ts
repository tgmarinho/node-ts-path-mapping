import express from "express";
import "@controllers/UsersController";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello TS - Path Mapping 🚀" });
});

app.listen(3333);
