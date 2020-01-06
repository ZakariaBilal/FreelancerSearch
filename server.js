const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect database
connectDB();

//Init middlewate
app
  .use(
    express.json({
      extended: false
    })
  )
  .use("/articles", require("./routes/article/route"))
  .use("/auth", require("./routes/auth/route"))
  .use("/freelancers", require("./routes/freelancer/route"))
  .use("/reviews", require("./routes/review/route"))
  .use("/reports", require("./routes/report/route"))
  .use("/users", require("./routes/users/route"))
  .use("/message", require("./routes/message/route"))
  .use("/chatbot", require("./chatbot/route/route"))
  .get("*", (_, res) =>
    res.status(404).json({ success: false, data: "Endpoint not found" })
  );
app.get("/", (req, res) => {
  res.send("hi");
});

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
