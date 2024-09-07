const jwt = require('jsonwebtoken');

const generateAccessToken = (users) => {
    const payload = {
        id: users.id,
        email: users.email,
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '600s' });
};

const verifyAccessToken = (accessToken) => {
    return jwt.verify(accessToken, process.env.JWT_SECRET);
};

module.exports = { generateAccessToken, verifyAccessToken };
