import {BuildType, CityType} from '../02-objects/02_02';

const ages = [18, 20, 22, 1, 100, 90, 14];

// Функция, которая возвращает true / false
// const predicate = () => {
//     return age > 90
// }

// const oldAges = [100];


export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(house => house.address.street.title !== street);
}


export const getBuildingsWithStaffCountGreaterThen = (governmentBuildings: Array<BuildType>, count: number) => {
    return governmentBuildings.filter(build => build.staffCount > 500);
}