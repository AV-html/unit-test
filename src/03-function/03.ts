import {StudentType} from '../02-objects/02';

export const sum = (a: number, b: number) => {
    return a + b;
}


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({id: new Date().getTime(), title: skill})
}

// addSkill(student, 'TS')


export const activateStudent = (student: StudentType) => {
    student.isActive = true;
}
export const doesStudentLiveIn = (s: StudentType, city: string) => {
    return s.address.city.title === city;
}