const Customer = require('../models/customer');
const Repair = require('../models/repair');


module.exports = {
    index: async (req,res,next) => {
        try{
            const repairs = await Repair.find({})
                                    .populate('customerId')
                                    .populate('stateId')
                                    .populate('brandId')
                                    .populate('equipmentId')
                                    .populate('modelId')
                                    .populate('employeeId');
            res.status(200).json(repairs);
        }
        catch(err){
            next(err);
        }

    },

    newRepair: async (req,res,next) => {
        try {
            // 1. Find the actual customer
            //const customer = await Customer.findById(req.body.customer);

            //2. Create a new repair
            const newRepair = req.body;
            console.log(newRepair);
            //delete newRepair.customerId;

            const repair = new Repair(newRepair);
            //repair.customerId = customer;

            await repair.save();

            // 3. Add newly created repair to the actual customer
            //customer.repairs.push(repair._id);
           // await customer.save();

            // 4. We're done
            res.status(200).json(repair);


        } catch (err) {
            next(err);
        }
    },

    getRepair: async (req,res,next) => {
        try {
            const repair = await Repair.findById(req.params.repairId);

            res.status(200).json(repair);
            
        } catch (err) {
            next(err);
            
        }

    },

    replaceRepair: async (req,res,next) => {
        try {
            const { repairId } = req.params;
            const newRepair = req.body;

           const result = await Repair.findByIdAndUpdate(repairId,newRepair);
           res.status(200).json({success: true});
            
        } catch (err) {
            next(err);
            
        }
        
    },

    deleteRepair: async (req,res,next) => {
        try {
            const { repairId } = req.params;

            //Get a repair
            const repair = await Repair.findById(repairId);
           // const customerId = repair.customer;

            //Get a customer
           // const customer = await Customer.findById(customerId);

            //Remove the repiar
            await repair.remove();

            //Remove the repair from the customers repair list
            //customer.repairs.pull(repair);
            //await customer.save();

            res.status(200).json({success:true});

            
        } catch (err) {
            next(err);
        }
    }


};