const { MessagingResponse } = require("twilio").twiml;
const products = require("../data/products.json");

exports.reply = (req, res) => {
  const twiml = new MessagingResponse();
  const msg = req.body.Body.toLowerCase();

  if (msg.includes("menu")) {
    let text = "📦 Zephyr Products Menu:\n";
    products.forEach((p, i) => {
      text += `${i + 1}. ${p.name} - ${p.price}\n`;
    });
    twiml.message(text);
  } else {
    twiml.message("Karibu! Tuma 'menu' kuona bidhaa.");
  }

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
};
