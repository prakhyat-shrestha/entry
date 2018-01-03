const Employee = require('../models/employee');


module.exports = {

    index: async (req,res,next) => {
        try{
            const employees = await Employee.find({});
            res.status(200).json(employees);
        }
        catch(err){
            next(err);
        }

    },

    newEmployee: async (req,res,next) => {
        try{
            const newEmployee = new Employee(req.body);
            const employee = await newEmployee.save();
            res.status(201).json(employee);
        }
        catch(err){
            next(err);
        }

    },

    replaceEmployee: async (req,res,next) => {
        //enforce that req.body must contain all the fields
            try {
                const { employeeId } = req.params;
                const newEmployee = req.body;
                const employee = await Employee.findByIdAndUpdate(employeeId,newEmployee);
                res.status(200).json(employee);
            } 
            catch (err) {
                next(err);
                
            }
        },
        
    deleteEmployee: async (req,res,next) => {
        try {
            const { employeeId } = req.params;

            //Get a employee
             const employee = await Employee.findById(employeeId);


            //Remove the employee
            await employee.remove();

            res.status(200).json({success:true});

        } catch (error) {
            next(error);
        }
    }

};