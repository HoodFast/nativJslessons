import {StudentsType} from "./02";
import {addSkill} from "./03";

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
    addSkill(student,"JS");
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
})