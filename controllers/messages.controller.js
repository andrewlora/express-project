//const path = require("path");
function getMessages(req, res) {
  //res.send("<ul><li>Welcome to the Jungle !!!!</li></ul>");
  /* res.sendFile(
    path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  ); */
  res.render("messages", {
    title: "Messages to my friends!",
    friend: "Elon Musk",
  });
}

function postMessages(req, res) {
  res.send("Updating messages...");
}

module.exports = {
  getMessages,
  postMessages,
};
