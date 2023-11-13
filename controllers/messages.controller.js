function getMessages(req, res) {
  res.send("<ul><li>Welcome to the Jungle !!!!</li></ul>");
}

function postMessages(req, res) {
  res.send("Updating messages...");
}

module.exports = {
  getMessages,
  postMessages,
};
