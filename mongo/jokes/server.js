const express = require("express");
const cors = require("cors");
const { JokeRouter } = require("./routes/jokes.routes");

const port = 8000;

// requiring / importing runs the file
// this file doesn't need to export anything, so we don't need a var
require("./config/mongoose.config");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/jokes", JokeRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port} for requests to respond to`);
});