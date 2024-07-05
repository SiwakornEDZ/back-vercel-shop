const asyncHandler = require('express-async-handler')
const Coupons = require('../models/couponModel') 
const Users = require('../models/userModel') 
const slugify = require('slugify')
const { json } = require('express')

getCoupon = asyncHandler(async(req,res)=>{ 
    const qNew = req.query.new
    const qCategory = req.query.couponType 
    let Coupons
    if(qNew){
        Coupon = await Coupons.find().sort({createdAt:-1}).limit(2)
    }else if(qCategory){
        Coupon = await Coupons.find({
            categories: {
                $in: [qCategory]
            }
            })
        }
    else{
        Coupon = await Coupons.find()
    }
    
    res.status(200).json(Coupons)
})

getCoupons = async (req, res) => {
    try {
      const Coupon = await Coupons.find({});
      res.json(Coupon);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

createCoupons = asyncHandler(async(req,res)=>{
    const userId = req.user._id
    if (!userId){
        res.status(400)
        throw new Error('No such user Found')
    }
    const { couponType, discountType } = req.body
    if (!couponType ){
        throw new Error('All are mandatory')
    }
    if (couponType) req.body.slug = slugify(couponType)
    
    const mergedData = {
        ...req.body,
        listedBy: userId
    }
    const Coupon = await Coupons.create(mergedData)
    res.status(201).json(Coupon)
    

})


module.exports = { getCoupon, getCoupons, createCoupons }