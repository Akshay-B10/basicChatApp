const fs = require("fs");

const express = require("express");

router = express.Router();

router.get("/", (req, res, next) => {
    fs.readFile("message.txt", "utf8", (err, data) => {
        if (err) {
            return res.send(`<form onSubmit = "document.getElementById('username').value = localStorage.getItem('username')" action = "/" method = "POST">No messages<br><input type = "text" name = "message"><input type = "hidden" id ="username" name = "username"><br><button type = "submit">Send</button></form>`);
        }
        res.send(`<form onSubmit = "document.getElementById('username').value = localStorage.getItem('username')" action = "/" method = "POST">${data}<br><input type = "text" name = "message"><input type = "hidden" id ="username" name = "username"><br><button type = "submit">Send</button></form>`);
    });
});

router.post("/", (req, res, next) => {
    const user = req.body.username;
    const msg = req.body.message;
    fs.readFile("message.txt", "utf8", (err, data) => {
        if (err) {
            fs.writeFile("message.txt", user + ": " + msg, () => {
                return res.send(`<form onSubmit = "document.getElementById('username').value = localStorage.getItem('username')" action = "/" method = "POST">${user}: ${msg}<br><input type = "text" name = "message"><input type = "hidden" id ="username" name = "username"><br><button type = "submit">Send</button></form>`);
            });
        } else {
            fs.writeFile("message.txt", data + "; " + user + ": " + msg, () => {
                return res.send(`<form onSubmit = "document.getElementById('username').value = localStorage.getItem('username')" action = "/" method = "POST">${data}; ${user}: ${msg}<br><input type = "text" name = "message"><input type = "hidden" id ="username" name = "username"><br><button type = "submit">Send</button></form>`);
            });
        }
    });
});

module.exports = router;