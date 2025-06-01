const express = require("express");
const { Rental } = require("../model/model");

const router = express.Router();

// Get all tools
router.get("/", async (req, res) => {
    try {
        const tools = await Rental.find();
        res.status(200).json(tools);
    } catch (error) {
        console.error("Error fetching tools:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
