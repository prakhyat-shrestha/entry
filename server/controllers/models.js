const Model = require('../models/model');


module.exports = {

    index: async (req,res,next) => {
        try{
            const models = await Model.find({}).populate('brandId').populate('equipmentId');
           // console.log(models);
            res.status(200).json(models);
        }
        catch(err){
            next(err);
        }

    },

    newModel: async (req,res,next) => {
        try{
            const newModel = new Model(req.body);
            const model = await newModel.save();
            res.status(201).json(model);
        }
        catch(err){
            next(err);
        }

    },

    replaceModel: async (req,res,next) => {
        //enforce that req.body must contain all the fields
            try {
                const { modelId } = req.params;
                const newModel = req.body;
                const model = await Model.findByIdAndUpdate(modelId,newModel);
                res.status(200).json(model);
            } 
            catch (err) {
                next(err);
                
            }
        },
        
    deleteModel: async (req,res,next) => {
        try {
            const { modelId } = req.params;

            //Get a model
             const model = await Model.findById(modelId);


            //Remove the model
            await model.remove();

            res.status(200).json({success:true});

        } catch (error) {
            next(error);
        }
    }

};