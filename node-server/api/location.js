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
        const name = req.body.name;
        const descrption = req.body.description;
        const numberOfBathrooms = req.body.numberOfBathrooms
        const numberOfBedrooms = req.body.numberOfBathrooms;
        const streetNumber = req.body.address.streetNumber;
        const streetName = req.body.address.streetName;
        const city = req.body.address.city;
        const province = req.body.address.province;
        const postalCode = req.body.postalCode;
        const latitide = req.body.latitide;
        const longtitude = req.body.longtitude;
        const price = req.body.price;
        const hydroIncluded = req.body.utilities.hydroIncluded;
        const hydroPrice = req.body.utilities.hydroPrice
        const electricalIncluded = req.body.utilities.electricalIncluded;
        const electricalPrice = req.body.utilities.electricalPrice;
        const laundryIncluded = req.body.utilities.laundryIncluded;
        const laundryPrice = req.body.utilities.laundryPrice; 
        const internetIncluded = req.body.utilities.internetIncluded;
        const internetPrice = req.body.utilities.internetPrice;
        const totalUtilitiesPrice = req.body.utilities.totalUtilitiesPrice;
        const hasGym = req.body.other.hasGym;
        const hasBikeRake = req.body.other.hasBikeRake;
        const hasParking = req.body.other.hasParking;
        const parkingPrice = req.body.other.parkingPrice;
        const furnitureIncluded = req.body.other.furnitureIncluded;
        const other = req.body.other.other;
        const available = req.body.available;
        const id = req.params.id;

        // Variables 
        let findLocations;
        let foundLocation = await Location.findById(id);

        // Added a boolean called available in schema. 
        // If a location is not available, then we don't need to update it (delete it instead)
        if (available == false) {
            foundLocation.remove();
        } else {
        // Location is available for rental and can be updated 
        findLocation = await Location.find(
            { 
                "name": name,
                "description": description,
                "numberOfBathrooms": numberOfBathrooms,
                "numberOfBedrooms": numberOfBedrooms,
                "available": available,
                "address": {
                    "streetNumber": streetNumber,
                    "streetName": streetName,
                    "city": city,
                    "province": province,
                    "postalCode": postalCode,
                    "latitude": latitide,
                    "longtitude": longtitude,
                },
                "price": price,
                "utilities": {
                    "hydroIncluded": hydroIncluded,
                    "hydroPrice": hydroPrice,
                    "electricalIncluded": electricalIncluded,
                    "electricalPrice": electricalPrice,
                    "laundryIncluded": laundryIncluded,
                    "laundryPrice": laundryPrice,
                    "internetIncluded": internetIncluded,
                    "internetPrice": internetPrice,
                    "totalUtilitiesPrice": totalUtilitiesPrice
                },
                "other": {
                    "hasGym": hasGym,
                    "hasBikeRake": hasBikeRake,
                    "hasParking": hasParking,
                    "parkingPrice": parkingPrice,
                    "furnitureIncluded": furnitureIncluded,
                    "other": other
                }
            });
            if (findLocations.length == 0) {
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
                foundLocation.address.latitide = latitude;
                foundLocation.address.longtitude = longtitude;
                foundLocation.price = price;
                foundLocation.utilities.hydroIncluded = hydroIncluded;
                await foundLocation.save();
            } else {
                if (findLocations[0].id.toString() != id) {
                    findLocations[0].available = available;
                    await findLocations[0].save();
                    await foundLocation.remove();
                } else {
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
                    foundLocation.address.latitide = latitude;
                    foundLocation.address.longtitude = longtitude;
                    foundLocation.price = price;
                    foundLocation.utilities.hydroIncluded = hydroIncluded;
                    await foundLocation.save();
                }
            }
            console.log(`Location with if ${id} is updated`);
        }
    } catch (e) {
        res.status(400).json("Error: " + e);
    }
});


  module.exports = router