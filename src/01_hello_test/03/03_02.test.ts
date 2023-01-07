import {CityType} from "../02/02_02";
import {addMoneytoBudget, createMessage, reparHouse, toFireStaff, toHireStaff} from "./03_02";


let city: CityType

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            buildAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: "White street"
                }
            }
        }, {
            buildAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: "Happy street"
                }
            }
        }, {
            buildAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: "South street"
                }
            }
        }],
        govermentBuild: [{
            type: "HOSPITAL",
            budget:200000,
            staffcount:1000,
            address: {
                number: 100,
                street: {
                    title: "South street"
                }
            }
        },
            {
                type: "Fire-station",
                budget:500000,
                staffcount:1000,
                address: {
                    number: 100,
                    street: {
                        title: "Central street"
                    }
                }
            },
        ],
        citizensnum: 100000
    }
})

test("Budget change money", () => {

    addMoneytoBudget(city.govermentBuild[0], 100000);

    expect(city.govermentBuild[0].budget).toBe(300000)
})

test("House should be repared", () => {
    reparHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy()
})

test("staff should be increased", () => {
    toFireStaff(city.govermentBuild[0], 20)
    toFireStaff(city.govermentBuild[1], 100)

    expect(city.govermentBuild[0].staffcount).toBe(980)
    expect(city.govermentBuild[1].staffcount).toBe(900)
})

test("staff should be repared", () => {
    toHireStaff(city.govermentBuild[0], 20)

    expect(city.govermentBuild[0].staffcount).toBe(1020)
})


test("Hellow correct", () => {
    const message = createMessage(city);
    expect(message).toBe("Hello New York citizens. All 100000 man")
})