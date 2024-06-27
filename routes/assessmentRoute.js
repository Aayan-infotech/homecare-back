const express = require('express');
const {assessment,getAllAssessments,getAssessment,deleteAssessment, updateAssessment} = require('../controllers/assessmentController');

const router = express.Router();

router.post('/assess', assessment);
router.get('/',getAllAssessments);
router.get('/:id',getAssessment);
router.put('/:id',updateAssessment);
router.delete('/:id',deleteAssessment);


module.exports = router;