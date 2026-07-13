const express = require("express");
const router = express.Router();

const {
    getAllFeedings,
    getFeedingById,
    createFeeding,
    updateFeeding,
    deleteFeeding
} = require("../controllers/feedingController");

router.get("", getAllFeedings);
router.post("", createFeeding);

router.get("/:id", getFeedingById);
router.put("/:id", updateFeeding);
router.delete("/:id", deleteFeeding);

module.exports = router;