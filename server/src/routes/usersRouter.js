const express = require("express");
const { db } = require("../models/Users");
const router = express.Router();
const Users = require("../models/Users");
const bcrypt = require("bcrypt")
const usersControllers = require('../controllers/userControllers')
router.post("/register", async (req, res) => {
    try {
        const hash = await bcrypt.hashSync(req.body.password, 10);
        Users.findOne({ username: req.body.username }).then((user) => {
            if (!user) {
                req.body.password = hash
                const userData = Users.create(req.body);
                if (userData) {
                    res.status(200).json({ msg: "user is added" });
                } else {
                    res.json({ msg: "something went worng" });
                }
            } else {
                res.status(409).json({ error: "user already exists" });
            }
        });
    } catch (err) {
        console.log(err);
    }
});

router.post("/login", async (req, res) => {
    const user = await Users.findOne({ username: req.body.username }).lean()
    if (user) {
        try {
            const { username, password } = user;
            const isMatched = bcrypt.compareSync(req.body.password, password)
            if (username && isMatched) {
                const { password, ...refactoredUserObj } = user
                res.status(200).json({
                    msg: "logged in successfully",
                    isLogin: true,
                    userData: refactoredUserObj
                })
            }
            else {
                res.status(401).json({
                    msg: "unauthorized user"
                })
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    else {
        res.json({
            msg: "user doesn't exist"
        })
    }

});

router.get('/users', usersControllers.getUsers)
router.get('/user/:id', usersControllers.getUserDetails)

module.exports = router;