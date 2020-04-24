var express = require('express');
var router = express.Router();
var Student = require('../../models/Students');
var auth = require('./../auth');


/* GET users listing. */
router.post("/signup", async (req, res) => {
    try {
      console.log('hjgj',req.body)
      var student = await Student.create(req.body.user);
      var token = await auth.generateJWT(student);
      console.log(token,"kugkuhgki")
      res.json({ success: true, student, token });
    } catch (err) {
      console.log(err);
      res.json({ success: false, err });
    }
  },);

module.exports = router;
