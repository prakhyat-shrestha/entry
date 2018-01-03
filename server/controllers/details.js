const Detail = require('../models/detail');


module.exports = {

    index: async (req,res,next) => {
        try{
            const details = await Detail.find({});
            res.status(200).json(details);
        }
        catch(err){
            next(err);
        }

    },

    
    newDetail: async (req,res,next) => {
        try{
            const newDetail = new Detail(req.body);
            const detail = await newDetail.save();
            res.status(201).json(detail);
        }
        catch(err){
            next(err);
        }

    },

    getDetail: async (req,res,next) => {
        try{
            const {detailId} = req.params;
            const detail = await Detail.findById(detailId);    
            res.status(200).json(detail);
        }
        catch(err){
            next(err);
        }

    },

    replaceDetail: async (req,res,next) => {
        //enforce that req.body must contain all the fields
            try {
                const { detailId } = req.params;
                const newDetail = req.body;
                const detail = await Detail.findByIdAndUpdate(detailId,newDetail);
                res.status(200).json(detail);
            } 
            catch (err) {
                next(err);
                
            }
        },

        deleteDetail: async (req,res,next) => {
            try {
                const { detailId } = req.params;
    
                //Get a brand
                 const detail = await Detail.findById(detailId);
    
    
                //Remove the brand
                await detail.remove();
    
                res.status(200).json({success:true});
    
            } catch (error) {
                next(error);
            }
        }
};