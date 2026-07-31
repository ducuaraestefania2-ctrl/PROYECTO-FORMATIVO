const express = require("express");
const router = express.Router();

const {
    getAllHealths,
    getHealthById,
    createHealth,
    updateHealth,
    deleteHealth
} = require("../controllers/healthController");


router.get("", getAllHealths);

router.post("", createHealth);

router.get("/:id", getHealthById);

router.put("/:id", updateHealth);

router.delete("/:id", deleteHealth);


module.exports = router;