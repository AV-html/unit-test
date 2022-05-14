type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: AddressType
}

type LessonType = {
    title: string
}

type AddressType = {
    street: StreetType
}
type StreetType = {
    title: string
}


let props: ManType;

beforeEach(() => {
    props = {
        name: 'Alex',
        age: 24,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Lebedeva'
            }
        }
    }
})


test('should', () => {


    // const age = props.age;
    // const lessons = props.lessons;
    const {age, lessons} = props;
    const {title} = props.address.street;


    expect(age).toBe(24);
    expect(lessons.length).toBe(2);
    expect(title).toBe('Lebedeva');
})

// 14:40