const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/data", (req, res, next) => {
  res.status(200).json({
    message: "Data is receiving from Service-2,",
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
