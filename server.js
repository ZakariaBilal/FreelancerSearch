const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect database
connectDB();

//Init middlewate
app.use(
  express.json({
    extended: false
  })
);

app.get("/", (req, res) => {
  res.send("hi");
});

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
