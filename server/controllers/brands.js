const Brand = require('../models/brand');


module.exports = {

    index: async (req,res,next) => {
        try{
            const brands = await Brand.find({});
            res.status(200).json(brands);
        }
        catch(err){
            next(err);
        }

    },

    newBrand: async (req,res,next) => {
        try{
            const newBrand = new Brand(req.body);
            const brand = await newBrand.save();
            res.status(201).json(brand);
        }
        catch(err){
            next(err);
        }

    },

    replaceBrand: async (req,res,next) => {
        //enforce that req.body must contain all the fields
            try {
                const { brandId } = req.params;
                const newBrand = req.body;
                const brand = await Brand.findByIdAndUpdate(brandId,newBrand);
                res.status(200).json(brand);
            } 
            catch (err) {
                next(err);
                
            }
        },
        
    deleteBrand: async (req,res,next) => {
        try {
            const { brandId } = req.params;

            //Get a brand
             const brand = await Brand.findById(brandId);


            //Remove the brand
            await brand.remove();

            res.status(200).json({success:true});

        } catch (error) {
            next(error);
        }
    }

};