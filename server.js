const express = require("express");
const path = require("path");
const app = express();
const members = require("./Members");
const PORT = process.env.PORT || 5000;

const logger = (req, res, next) => {
  console.log("This is middleware");
  next();
};

app.use(logger);
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });
app.get("/api/members", (req, res) => {
  res.json(members);
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
