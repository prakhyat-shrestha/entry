const Customer = require('../models/customer');
const Repair = require('../models/repair');

module.exports = {
    index: async (req,res,next) => {
        try{
            const customers = await Customer.find({});
            res.status(200).json(customers);
        }
        catch(err){
            next(err);
        }

    },

    newCustomer: async (req,res,next) => {
        try{
            const newCustomer = new Customer(req.body);
            const customer = await newCustomer.save();
            res.status(201).json(customer);
        }
        catch(err){
            next(err);
        }

    },

    getCustomer: async (req,res,next) => {
        try{
            const {customerId} = req.params;
            const customer = await Customer.findById(customerId);    
            res.status(200).json(customer);
        }
        catch(err){
            next(err);
        }

    },


    replaceCustomer: async (req,res,next) => {
        //enforce that req.body must contain all the fields
            try {
                const { customerId } = req.params;
                const newCustomer = req.body;
                const customer = await Customer.findByIdAndUpdate(customerId,newCustomer);
                res.status(200).json(customer);
            } 
            catch (err) {
                next(err);
                
            }
            
    },

    deleteCustomer: async (req,res,next) => {
            try {
                const { customerId } = req.params;

                //Get a customer
                 const customer = await Customer.findById(customerId);
                 const repairs = customer.repairs;

                 for(let i of repairs){
                     const re = await Repair.findByIdAndRemove(i);
                 }

                //Remove the customer
                await customer.remove();

                res.status(200).json({success:true});

                
            } catch (err) {
                next(err);
            }
    },

    getCustomerRepairs: async (req,res,next) => {

            try {
                const { customerId } = req.params;
                const customer = await Customer.findById(customerId).populate('repairs');
                res.status(200).json(customer.repairs);
            } 
            catch (err) {
                next(err);
            }
         
    },

    newCustomerRepair: async (req,res,next) => {
        try{
            const { customerId } = req.params;

            const newRepair = new Repair(req.body);
            console.log('newRepair',newRepair);
             //Get Customer
             const customer = await Customer.findById(customerId);
                     //Assign Customer as a Repair's Customer
             newRepair.customer = customer;
             await newRepair.save();

            // Add repair to the customer's repairs array
            customer.repairs.push(newRepair._id);
            //save the customer
            await customer.save();
             res.status(201).json(newRepair);

        }
        catch(err){
            next(err);
        }
    }
    
};

