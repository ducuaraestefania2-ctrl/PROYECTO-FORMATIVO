const express = require("express");
const router = express.Router();


const {
    getAllMountings,
    getMountingById,
    createMounting,
    updateMounting,
    deleteMounting
} = require("../controllers/mountingController");

router.get("", getAllMountings);
router.post("", createMounting);

router.get("/:id", getMountingById);
router.put("/:id", updateMounting);
router.delete("/:id", deleteMounting);

module.exports = router;