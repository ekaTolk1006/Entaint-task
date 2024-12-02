const express = require("express");
const rout = require("./routes");
const cors = require("./middleware/cors");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors);
app.use("/api", rout);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server works!`);
});
