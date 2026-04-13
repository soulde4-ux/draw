const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/projects", (req, res) => {
  res.json({ saved: true, data: req.body });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Backend running on", PORT);
});
