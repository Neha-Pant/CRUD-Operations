var Student = require('../models/Student');
var express = require('express');
var router = express.Router();
router.route('/Student').get(function(req, res) {
  Student.find(function(err, Student) {
    if (err) {
      return res.send(err);
    }
    res.json(Student);

  });
});
router.route('/SearchId').post(function(req, res) {
  Student.find({rid:req.body.data},function(err, Data) {
    if (err) {
      return res.send(err);
    }
    res.send(Data);

  });
});
router.route('/Delete').post(function(req, res) {
  var a=req.body.del;
  Student.remove({rid:a}, function(err, Student) {
    if (err) {
      return res.send(err);
    }
    else
      {
        res.send({ message: 'Student deleted' });
      }
  });
});

router.route('/Insert').post(function(req, res) {
    var ob = new Student();

    ob.rid= req.body.id;
     ob.name =req.body.name;
    ob.course = req.body.course;
     ob.address = req.body.address;
     ob.marks = req.body.marks;

    ob.save(function(err) {
    if (err) {
      return res.send(err);
    }

     res.send({ message: 'Student Added' });
  });
});

router.route('/Update').post(function(req,res){
    var ob = new Student();
    ob.rid= req.body.id1;
     ob.name =req.body.name1;
    ob.course = req.body.course1;
     ob.address = req.body.address1;
     ob.marks = req.body.marks1;

     Student.remove({"rid": req.body.id1}, function(err, Student) {
       if (err)
         return res.send(err);       });

  ob.save(function(err) {
    if (err) throw err;

   res.send({ message: 'Student Updated' });
});
});
module.exports = router;
