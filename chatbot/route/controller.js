const { textQuery, eventQuery } = require("../chabot");

async function queryText(req, res) {
  let responses = await textQuery(
    req.body.text,
    req.body.userID,
    req.body.parameters
  );
  res.send(responses[0].queryResult);
}

async function queryEvent(req, res) {
  let responses = await eventQuery(
    req.body.event,
    req.body.userID,
    req.body.parameters
  );
  res.send(responses[0].queryResult);
}

module.exports = {
  queryEvent,
  queryText
};
