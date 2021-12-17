const mongoose = require("mongoose");

const bankDetailsSchema = new mongoose.Schema({
  isLocal: {
    type: Boolean,
    require: true,
  },
  bankName: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  fax: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  boardChairman: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  t0: {
    type: Number,
    require: true,
  },
  t1: {
    type: Number,
    require: true,
  },
  t2: {
    type: Number,
    require: true,
  },
  t3: {
    type: Number,
    require: true,
  },
  feeOfSending: {
    type: Number,
    require: true,
  },
  feeOfReceiving: {
    type: Number,
    require: true,
  },
  conversionRate: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("BankDetails", bankDetailsSchema);
