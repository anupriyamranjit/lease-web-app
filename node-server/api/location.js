const express = require('express');
const Location = require('../model/location.model')
const router = express.Router();

// GET Route: All Locations
router.route('/').get(async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const location = await Location.find()
            .limit(limit)
            .skip((page - 1) * limit)
            .exec()
        res.json(location);
    } catch (e) {
        res.status(400).json("Error: " + e);
    }
})


router.route('/:id').get(async (req, res) => {
    const { id } = req.params
    try {
        const location = await Location.findById(id);
        res.json(location);
    } catch (e) {
        res.status(404).json("Error: " + e);
    }
})

// POST Route: Creates New Location
router.route('/addLocation').post(async (req, res) => {
    try {
        // Constants
        const {
            name, description, numberOfBathrooms, numberOfBedrooms,
            address: { streetNumber, streetName, city, province, postalCode, latitude, longtitude },
            price,
            utilities: { hydroIncluded, hydroPrice, electricalIncluded, electricalPrice, laundryIncluded,
                laundryPrice, internetIncluded, internetPrice, totalUtilitiesPrice },
            other: { hasGym, hasBikeRake, hasParking, parkingPrice, furnitureIncluded, other }
        } = req.body;

        // Variables
        let findLocation;
        let newLocation;

        // Create a new location if a location with the same name does not exist
        findLocation = await Location.find({ "name": name });
        if (findLocation.length === 0) {
            newLocation = new Location({
                name: name,
                description: description,
                numberOfBathrooms: numberOfBathrooms,
                numberOfBedrooms: numberOfBedrooms,
                address: {
                    streetNumber: streetNumber,
                    streetName: streetName,
                    city: city,
                    province: province,
                    postalCode: postalCode,
                    latitude: latitude,
                    longtitude: longtitude,
                },
                price: price,
                utilities: {
                    hydroIncluded: hydroIncluded,
                    hydroPrice: hydroPrice,
                    electricalIncluded: electricalIncluded,
                    electricalPrice: electricalPrice,
                    laundryIncluded: laundryIncluded,
                    laundryPrice: laundryPrice,
                    internetIncluded: internetIncluded,
                    internetPrice: internetPrice,
                    totalUtilitiesPrice: totalUtilitiesPrice
                },
                other: {
                    hasGym: hasGym,
                    hasBikeRake: hasBikeRake,
                    hasParking: hasParking,
                    parkingPrice: parkingPrice,
                    furnitureIncluded: furnitureIncluded,
                    other: other
                }
            });
            await newLocation.save();
            res.json('Location with name: ${name} was added!')
        } else {
            // should we be doing something else here?
            throw "A location with the same name already exists!";
        }
    } catch (e) {
        res.status(400).json('Error: ' + e);
    }
})

// DELETE Route: Delete Location
router.route('/:id').delete(async (req, res) => {
    try {
        // Constants
        const { id } = req.params;

        // Find location by id and delete from db
        foundLocation = await Location.findById(id);
        await foundLocation.remove();
        res.json(`Location with id ${id} was deleted!`);

    } catch (e) {
        res.status(400).json('Error: ' + e);
    }
})

// Patch Route: Single Location
router.route('/update/:id').patch(async (req, res) => {
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

        if (foundLocation != null) {
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

