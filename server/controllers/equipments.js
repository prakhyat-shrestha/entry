const Equipment = require('../models/equipment');


module.exports = {

    index: async (req,res,next) => {
        try{
            const equipments = await Equipment.find({});
            res.status(200).json(equipments);
        }
        catch(err){
            next(err);
        }

    },

    newEquipment: async (req,res,next) => {
        try{
            const newEquipment = new Equipment(req.body);
            const equipment = await newEquipment.save();
            res.status(201).json(equipment);
        }
        catch(err){
            next(err);
        }

    },

    replaceEquipment: async (req,res,next) => {
        //enforce that req.body must contain all the fields
            try {
                const { equipmentId } = req.params;
                const newEquipment = req.body;
                const equipment = await Equipment.findByIdAndUpdate(equipmentId,newEquipment);
                res.status(200).json(equipment);
            } 
            catch (err) {
                next(err);
                
            }
        },
        
    deleteEquipment: async (req,res,next) => {
        try {
            const { equipmentId } = req.params;

            //Get a customer
             const equipment = await Equipment.findById(equipmentId);
             //const repairs = customer.repairs;

             //for(let i of repairs){
               //  const re = await Repair.findByIdAndRemove(i);
             //}

            //Remove the customer
            await equipment.remove();

            res.status(200).json({success:true});

        } catch (error) {
            next(error);
        }
    }

};