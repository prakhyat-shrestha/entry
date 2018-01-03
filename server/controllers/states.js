const State = require('../models/state');


module.exports = {

    index: async (req,res,next) => {
        try{
            const states = await State.find({});
            res.status(200).json(states);
        }
        catch(err){
            next(err);
        }

    },

    newState: async (req,res,next) => {
        try{
            const newState = new State(req.body);
            const state = await newState.save();
            res.status(201).json(state);
        }
        catch(err){
            next(err);
        }

    },

    replaceState: async (req,res,next) => {
        //enforce that req.body must contain all the fields
            try {
                const { stateId } = req.params;
                const newState = req.body;
                const state = await State.findByIdAndUpdate(stateId,newState);
                res.status(200).json(state);
            } 
            catch (err) {
                next(err);
                
            }
        },
        
    deleteState: async (req,res,next) => {
        try {
            const { stateId } = req.params;

            //Get a customer
             const state = await State.findById(stateId);


            //Remove the customer
            await state.remove();

            res.status(200).json({success:true});

        } catch (error) {
            next(error);
        }
    }

};