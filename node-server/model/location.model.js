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
const test = new Location({
  name: "CMH",
  description: "Waterloo Residence Builing",
  numberOfBathrooms: 0,
  numberOfBedrooms: 0,
  address: {
    streetNumber: 165,
    streetName: "University Avenue W",
    city: "Waterloo",
    province: "Ontario",
    postalCode: "N2L 3E8",
    latitude: 43.49041374273173,
    longitude: -80.54281045857041,
  },
  price: 450,
  utilities: {
    hydroIncluded: true,
    hydroPrice: 45,
    electricalIncluded: false,
    electricalPrice: null,
    laundryIncluded: true,
    laundryPrice: 23,
    internetIncluded: false,
    internetPrice: null,
    totalUtilitiesPrice: 68,
  },
  other: {
    hasGym: true,
    hasBikeRake: true,
    hasParking: false,
    parkingPrice: 0,
    furnitureIncluded: true,
    other: "Hi, welcome to CMH",
  },
});
test.save(function (err) {
  if (err) return console.log(err)
});

module.exports = Location;
