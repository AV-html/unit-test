import {BuildType, CityType, HousesType} from '../02-objects/02_02';

export const addMoneyToBudget = (build: BuildType, budget: number) => {
    build.budget += budget;
}


export const repairHouse = (houses: HousesType) => {
    houses.repaired = true;
}

export const toFireStaff = (build: BuildType, staff: number) => {
    build.staffCount -= staff;
}

export const toHireStaff = (build: BuildType, staff: number) => {
    build.staffCount += staff;
}

export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizens. I want you happy. All ${city.citizensNumber} men`;
}