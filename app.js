const app = require("express")();
const bodyParser = require("body-parser");
 
app.set("api_secret_key", require("./config").api_secret_key);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/employee", require("./verifyToken"));
app.use("/employee", require("./employeeRouter"));
app.use("/token", require("./token"));
 
app.listen(5000, () => console.log("Yayın başladı..."));