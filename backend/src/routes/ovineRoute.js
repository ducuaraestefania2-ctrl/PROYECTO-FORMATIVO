const express = require("express");
const router = express.Router();

const {
    getAllOvine,
    getOvineById,
    createOvine,
    updateOvine,
    deleteOvine
} = require("../controllers/ovineController");

router.get("/", getAllOvine);
router.post("/", createOvine);

router.get("/:id", getOvineById);
router.put("/:id", updateOvine);
router.delete("/:id", deleteOvine);

module.exports = router;