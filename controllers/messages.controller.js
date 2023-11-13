function getMessages(req, res) {
  res.send("<ul><li>Welcome to the Jungle !!!!</li></ul>");
}

function postMessages(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessages,
};
