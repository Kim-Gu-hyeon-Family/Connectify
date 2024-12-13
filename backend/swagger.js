const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Documentation",
            version: "1.0.0",
            description: "Authentication API documentation.",
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    // Swagger 주석이 포함된 파일 경로
    apis: ["./routes/authRoutes.js", "./routes/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
