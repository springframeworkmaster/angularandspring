export interface Person{
    id?: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: {
        id?: number,
        streetName: string,
        city: string,
        state: string,
        pincode: number,
    },
    hide?: boolean
}