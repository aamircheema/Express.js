const express = require("express");
const path = require("path");
const app = express();
const logger = require("./middlware/logger");
const PORT = process.env.PORT || 5000;

app.use(logger);
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/members", require("./routes/api/members"));

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
