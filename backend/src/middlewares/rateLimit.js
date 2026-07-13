const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 30,
    message:{
        success:false,
        message: "Demesiadas solicitudes. Intenta nuevamente en 1 minuto."
    }
});

module.exports = limiter;