const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]
    if (!token) return res.status(401).json({ message: '토큰이 없습니다' })

    jwt.verify(token, 'access_secret_key', (err, user) => {
        if (err) return res.status(403).json({ message: '유효하지 않은 토큰입니다' })
        req.user = user
        next()
    })
}

module.exports = authenticateToken