const express = require("express");
const router = express.Router();

const {
    getAllHealthRecords,
    getHealthRecordById,
    createHealthRecord,
    updateHealthRecord,
    deleteHealthRecord
} = require("../controllers/healthController");

router.get("", getAllHealthRecords);
router.post("", createHealthRecord);

router.get("/:id", getHealthRecordById);
router.put("/:id", updateHealthRecord);
router.delete("/:id", deleteHealthRecord);

module.exports = router;