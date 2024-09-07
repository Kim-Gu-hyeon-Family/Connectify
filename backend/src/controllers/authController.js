const { createUser, findUserByEmail } = require('../models/userModel');
const { hashPassword, comparePassword } = require('../utils/bcrypt');
const { generateAccessToken } = require('../utils/jwt');

const register = async (req, res) => {
    const { email, username, password } = req.body;
    try {
        const hashedPassword = await hashPassword(password);
        const users = await createUser(email, username, hashedPassword);
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const users = await findUserByEmail(email);
        if (!users) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        const isMatch = await comparePassword(password, users.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        const accessToken = generateAccessToken(users);
        res.setHeader('Authorization', `Bearer ${accessToken}`);
        res.json({
            message: 'Logged in successfully',
            accessToken: accessToken
        });
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
};

const authenticate = async (req, res) => {
    const users = req.users;
    try {
        if (!users) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({
            id: users.id,
            email: users.email,
            username: users.username,
            password: users.password
        });
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving user details' });
    }
};

module.exports = { register, login, authenticate };
