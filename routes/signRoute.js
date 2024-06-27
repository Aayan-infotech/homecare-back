const express = require('express');
const {sign,getAllSigns,updateSign,deleteSign,getSign} = require('../controllers/signController')



const router = express.Router();

router.post('/signed', sign);
router.get('/',getAllSigns);
router.get('/:id',getSign);
router.put('/:id',updateSign);
router.delete('/:id',deleteSign);





module.exports = router;