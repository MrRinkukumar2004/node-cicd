import express from "express";
const app = express();
const port = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.send({ message: `server is running on by cicd pipleline v3` });
});
app.listen(port, () => {
  console.log(`app running on the http://localhost:${port}`);
});
