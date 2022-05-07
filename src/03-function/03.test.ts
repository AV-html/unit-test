import {StudentType} from '../02-objects/02';
import {activateStudent, addSkill, doesStudentLiveIn} from './03';

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1000,
        name: 'Alex',
        age: 32,
        isActive: false,
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
})

test('New tech skill should be added', () => {
    expect(student.technologies.length).toBe(3);

    addSkill(student, 'JS');
    addSkill(student, 'TS');

    expect(student.technologies.length).toBe(5);
    expect(student.technologies[3].title).toBe('JS');
    expect(student.technologies[3].id).toBeDefined();
    expect(student.technologies[4].title).toBe('TS');
    expect(student.technologies[4].id).toBeDefined();
});

test('Student should be made active', () => {
    expect(student.isActive).toBe(false);

    activateStudent(student);

    expect(student.isActive).toBe(true);
});


test('does student live in city?', () => {
    // expect(student.address.city.title).toBeDefined();

    let result1 = doesStudentLiveIn(student, 'Moscow');
    let result2 = doesStudentLiveIn(student, 'Minsk');

    expect(result1).toBe(true);
    expect(result2).toBe(false);
});





