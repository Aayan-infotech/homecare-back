const Sign = require('../models/signModel');
const createError = require('../middleware/error')
const createSuccess = require('../middleware/success')

const sign = async (req, res, next) => {
    try {
        // const role = await Role.find({ role: 'User' });
        const newSign = new Sign({
            paymentInsurance: req.body.paymentInsurance,
            clientSignature: req.body.clientSignature,
            clientDate: req.body.clientDate,
            guarantorSignature: req.body.guarantorSignature,
            guarantorDate: req.body.guarantorDate,
            representativeSignature: req.body.representativeSignature,
            representativeDate: req.body.representativeDate,

        })
        await newSign.save();
        // return res.status(200).json("User Signup Successfully")
        return next(createSuccess(200, "User signed successfully"))
    }
    catch (error) {
        //return res.status(500).send("Something went wrong")
        return next(createError(500, "Something went wrong"))
    }
};

const getAllSigns = async (req, res, next) => {
    try {
        const signs = await Sign.find();
        return next(createSuccess(200, "Get all signature", signs));

    } catch (error) {
        return next(createError(500, "Internal Server Error!"))
    }
}

const getSign = async (req, res, next) => {
    try {
        const sign = await Sign.findById(req.params.id);
        if (! sign) {
            return next(createError(404, "User Not Found"));
        }
        return next(createSuccess(200, "Single Profile",  sign));
    } catch (error) {
        return next(createError(500, "Internal Server Error1"))
    }
}

const updateSign = async (req, res, next) => {
    try {
        const { id } = req.params;
        const sign = await Sign.findByIdAndUpdate(id, req.body);
        if (!sign) {
            return next(createError(404, "signature Not Found"));
        }
        return next(createSuccess(200, "signature Details Updated", sign));
    } catch (error) {
        return next(createError(500, "Internal Server Error1"))
    }
}

const deleteSign = async (req, res, next) => {
    try {
        const { id } = req.params;
        const sign = await Sign.findByIdAndDelete(id);
        if (!sign) {
            return next(createError(404, "signature Not Found"));
        }
        return next(createSuccess(200, "Signature Deleted", sign));
    } catch (error) {
        return next(createError(500, "Internal Server Error1"))
    }
}


module.exports = {
    sign, getAllSigns,updateSign , deleteSign,getSign
}