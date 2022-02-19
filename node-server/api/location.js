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
            numberOfBedrooms: 0,
            address: {
                streetNumber: 165,
                streetName: 'University Avenue W',
                city: 'Waterloo',
                province: 'Ontario',
                postalCode: 'N2L 3E8',
                latitude: 43.49041374273173,
                longtitude: -80.54281045857041,
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
    } catch (e) {
        res.status(400).json("Error: " + e);
    }
})

// POST Route: Creates New Location
router.route('/addLocation').post(async (req, res) => {
    try {
        // Constants
        const name = req.body.name;
        const description = req.body.description;
        const numberOfBathrooms = req.body.numberOfBathrooms
        const numberOfBedrooms = req.body.numberOfBathrooms;
        const streetNumber = req.body.address.streetNumber;
        const streetName = req.body.address.streetName;
        const city = req.body.address.city;
        const province = req.body.address.province;
        const postalCode = req.body.address.postalCode;
        const latitude = req.body.address.latitude;
        const longtitude = req.body.address.longtitude;
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

        // Variables
        let findLocation;
        let newLocation;

        findLocation = await Location.find({ "name": name });
        if (findLoc.length === 0) {
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
                    electricalPrice: electricalPricel,
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
        const id = req.params.id;

        foundLocation = await Location.findById(id);
        await foundLocation.remove();
        res.json(`Location with id ${id} was deleted!`);
    } catch (e) {
        res.status(400).json('Error: ' + e);
    }
})

module.exports = router