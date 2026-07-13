const { Response } = require("../functions/response");

const login = (req, res) => {
    const { userName, password } = req.body;

    if (userName == "" || password == "") {
        res.status(400);
        const response = new Response(
            "Error en login",
            null,
            "usuario y contraseña no contiene informacion"
        );

        return res.json(response.json);
    }

    res.json({ message: "Login successful" });
};

module.exports = {
    login,
};