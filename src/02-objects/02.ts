export type LocalCityType = {
    title: string
    countryTitle: string
}
export type AddressType = {
    streetTitle: string
    city: LocalCityType
}
export type TechnologyType = {
    id: number
    title: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologyType>
}

export const student: StudentType = {
    id: 1000,
    name: 'Alex',
    age: 32,
    isActive: true,
    address: {
        streetTitle: 'Almaznaya 21',
        city: {
            title: 'Moscow',
            countryTitle: 'Russia',
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'React'
        }
    ]
}
