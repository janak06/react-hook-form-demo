const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  mail: {
    type: String,
  },
  mobile: {
    type: String,
  },
  address: {
    type: String,
  },
  age: {
    type: String,
  },
  blood: {
    type: String,
  },
  country: {
    type: String,
  },
  eNumber: {
    type: String,
  },
  gType: {
    type: String,
  },
  gender: {
    type: String,
  },
  govt: {
    type: String,
  },
  guardian: {
    type: String,
  },
  marital: {
    type: String,
  },
  nationality: {
    type: String,
  },
  occupation: {
    type: String,
  },
  pincode: {
    type: String,
  },
  proof: {
    type: Number,
  },
  religion: {
    type: String,
  },
  state: {
    type: String,
  },
  
});

module.exports = mongoose.model("users", UserSchema);
