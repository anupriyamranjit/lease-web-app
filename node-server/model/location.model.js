const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, trim: true },
  description: { type: String },
  numberOfBathrooms: { type: Number, required: true, min: 0 },
  numberOfBedrooms: { type: Number, required: true, min: 0 },
  address: {
    streetNumber: { type: Number, required: true, min: 0 },
    streetName: { type: String, required: true },
    city: { type: String, required: true },
    province: { type: String, required: true },
    postalCode: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  price: { type: Number, required: true, min: 0 },
  utilities: {
    hydroIncluded: { type: Boolean },
    hydroPrice: { type: Number, min: 0 },
    electricalIncluded: { type: Boolean },
    electricalPrice: { type: Number, min: 0 },
    laundryIncluded: { type: Boolean },
    laundryPrice: { type: Number, min: 0 },
    internetIncluded: { type: Boolean },
    internetPrice: { type: Number, min: 0 },
    totalUtilitiesPrice: { type: Number, min: 0 },
  },
  other: {
    hasGym: { type: Boolean },
    hasBikeRake: { type: Boolean },
    hasParking: { type: Boolean },
    parkingPrice: { type: Number, min: 0 },
    furnitureIncluded: { type: Boolean },
    other: { type: String },
  },
  isSublease: { type: Boolean }
});

const Location = mongoose.model("Location", schema);

module.exports = Location;
