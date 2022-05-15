import {ManType} from './Destructuring';

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


test('', () => {
    // const l1 = props.lessons[0]
    // const l2 = props.lessons[1]

    const [l1, l2] = props.lessons;

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')
})
