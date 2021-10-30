const path = require("path");
const port = 80;
global.appRoot = path.resolve(__dirname);

const app = require("./app");

app.listen(port, () => {
  console.log(`Inventory Backend app listening at PORT : ${port}`);
});