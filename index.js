const app = require("./server/app.js");
const mongoose = require("mongoose");

const { PORT = 3000, MONGO_DB_URI } = process.env;

mongoose.connect(MONGO_DB_URI);
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
