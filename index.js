const app = require("./server/app.js");

const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
