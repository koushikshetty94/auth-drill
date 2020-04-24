var express = require('express');
var router = express.Router();
var Mentor = require('../../models/Mentors');
var auth = require('./../auth');

// 
router.post("/signup", async (req, res) => {
    try {
      console.log('hjgj',req.body)
      var mentor = await Mentor.create(req.body.user);
      var token = await auth.generateJWT(mentor);
      console.log(token,"kugkuhgki")
      res.json({ success: true, mentor, token });
    } catch (err) {
      console.log(err);
      res.json({ success: false, err });
    }
  },);


// 
  router.post("/login", async (req, res) => {
    try {
        console.log("mentor login");
      var mentor = await Mentor.findOne({ email: req.body.user.email });
      if (!mentor)
        return res.json({ success: false, msg: "incorrect credentials" });
      if (!mentor.verifyPassword(req.body.user.password)) {
        return res.json({ success: false, msg: "incorrect password" });
        
      }
      var token = await auth.generateJWT(mentor);
      res.json({ success: true, mentor, token });
    } catch (err) {
      console.log(err);
      res.json({ success: false, err });
    }
  });

module.exports = router;
