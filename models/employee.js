const mongoose = require('mongoose');



// Employees schema

const Employees = mongoose.model('Employee',{
    name: {
        type:string,
        required: true
    },
    email: {
        type:string,
        required: true
    },
    salary: {
        type:string,
        required: true
    }
});


module.exports = { Employee }