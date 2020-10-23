const jwt = require('jsonwebtoken');
const moment = require('moment')

const config = require('../../config/config');

function createToken (user) {
    const payload = {
        sub: user.username,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix(),
    }
    console.log(payload);

    return jwt.encode(payload, config.SECRET_TOKEN)
}   



module.exports = {
    createToken
}