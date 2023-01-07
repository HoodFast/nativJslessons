import {StudentsType} from "../02/02";


export const addSkill =
    (student: StudentsType, skill: string) => {
        student.technologies.push({
                id: new Date().getTime(),
                title: skill
            },
        )
    }

export const makeActive = (s:StudentsType) => { s.isActive = true}

export const studentCity = (s:StudentsType,city:string) => {
    return s.address.city.title == city;
}
