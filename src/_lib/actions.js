"use server";

export async function createYachtBooking(bookingData, formData) {
    const submission = Object.fromEntries(formData);

    console.log("Yacht booking submission:", {
        ...bookingData,
        ...submission,
    });
}