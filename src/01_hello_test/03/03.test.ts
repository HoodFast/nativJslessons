import {StudentsType} from "../02/02";
import {addSkill, makeActive, studentCity} from "./03";

let student: StudentsType
beforeEach(() => {
    student = {
        id: 1,
        name: "Andrey",
        age: 32,
        isActive: false,
        address: {
            streetTitle: "Surganova",
            city: {
                title: "Minsk",
                countryTitle: "belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            },
        ]
    }
})

test("new skill add", () => {
    addSkill(student, "JS");
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
})


test("should be active", () => {
    expect(student.isActive).toBe(false)
    makeActive(student);
    expect(student.isActive).toBe(true)
})

test("city true or false", () => {
    let result1 = studentCity(student, "Minsk");
    let result2 = studentCity(student, "Moscow");
    expect(result1).toBe(true)
    expect(result2).toBe(false)
})