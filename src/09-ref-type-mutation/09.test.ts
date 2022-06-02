import {increaseAge, UserType} from './09';


test('object test', () => {
    const user: UserType = {
        name: 'Alex',
        age: 24,
        address: {
            title: 'Moscow'
        }
    }

    increaseAge(user)
    expect(user.age).toBe(25);

    const superman = user;
    increaseAge(superman)
    expect(user.age).toBe(26);
})

test('array test', () => {
    const users: Array<UserType> = [
        {
            name: 'Alex',
            age: 24,
            address: {
                title: 'Moscow'
            }
        },
        {
            name: 'Liza',
            age: 23,
            address: {
                title: 'Moscow'
            }
        }
    ]

    const admins = users;
    admins.push({name: 'Yaroslav', age: 0, address: {title: 'Moscow'}})

    expect(users[2].name).toBe('Yaroslav')
})


test('ref type', () => {
    const user1: UserType = {
        name: 'Alex',
        age: 24,
        address: {
            title: 'Moscow'
        }
    }

    const user2: UserType = {
        name: 'Liza',
        age: 23,
        address: user1.address
    }
    user2.address.title = 'Phuket'

    expect(user1.address).toBe(user1.address)
    expect(user1.address.title).toBe('Phuket')
})

test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e']
    letters.sort()
    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
})

