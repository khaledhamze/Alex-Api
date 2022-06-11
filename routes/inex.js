const express = require('express');
const { model, modelNames } = require('mongoose');
const require = express.Router();

const { Employee } = require('../models/employee');

// Get All Employees
router.get('/api/employees', (req, res) => {
    Employees.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});
// save Employee
router.post('/api/employees', (req, res) => {
    const emp = new Employee({
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary
    });
    emp.save((err, data) => {
        res.status(200).json({
            code: 200, message: "Employee Added Successfully",
            addEmployee: data
        })
    });
});

// Get single Employees
router.get('/api/employees/:id', (req, res) => {
    Employee.findById(req.params.id, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }

    });

    module.exports = router;