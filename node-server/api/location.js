const express = require('express');
const Location = require('../model/location.model')
const router = express.Router();

// GET Route: All Locations
router.route('/').get(async (req, res) => {
    try {
        await Location.create({
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
        })
        const location = await Location.find();
        res.json(location);
    } catch(e){
        res.status(400).json("Error: " + e);
    }
  })


  // Patch Route: Single Location

router.route('/update/:id').patch(async (req, res ) => {
    try {
        // Constants
        const {
            name, description, numberOfBathrooms, numberOfBedrooms,
            address: { 
                streetNumber, streetName, city, province, postalCode, latitude, longtitude 
            },
            price,
            utilities: { 
                hydroIncluded, hydroPrice, electricalIncluded, electricalPrice, laundryIncluded,
                laundryPrice, internetIncluded, internetPrice, totalUtilitiesPrice 
            },
            other: { 
                hasGym, hasBikeRake, hasParking, parkingPrice, furnitureIncluded, other
             }
        } = req.body;
      
        // Variables 
        let foundLocation = await Location.findById(id);

        if ( foundLocation != null ) {
            console.log("Error: Location ID does not exist")
        } else {
            console.log("Location ID was found")
            foundLocation.name = name;
            foundLocation.description = description;
            foundLocation.numberOfBathrooms = numberOfBathrooms;
            foundLocation.numberOfBedrooms = numberOfBedrooms;
            foundLocation.available = available;
            foundLocation.address.streetNumber = streetNumber;
            foundLocation.address.streetName = streetName;
            foundLocation.address.city = city;
            foundLocation.address.province = province;
            foundLocation.address.postalCode = postalCode;
            foundLocation.address.latitude = latitude;
            foundLocation.address.longtitude = longtitude;
            foundLocation.price = price;
            foundLocation.utilities.hydroIncluded = hydroIncluded;
            foundLocation.utilities.hydroPrice = hydroPrice;
            foundLocation.utilities.electricalIncluded = electricalIncluded;
            foundLocation.utilities.electricalPrice = electricalPrice;
            foundLocation.utilities.internetIncluded = internetIncluded;
            foundLocation.utilities.internetPrice = internetPrice;
            foundLocation.utilities.laundryIncluded = laundryIncluded;
            foundLocation.utilities.laundryPrice = laundryPrice;
            foundLocation.utilities.totalUtilitiesPrice = totalUtilitiesPrice;
            foundLocation.other.hasGym = hasGym;
            foundLocation.other.hasBikeRake = hasBikeRake;
            foundLocation.other.hasParking = hasParking;
            foundLocation.other.parkingPrice = parkingPrice;
            foundLocation.other.furnitureIncluded = furnitureIncluded;
            foundLocation.other.other = other;
            await foundLocation.save();
            console.log(`Location with id ${id} is updated`);
        } 
    } catch (e) {
        res.status(400).json("Error: " + e);
    }
});

module.exports = router