import {CityType} from '../02-objects/02_02';
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from './04';

test('should take old men older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];


    // const predicate = (age: number) => {
    //     return age > 90
    // }

    const oldAges = ages.filter((age) => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})


test('should get only completed tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Sugar', isDone: true},
        {id: 4, title: 'Salt', isDone: false},
    ]

    const completedTask = tasks.filter(task => task.isDone)


    expect(completedTask.length).toBe(2);
    // expect(completedTask[0].title).toBe('Milk');
    expect(completedTask[0].id).toBe(2);
    // expect(completedTask[0].isDone).toBe(true);

    // expect(completedTask[1].title).toBe('Sugar');
    expect(completedTask[1].id).toBe(3);
    // expect(completedTask[1].isDone).toBe(true);
})


let newCity: CityType;

beforeEach(() => {
    newCity = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Happy street'
                    }
                }
            }
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

// 01. ?????????????????? ?????? HouseType (???????????????? ???????????????????? id ???? 1 ?? ???? ??????????????????????)
// 02. ???????????????? ?? ?????? ???? ?????????? ?????? ???????? ??????????????, ?????????? ?????????? ????????????


test('House should be destroyed', () => {
    demolishHousesOnTheStreet(newCity, 'Happy street');

    expect(newCity.houses.length).toBe(1);
    expect(newCity.houses[0].id).toBe(1);

})

// 03. ???????????? ????????????????, ?????? ???????????????? ???????????? 500 ??????????
test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(newCity.governmentBuildings, 500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION')
})



