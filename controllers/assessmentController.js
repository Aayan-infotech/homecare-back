const Assessment = require('../models/assessmentModel');
const createError = require('../middleware/error')
const createSuccess = require('../middleware/success')


//for post assessment

const assessment = async (req, res, next) => {
    try {
        const newAssessment = new Assessment({
            patient: req.body.patient,
            age: req.body.age,
            address: req.body.address,
            contact: req.body.contact,
            completed: req.body.completed,
        })
        await newAssessment.save();
        return next(createSuccess(200, "User assessment displayed"))
    }
    catch (error) {
        return next(createError(500, "Something went wrong"))
    }
}
//get all assessment

const getAllAssessments = async (req, res, next) => {
    try {
        const assessments = await Assessment.find();
        return next(createSuccess(200, "Get all Assessment ", assessments));

    } catch (error) {
        return next(createError(500, "Internal Server Error!"))
    }
}

//for update

const updateAssessment = async (req, res, next) => {
    try {
        const { id } = req.params;
        const assessment = await Assessment.findByIdAndUpdate(id, req.body);
        if (!assessment) {
            return next(createError(404, "assessment Not Found"));
        }
        return next(createSuccess(200, "Assessment Details Updated", assessment));
    } catch (error) {
        return next(createError(500, "Internal Server Error1"))
    }
}
//get a single assessment

const getAssessment = async (req, res, next) => {
    try {
        const assessment = await Assessment.findById(req.params.id);
        if (!assessment) {
            return next(createError(404, "Assessment Not Found"));
        }
        return next(createSuccess(200, "Single Assessment", assessment));
    } catch (error) {
        return next(createError(500, "Internal Server Error1"))
    }
}
//delete assessment
const deleteAssessment = async (req, res, next) => {
    try {
        const { id } = req.params;
        const assessment = await Assessment.findByIdAndDelete(id);
        if (!assessment) {
            return next(createError(404, "assessment Not Found"));
        }
        return next(createSuccess(200, "assessment Deleted", assessment));
    } catch (error) {
        return next(createError(500, "Internal Server Error1"))
    }
}

module.exports = {
    assessment,
    getAllAssessments,
    updateAssessment,
    getAssessment,
    deleteAssessment
}