import {StudentsType} from "./02";


export const addSkill =
    (student: StudentsType, skill: string) => {
        student.technologies.push({
                id: new Date().getTime(),
                title: skill
            },
        )
    }