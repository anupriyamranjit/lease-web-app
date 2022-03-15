const request = require("supertest");
const app = require("../app");
const Location = require('../model/location.model')
const TestModel = require('../model/test.model')

const testLoc = {
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
}

const testLoc2 = {
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
    price: 550,
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
}

describe("GET Routes", () => {
    beforeAll(async () => {
        await Location.deleteMany();
    });

    it('GET Location', async () => {
        const res = await request(app).get('/api/location')
        expect(res.statusCode).toEqual(200)
    })

    it('GET Location Single', async () => {
        const item = await Location.create(testLoc)
        const res = await request(app).get(`/api/location/${item._id}`)
        expect(JSON.parse(res.text).name).toBe("CMH")
        expect(JSON.parse(res.text).description).toBe("Waterloo Residence Builing")
        expect(JSON.parse(res.text).numberOfBathrooms).toEqual(0)
        expect(JSON.parse(res.text).numberOfBedrooms).toEqual(0)
        expect(JSON.parse(res.text).address.streetNumber).toEqual(165)
        expect(JSON.parse(res.text).address.streetName).toBe("University Avenue W")
        expect(JSON.parse(res.text).address.city).toBe("Waterloo")
        expect(JSON.parse(res.text).address.province).toBe("Ontario")
        expect(JSON.parse(res.text).address.postalCode).toBe("N2L 3E8")
        expect(JSON.parse(res.text).address.latitude).toEqual(43.49041374273173)
        expect(JSON.parse(res.text).address.longtitude).toEqual(-80.54281045857041)
        expect(JSON.parse(res.text).price).toEqual(450)
        expect(JSON.parse(res.text).utilities.hydroIncluded).toBe(true)
        expect(JSON.parse(res.text).utilities.hydroPrice).toEqual(45)
        expect(JSON.parse(res.text).utilities.electricalIncluded).toBe(false)
        expect(JSON.parse(res.text).utilities.electricalPrice).toBeNull()
        expect(JSON.parse(res.text).utilities.laundryIncluded).toBe(true)
        expect(JSON.parse(res.text).utilities.laundryPrice).toEqual(23)
        expect(JSON.parse(res.text).utilities.internetIncluded).toBe(false)
        expect(JSON.parse(res.text).utilities.internetPrice).toBeNull()
        expect(JSON.parse(res.text).utilities.totalUtilitiesPrice).toEqual(68)
        expect(JSON.parse(res.text).other.hasGym).toBe(true)
        expect(JSON.parse(res.text).other.hasBikeRake).toBe(true)
        expect(JSON.parse(res.text).other.hasParking).toBe(false)
        expect(JSON.parse(res.text).other.parkingPrice).toEqual(0)
        expect(JSON.parse(res.text).other.furnitureIncluded).toBe(true)
        expect(JSON.parse(res.text).other.other).toBe("Hi, welcome to CMH")
        expect(res.statusCode).toEqual(200)
    })
});

describe("POST Routes", () => {
    beforeAll(async () => {
        await Location.deleteMany();
    });

    it('POST New Location', async () => {
        const res = await request(app)
            .post('/api/location/addLocation')
            .send(testLoc)

        expect(res.statusCode).toEqual(200)
        const findLoc = await Location.find({ name: "CMH" })
        expect(findLoc[0].name).toBe("CMH")
        expect(findLoc[0].description).toBe("Waterloo Residence Builing")
        expect(findLoc[0].other.other).toBe("Hi, welcome to CMH")
    });
});

describe("DELETE Routes", () => {
    beforeAll(async () => {
        await Location.deleteMany();
    });

    it('DELETE Location', async () => {
        const loc = await Location.create(testLoc)
        const res = await request(app).delete(`/api/location/delete/${loc._id}`)
        expect(res.statusCode).toEqual(200)
        const findLoc = await Location.findById(loc._id)
        expect(findLoc).toBeNull()
    });
});


describe("PATCH Routes", () => {
    beforeAll(async () => {
        await Location.deleteMany();
    });
    it("Patch Name and Merge", async () => {
        const item1 = await Location.create(testLoc);
        const item2 = await Location.create(testLoc2);
        
        updatedData = {
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
            price: item2.price,
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
        }
        const res = await request(app).patch(`/api/location/update/${item2._id}`).send(updatedData)
        expect(res.statusCode).toEqual(200)
        find = await Inventory.findById(item1._id);
        expect(find.price).toEqual(550)
    })
    it("Patch Name and No Merge", async () => {
        const item1 = await Location.create(testLoc);

        updatedData = {
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
            price: item1.price,
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
        }
        const res = await request(app).patch(`/api/location/update/${item1._id}`).send(updatedData)
        expect(res.statusCode).toEqual(200)
        find = await Inventory.findById(item1._id);
        expect(find.price).toEqual(450)
    })
});
