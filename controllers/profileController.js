const Profile= require('../models/profileModel');
const createError = require('../middleware/error')
const createSuccess = require('../middleware/success')

//for post
const profile = async (req, res, next) => {
    try {
        // const role = await Role.find({ role: 'User' });
        const newProfile= new Profile({
            name: req.body.name,
            age: req.body.age,
            address: req.body.address,
            email: req.body.email,
            number: req.body.number,
            
        })
        await newProfile.save();
        // return res.status(200).json("User Signup Successfully")
        return next(createSuccess(200, "User profile displayed"))
    }
    catch (error) {
        //return res.status(500).send("Something went wrong")
        return next(createError(500, "Something went wrong"))
    }
}


//for all profile
const getAllProfiles = async (req, res, next) => {
    try {
        const profiles = await Profile.find();
        return next(createSuccess(200, "Get all profile",profiles ));

    } catch (error) {
        return next(createError(500, "Internal Server Error!"))
    }
}

//for single profile
const getProfile = async (req, res, next) => {
    try {
        const profile = await Profile.findById(req.params.id);
        if (! profile) {
            return next(createError(404, "User Not Found"));
        }
        return next(createSuccess(200, "Single Profile",  profile));
    } catch (error) {
        return next(createError(500, "Internal Server Error1"))
    }
}

//update profile
const updateProfile = async (req, res, next) => {
    try {
        const { id } = req.params;
        const profile = await Profile.findByIdAndUpdate(id, req.body);
        if (!profile) {
            return next(createError(404, "profile Not Found"));
        }
        return next(createSuccess(200, "profile Details Updated", profile));
    } catch (error) {
        return next(createError(500, "Internal Server Error1"))
    }
}

//delete profile
const deleteProfile = async (req, res, next) => {
    try {
        const { id } = req.params;
        const profile = await Profile.findByIdAndDelete(id);
        if (!profile ) {
            return next(createError(404, "Profile Not Found"));
        }
        return next(createSuccess(200, "Profile Deleted", profile ));
    } catch (error) {
        return next(createError(500, "Internal Server Error1"))
    }
}

module.exports = {
    profile,getAllProfiles,getProfile,updateProfile,deleteProfile
    
}