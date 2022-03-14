const request = require("supertest");
const app = require("../app");
const Location = require('../model/location.model')
const TestModel = require('../model/test.model')


describe("GET Routes", () => {
    beforeAll(async () => {
        await TestModel.deleteMany();
    });

    it('GET Test', async () => {
        const res = await request(app).get('/api/test')
        expect(res.statusCode).toEqual(200)
    })

    it('GET Test Single', async () => {
        const item = await TestModel.create({
            name: "Test Item One",
            quantity: 21
        })
        const res = await request(app).get(`/api/test/${item.id}`)
        expect(JSON.parse(res.text).name).toBe("Test Item One")
        expect(JSON.parse(res.text).quantity).toEqual(21)
        expect(res.statusCode).toEqual(200)
    })
});

