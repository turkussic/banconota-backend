const mongoose = require("mongoose");

const bankDetailsSchema = new mongoose.Schema({
  bankName: {
    type: String,
    require: true,
  },
  feeOfSendingMoney: {
    type: String,
    require: true,
  },
  costOfMaintenance: {
    type: String,
    require: true,
  },
  conversionFee: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("BankDetails", bankDetailsSchema);
