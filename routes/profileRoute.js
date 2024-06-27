const express = require('express');
const {profile,getAllProfiles,getProfile,updateProfile,deleteProfile} = require('../controllers/profileController')



const router = express.Router();

router.post('/file', profile);
router.get('/',getAllProfiles);
router.get('/:id',getProfile);
router.put('/:id',updateProfile);
router.delete('/:id',deleteProfile);



module.exports = router;