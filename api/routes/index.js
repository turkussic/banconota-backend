const express = require("express");
const router = express.Router();
const bankDetailsActions = require("../methods/bankDetailsActions");

// Bank
router.post("/bank", bankDetailsActions.addBankDetails);
router.get("/bank", bankDetailsActions.getBankDetails);
router.get("/bank/:id", bankDetailsActions.getBankDetailsById);
router.put("/bank/:id", bankDetailsActions.updateBankDetails);
router.delete("/bank/:id", bankDetailsActions.deleteBankDetails);

module.exports = router;
