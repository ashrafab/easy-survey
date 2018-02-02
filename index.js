const app = require("./server/app.js");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/easysurvey");

const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
