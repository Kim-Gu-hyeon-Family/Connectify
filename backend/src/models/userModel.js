const prisma = require('../config/db');

const createUser = async (email, username, password) => {
    return await prisma.users.create({
        data: {
            email,
            username,
            password,
        },
    });
};

const findUserById = async (id) => {
    return await prisma.users.findUnique({
        where: {
            id,
        },
    });
};

const findUserByEmail = async (email) => {
    return await prisma.users.findUnique({
        where: {
            email,
        },
    });
};

module.exports = { createUser, findUserById, findUserByEmail };
