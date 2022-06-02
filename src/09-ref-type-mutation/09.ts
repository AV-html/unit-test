export type UserType = {
    name: string
    age: number
    address: {
        title: string
    }
}

export function increaseAge(person: UserType) {
    person.age++;
}


