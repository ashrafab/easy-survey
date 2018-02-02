const app = require("./server/app.js");

const PORT = 8888;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
