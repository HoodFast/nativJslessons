import {CityType} from "../02/02_02";

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
                    title: "White street"
                }
            }
        }, {
            buildAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: "White street"
                }
            }
        }],
        govermentBuild: [{
            type: "HOSPITAL",
            budget:500,
            staffcount:1000,
            address: {
                number: 100,
                street: {
                    title: "White street"
                }
            }
        },],
        citizensnum: 100000
    }
})

test('sum should be correct', () => {
    expect(city.houses.length).toBe(3);
    expect(city.houses[0].buildAt).toBe(2012);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("White street");

})

test('gover to be correct', () => {
    expect(city.govermentBuild[0].type).toBe("HOSPITAL");
    expect(city.govermentBuild[0].budget).toBe(500);
    expect(city.govermentBuild[0].staffcount).toBe(1000);
    expect(city.govermentBuild[0].address.street.title).toBe("White street");

})
