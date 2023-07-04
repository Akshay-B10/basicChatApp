const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const usersRoutes = require("./routes/users");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(usersRoutes);

app.use(adminRoutes);

app.listen(4000);