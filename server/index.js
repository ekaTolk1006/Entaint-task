
const express = require('express');
const rout = require("./routes");

const app = express();

const PORT = process.env.PORT || 3001;

app.use("/api", rout);

app.listen(PORT, () => {
    console.log(`Server works!`);
})