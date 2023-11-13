const path = require("path");
function getMessages(req, res) {
  //res.send("<ul><li>Welcome to the Jungle !!!!</li></ul>");
  res.sendFile(path.join(__dirname, "..", "public", "skimountain.jpg"));
}

function postMessages(req, res) {
  res.send("Updating messages...");
}

module.exports = {
  getMessages,
  postMessages,
};
