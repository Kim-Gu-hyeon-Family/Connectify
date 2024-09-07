const { verifyAccessToken } = require('../utils/jwt');

const authenticateAccessToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const accessToken = authHeader && authHeader.split(' ')[1];
    if (!accessToken) return res.sendStatus(401);

    try {
        const users = verifyAccessToken(accessToken);
        req.users = users;
        next();
    } catch (error) {
        res.sendStatus(403);
    }
};

module.exports = authenticateAccessToken;
