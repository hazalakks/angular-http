export interface UserModel {
    address: AdressModel
    age: Number
    bloodGroup: string
    company: CompanyModel
    email: string
    birthDate: string
    firstName: string
    lastName: string
    gender: string
    id: number
    height: number
    weight: number
    phone: number
}

export interface AdressModel {
    address: string
    city: string
    country: string
    postalCode: string
    stateCode: string
    coordinate: CoordinatesModel
}

export interface CoordinatesModel {
    lat: number
    lng: number
}


export interface CompanyModel {
    address: AdressModel
    department: string
    title: string
    name: string

}