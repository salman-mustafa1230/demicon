var createError = require('http-errors');
const errorCode = require("./../../common/ErrorCodes");
const userModel = require('../../model/userSchema');
const _ = require('lodash');
const axios = require('axios').default;
const randomUserApiUrl = process.env.RANDOM_USER_API_URL;
module.exports = {
    getApiCall: async () => {
        const response = await axios.get(`${randomUserApiUrl}?inc=gender,name,location,email`);
            // extra check for error incase not getting proper http code
            // console.log(response.data);
            if(typeof response.error != undefined) {
                const result = _.get(response.data, "results")[0];
                const {first, last, title} = result.name;
                const {country, state, postcode, city} = result.location;
                console.log({
                    ...result,
                    fullName: `${first} ${last}`,
                    title,
                    country,
                    state,
                    postCode: postcode,
                    city
                } )
                return {
                    ...result,
                    fullName: `${first} ${last}`,
                    title,
                    country,
                    state,
                    postCode: postcode,
                    city
                } 
            }else {
                throw new Error( "record not found");
            }
    },
    callApi: async () => {
        try {
            const response = await module.exports.getApiCall();
                const user = new userModel(response);
                user.save();
                return user;
        } catch(e) {
            // console.log("error", e);
            throw new Error(e);
        }
    }
}