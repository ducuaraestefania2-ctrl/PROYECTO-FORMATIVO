const express = require("express");
require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

//const { sendEmail } = require("./services/emailService");

const db = require("./config/conectionDB");
db.authenticate()
    .then(() => {
        console.log("✅ Conectado a la base de datos:", db.config.database);
    })
    .catch((error) => {
        console.error("❌ Error de conexión:", error);
    });

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const userRoute = require("./routes/userRoute");
const mortalityRoute = require("./routes/mortalityRoute");
const mountingRoute = require("./routes/mountingRoute");
const deliveryRoute = require("./routes/deliveryRoute");
const weightRoute = require("./routes/weightRoute");
const healthRoute = require("./routes/healthRoute");
const ovineRoute = require("./routes/ovineRoute");
const feedingRoute = require("./routes/feedingRoute");
const birthRoute = require("./routes/birthRoute");
const responsiblesRoute = require("./routes/responsiblesRoute");
const authRouter = require("./routes/authRoute");
//const emailRoute = require("./routes/emailRoute");

const app = express();
const PORT = process.env.PORT || 3001;

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Ovinos",
            version: "1.0.0",
            description: "Documentación de la API"
        },
        servers: [
            {
                url: `http://localhost:${PORT}`
            }
        ]
    },
    apis: [path.join(__dirname, "routes/*.js")]
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Middlewares globales
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

// Documentación
app.use(
    "/api/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

// Registro de Rutas de la API
app.use(cors());
app.use("/api/user", userRoute);
app.use("/api/mortality", mortalityRoute);
app.use("/api/mounting", mountingRoute);
app.use("/api/delivery", deliveryRoute);
app.use("/api/weight", weightRoute);
app.use("/api/health", healthRoute);
app.use("/api/ovine", ovineRoute);
app.use("/api/feeding", feedingRoute);
app.use("/api/birth", birthRoute);
app.use("/api/responsibles", responsiblesRoute);
app.use("/api/auth", authRouter);
//app.use("/api/email", emailRoute);

app.get("/", (req, res) => {
    res.send("Servidor funcionando");
});

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Ruta no encontrada",
        route: req.originalUrl,
        method: req.method
    });
});

app.listen(PORT, () => {
    console.log(`App corriendo en el puerto ${PORT}`);
    console.log(`Swagger en http://localhost:${PORT}/api/docs`);
});