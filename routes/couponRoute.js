const { getCoupon, getCoupons, createCoupons } = require('../controllers/couponController')
const { validateToken, validateTokenAndAuth, AdminAuth } = require('../middlewares/validateTokenHandler')
const router = require('express').Router()



router.get('/', getCoupons)

router.post('/', AdminAuth, createCoupons)

router.get('/:id', getCoupon)



module.exports = router