var createError = require('http-errors');
const errorCode = require("./../common/ErrorCodes");
const userModel = require('../model/userSchema');
const randomUserApiService = require('./externalApi/random.user')
module.exports = {
    saveRandomUser: async (req, res, next) => {
        try {
           return randomUserApiService.callApi();
        }catch(e) {
            // console.log("error123", e);
            next(createError(errorCode.paramsError, e));
        }
    },
    getUserByCountry: async (country, skip) => {
        const data = await userModel.find({country}).select("fullName gender email country").skip(skip).limit(5).sort( '-_id' );
        const count = await userModel.count({country});
        return {data, count}
    }
}