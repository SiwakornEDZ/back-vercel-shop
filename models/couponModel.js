const mongoose = require('mongoose')

const couponSchema = mongoose.Schema({
    couponName:{
        type: String,
        required: [true, 'couponName is required'],
        unique: true,
        trim: true
    },
    couponType:{
        type: String,
        required: [true, 'couponType is required'],
        trim: true
    },
    discountType:{
        type: String,
        trim: true
    },
    percentage:{
        type: Number,
    },
    amount:{
        type: Number,
    },
    discountTypeOnTop:{
        type: String,
        trim: true
    },
    category:{
        type: String,
        trim: true
    },
    percentageOnTop:{
        type: Number,
    },
    pointOnTop:{
        type: Number,
    },
    everyThb:{
        type: Number,
    },
    discountThb:{
        type: Number,
    },
    listedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },   
},
{
    timestamps: true
})

module.exports = mongoose.model('Coupons', couponSchema)
