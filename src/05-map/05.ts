import {BuildType, HousesType} from '../02-objects/02_02';

export type ManType = {
    name: string,
    age: number
}

const people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18}
]


const dimychTransformator = (man: ManType) => {
    return {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }
}

const devs = [
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Andrew',
        lastName: 'Ivanov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Alexander',
        lastName: 'Petrov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Dmitry',
        lastName: 'Sidorov'
    }
]


const devs3 = people.map(dimychTransformator);
const devs4 = people.map(man => ({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}));


export const getStreetsTittlesOfGovernments = (governmentBuildings: Array<BuildType>) => {
    return governmentBuildings.map(build => build.address.street.title);
}

export const getStreetsTittlesOfHouses = (houses: Array<HousesType>) => {
    return houses.map(house => house.address.street.title);
}

