const express = require("express");
const indexRouter = require("./app/routes/index-router");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(indexRouter);

const port = process.env.PORT || 8010;
app.listen(port, () => console.log(`Server running on ${port}`));
