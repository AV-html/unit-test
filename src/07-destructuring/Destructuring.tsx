import React from 'react';


export type ManType = {
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


type PropsType = {
    title: string,
    man: ManType
    food: Array<string>
    car: { model: string }
}

export const Destructuring: React.FC<PropsType> = ({title, man, ...props}) => {
    // const {title} = props;
    // const {name} = props.man;

    // const {title, man: {name}} = props;

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div>
            <div>
                {props.car.model}
            </div>
        </div>
    );
}
