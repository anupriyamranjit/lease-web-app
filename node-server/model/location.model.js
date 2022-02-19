const mongoose = require("mongoose")

const schema = new mongoose.Schema({ 
    name: String,
    description: String,
    numberOfBathrooms: Number,
    numberOfBedrooms: Number,
    available: Boolean,
    address: {
        streetNumber: Number,
        streetName: String,
        city: String,
        province: String,
        postalCode: String,
        latitude: Number,
        longtitude: Number,
    },
    price: Number,
    utilities: {
        hydroIncluded: Boolean,
        hydroPrice: Number,
        electricalIncluded: Boolean,
        electricalPrice: Number,
        laundryIncluded: Boolean,
        laundryPrice: Number,
        internetIncluded: Boolean,
        internetPrice: Number,
        totalUtilitiesPrice: Number
    },
    other: {
        hasGym: Boolean,
        hasBikeRake: Boolean,
        hasParking: Boolean,
        parkingPrice: Number,
        furnitureIncluded: Boolean,
        other: String
    }
});

const Location = mongoose.model('Location', schema);
const test = new Location ( {
    name: 'CMH',
            description: 'Waterloo Residence Builing',
            numberOfBathrooms: 0,
            numberOfBedrooms:0,
            address: {
                streetNumber: 165,
                streetName: 'University Avenue W',
                city: 'Waterloo',
                province: 'Ontario',
                postalCode: 'N2L 3E8',
                latitude: 43.49041374273173,
                longtitude:  -80.54281045857041,
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
                totalUtilitiesPrice: 68
            },
            other: {
                hasGym: true,
                hasBikeRake: true,
                hasParking: false,
                parkingPrice: 0,
                furnitureIncluded: true,
                other: 'Hi, welcome to CMH'
            }
});
test.save(function (err) {
    if (err) return handleError(err);
    // saved!
  });

module.exports = Location