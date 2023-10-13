import { Router } from "express";
import { manwoman_fashion, sample_tags } from "../data";
import asyncHandler from 'express-async-handler';
import { FashionModel } from "../models/fashion.model";
const router =Router();

router.get("/seed", asyncHandler(
   async(req,res) => {
      const fashionsCount = await FashionModel.countDocuments();
      if(fashionsCount> 0){
         res.send("Seed is already done !");
         return;
      }
      
      await FashionModel.create(manwoman_fashion);
      res.send("Seed Is Done!");
   }
))
  
  router.get("/",asyncHandler(
   async(req,res)=>{
      const fashions = await FashionModel.find();
      res.send(fashions);
     })
  )
  
  router.get("/search/:searchTerm",asyncHandler(async(req,res)=>{
   const searchRegex = new RegExp(req.params.searchTerm,'i');
   const fashions = await FashionModel.find({name :{$regex:searchRegex}})
   res.send(fashions);
  }))

  router.get("/tags",asyncHandler(async(req,res)=>{
   const tags = await FashionModel.aggregate([
      {
         $unwind:'$tags'
      },
      {
         $group:{
            _id:'$tags',
            count:{$sum:1}
         }
      },
      {
         $project:{
            _id:0,
            name:'$_id',
            count:'$count'
         }
      }
   ]).sort({count: -1});
   const all = {
      name:'All',
      count: await FashionModel.countDocuments()
   }

   tags.unshift(all);//opposit of push()
   res.send(tags);
  }))
  
  router.get("/tag/:tagName",asyncHandler(async(req,res)=>{
   const fashions = await FashionModel.find({tags : req.params.tagName})
   res.send(fashions);
  }))

  
  router.get("/:fashionId",asyncHandler(async(req,res)=>{
   const fashion = await FashionModel.findById(req.params.fashionId);
   res.send(fashion);
  }))
  
  export default router ;
