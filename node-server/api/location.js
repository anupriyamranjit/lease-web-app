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
