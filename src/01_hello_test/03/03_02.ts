import {CityType, govermentBuildType, houseType} from "../02/02_02"


export const addMoneytoBudget = (s:govermentBuildType, money:number) => {
    s.budget += money;
}

export const reparHouse = (ht: houseType) => {
    ht.repaired = true;
}

export const toFireStaff = (bt: govermentBuildType, staff: number) => {
    bt.staffcount -= staff;
}

export function toHireStaff(bt: govermentBuildType, staff: number) {
    bt.staffcount += staff;
}

export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizens. All ${city.citizensnum} man`;
}

