const express = require("express");

router = express.Router();

router.get("/login", (req, res, next) => {
    res.send(`<form onSubmit = "localStorage.setItem('username', document.getElementById('username').value)" action = "/login" method = "POST"><input id = "username" type = "text" name = "username"><br><button type = "submit">Log in</button></form>`)
});

router.post("/login", (req, res, next) => {
    res.redirect("/");
});

module.exports = router;