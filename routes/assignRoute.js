const express = require('express');
const {assign,getAllAssigns,getAssign,updateAssign,deleteAssign} = require('../controllers/assignController');





const router = express.Router();

router.post('/assigned', assign);
router.get('/',getAllAssigns);
router.get('/:id',getAssign);
router.put('/:id',updateAssign);
router.delete('/:id',deleteAssign);



module.exports = router;