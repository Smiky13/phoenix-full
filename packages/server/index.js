const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors()); // on durcira plus tard

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
