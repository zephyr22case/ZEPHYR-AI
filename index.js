const express = require("express");
const bodyParser = require("body-parser");
const whatsappRoute = require("./routes/whatsapp");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/whatsapp", whatsappRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
