type streetType = {
    title:string
}

type AddressType = {
    number:number
    street: streetType
}
type houseType = {
    buildAt:number
    repaired:boolean
    address:AddressType
}


type govermentBuildType = {
    type:string
    budget:number
    staffcount:number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<houseType>
    govermentBuild: Array<govermentBuildType>
    citizensnum: number
}