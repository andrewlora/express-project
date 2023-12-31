const express = require("express");
const path = require("path");
const friendsRouter = require("./routes/friends.router.js");
const messagesRouter = require("./routes/messages.router.js");
const PORT = 3000;
const app = express();
app.use(express.json());
app.use("/site", express.static(path.join(__dirname, "public")));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});
app.get("/", (req, res) => {
  res.render("index", {
    title: "My friends are very clever",
    caption: "Let's go skiing!",
  });
});
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}/`)
);
