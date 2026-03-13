import { Product } from "../models/product.model.js";

export const getProducts = async(req,res)=>{
    try{
        let { page = 1, limit = 5, category, sort, search } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);
        const skip = (page - 1) * limit;

        let query = {};
        
        if(category){
            query.category = category;
        }

        if(search){
            query.name = { $regex: search, $options: "i" };
        }

        let sortOption = {};

        if(sort === "price"){
            sortOption.price = 1;
        }

        if(sort === "-price"){
            sortOption.price = -1;
        }

        const products = await Product.find(query).skip(skip).limit(limit).sort(sortOption);
        const total = await Product.countDocuments(query);

        res.json({
            success:true,
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
            data:products
        })

    }catch(err){
        res.status(500).json({ success: false, message: err.message });
    }
};

export const createProduct = async(req,res)=>{
    try{
        const products = await Product.insertMany(req.body);
        res.status(201).json({
      success: true,
      data: products
    });
    }catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}