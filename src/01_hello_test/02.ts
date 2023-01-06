
export type StudentsType = {
    id:number
    name:string
    age:number
    isActive:boolean
    address:addressType
    technologies:Array<techType>
}

type addressType = {
    streetTitle:string
    city:cityType
}

type cityType = {
    title: string
    countryTitle:string
}

type techType = {
    id:number
    title:string
}

const students:StudentsType = {
    id:1,
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
