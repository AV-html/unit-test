type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType;


beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Pavel'},
        '102': {id: 102, name: 'Maks'},
        '103': {id: 103, name: 'Victor'}
    }
})

test('should update corresponding user', () => {
    users['101'].name = 'Kate'

    expect(users['101'].name).toBe('Kate')
    expect(users['101']).toEqual({id: 101, name: 'Kate'})

    delete users['102']
    expect(users['102']).toBeUndefined()
})