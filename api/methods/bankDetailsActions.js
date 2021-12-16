var BankDetails = require("../../models/bankDetails");

var functions = {
  addBankDetails: (req, res) => {
    // Check if request body exist
    if (
      !req.body.bankName ||
      !req.body.feeOfSendingMoney ||
      !req.body.costOfMaintenance ||
      !req.body.conversionFee
    ) {
      res.status(400).json({ success: false, msg: "Enter all fields" });
    } else {
      var newBankDetails = BankDetails({
        bankName: req.body.bankName,
        feeOfSendingMoney: req.body.feeOfSendingMoney,
        costOfMaintenance: req.body.costOfMaintenance,
        conversionFee: req.body.conversionFee,
      });
      // Check if bank exist
      BankDetails.find({
        bankName: req.body.bankName,
      }).then((result) => {
        if (!result || result.length === 0)
          newBankDetails.save((err, newBankDetails) => {
            if (err) {
              res
                .status(400)
                .json({ success: false, msg: "Failed to save bank details." });
            } else {
              res.json(newBankDetails);
            }
          });
        else
          res.status(400).json({
            success: false,
            msg: "Bank with that name already exist",
          });
      });
    }
  },
  getBankDetails: (req, res) => {
    BankDetails.find().then((bank) => {
      res.status(200).json({ bank: bank });
    });
  },
  getBankDetailsById: (req, res) => {
    BankDetails.findOne({ _id: req.params.id }).then((bank) => {
      if (!bank)
        res.status(404).json({
          success: false,
          message: "Record doesn't exist!",
        });
      res.status(200).json(bank);
    });
  },
  updateBankDetails: (req, res) => {
    BankDetails.updateOne(
      { _id: req.params.id },
      {
        bankName: req.body.bankName,
        feeOfSendingMoney: req.body.feeOfSendingMoney,
        costOfMaintenance: req.body.costOfMaintenance,
        conversionFee: req.body.conversionFee,
      }
    ).then((bank) => {
      if (!req.params.id)
        res.status(400).json({
          success: false,
          message: "Bad request! Please provide valid id.",
        });
      else if (bank.nModified == 1)
        res.status(200).json({
          success: true,
          message: "Bank updated.",
        });
      else
        res.status(404).json({
          success: false,
          message: "Record doesn't exist or already up to date!",
        });
    });
  },
  deleteBankDetails: (req, res) => {
    BankDetails.deleteOne({ _id: req.params.id }).then((result) => {
      if (!req.params.id)
        res.status(400).json({
          success: false,
          message: "Bad request! Please provide valid id.",
        });
      else if (result.deletedCount == 1)
        res.status(200).json({
          success: true,
          message: "Bank deleted.",
        });
      else
        res.status(404).json({
          success: false,
          message: "Record doesn't exist or already deleted!",
        });
    });
  },
};

module.exports = functions;
