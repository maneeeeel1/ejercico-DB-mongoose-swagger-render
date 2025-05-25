const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');
const taskRoutes = require('./routes/tasks');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs")


dbConnection();

app.use(express.json());
app.use('/', taskRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));