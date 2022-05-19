// export const user = {
//     '0': {id: 101, name: 'Pavel'},
//     '1': {id: 102, name: 'Maks'},
//     '2': {id: 103, name: 'Victor'}
// }


type UsersType = {
    [key: string]: { id: number, name: string }
}

// Как быстро можем вытащить данные по id?

// Ассоциативный массив
export const users: UsersType = {
    '101': {id: 101, name: 'Pavel'},
    '102': {id: 102, name: 'Maks'},
    '103': {id: 103, name: 'Victor'}
}
// O(1) - достать элемент
// users[101]

// Добавить элемент
let user = {id: 100500, name: 'Igor'}
users[user.id] = user
// delete users[user.id]

// Массив
export const usersArray = [
    {id: 101, name: 'Pavel'},
    {id: 102, name: 'Maks'},
    {id: 103, name: 'Victor'}
]

// O(n), n - кол-во элементов в массиве
// userArray.find(u => u.id === 1)


// usersArray.push() - добавить
// usersCopy = [...usersArray.filter(), user] - добавить
// let users = usersArray.filter(u => u.id !== user.id) - удалить


// Добавить элемент


