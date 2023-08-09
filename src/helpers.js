export default function isValidDateAndTimeToRemoveChecks(providedDate) {
    const currentDate = new Date(); // Get the current date and time.
    const provided = new Date(providedDate); // Convert the provided date string to a Date object.

    // Check if the time is after 5 AM.
    const isAfter5AM = currentDate.getHours() >= 5;

    // Check if the years, months, and days match.
    const isSameDate = provided.getFullYear() === currentDate.getFullYear() &&
                       provided.getMonth() === currentDate.getMonth() &&
                       provided.getDate() === currentDate.getDate();

    // Check if provided time is earlier than 5 AM.
    const isBefore5AM = provided.getHours() < 5;

    // Create a new Date object from the provided date and add one day.
    //provided.setDate(provided.getDate() + 1);

    // Check if the current date is one day higher than the provided date.
    const isOneDayHigher = provided.getFullYear() === currentDate.getFullYear() &&
                           provided.getMonth() === currentDate.getMonth() &&
                           provided.getDate() === currentDate.getDate();

    return (isSameDate && isBefore5AM) || (isOneDayHigher && isAfter5AM);
}