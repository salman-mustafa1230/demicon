var createError = require('http-errors');
const errorCode = require("./../common/ErrorCodes");
const userService = require('../service/user.service');
module.exports = {
    saveRandomUser: async (req, res, next) => {
        try {
           await userService.saveRandomUser(req, res, next);
            res.status(201).json("Success4")
        }catch(e) {
            // console.log("error", e);
            next(createError(errorCode.paramsError, e))
        }
    },
    getUserByCountryPostCode: async (req, res, next) => {
        try {
            const country = req.body.country
            const skip = req.body.pageNo * 5;
            const result = await userService.getUserByCountry(country, skip);
            res.status(200).json({data: result.data, count: result.count})
        }catch(e) {
            console.log("error", e);
            next(createError(errorCode.paramsError, e))
        }
    }
}