const Assign = require('../models/assignModel');
const createError = require('../middleware/error')
const createSuccess = require('../middleware/success')

// for post
const assign = async (req, res, next) => {
    try {
        const assignData = new Assign(req.body);
        await assignData.save();
        return next(createSuccess(200, "User assigned"))
    }
    catch (error) {
        return next(createError(500, "Something went wrong"))
    }
};

//get all assign
const getAllAssigns = async (req, res, next) => {
    try {
        const assigns = await Assign.find();
        return next(createSuccess(200, "Get all Assigns", assigns));

    } catch (error) {
        return next(createError(500, "Internal Server Error!"))
    }
}
//get a single user
const getAssign = async (req, res, next) => {
    try {
        const assign = await Assign.findById(req.params.id);
        if (!assign) {
            return next(createError(404, "Assignment Not Found"));
        }
        return next(createSuccess(200, "Single Assign", assign));
    } catch (error) {
        return next(createError(500, "Internal Server Error1"))
    }
}
//update assignment
const updateAssign = async (req, res, next) => {
    try {
        const { id } = req.params;
        const assign = await Assign.findByIdAndUpdate(id, req.body);
        if (!assign) {
            return next(createError(404, "Assignment Not Found"));
        }
        return next(createSuccess(200, "Assignment Details Updated", assign));
    } catch (error) {
        return next(createError(500, "Internal Server Error1"))
    }
}

//delete assignment
const deleteAssign = async (req, res, next) => {
    try {
        const { id } = req.params;
        const assign = await Assign.findByIdAndDelete(id);
        if (!assign) {
            return next(createError(404, "Assignment Not Found"));
        }
        return next(createSuccess(200, "Assignment Deleted", assign));
    } catch (error) {
        return next(createError(500, "Internal Server Error1"))
    }
}

module.exports = {
    assign,
    getAllAssigns,
    getAssign,
    updateAssign,
    deleteAssign
}