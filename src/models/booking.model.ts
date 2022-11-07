export interface IBooking {
    time: Date | null,
    booking: IBookingContact
}


export interface IBookingContact{
    phoneNumber?: string,
    email?: string
    amountOfPersons: number,
    fullName: string
}
