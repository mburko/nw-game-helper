export default function isBeforeTodays5Am(timestamp) {
    const providedDate = new Date(timestamp);
    const now = new Date();

    // Set current date's time to 5 am
    const today5am = new Date(now);
    today5am.setHours(5, 0, 0, 0);  // 5 am

    // Compare the provided timestamp to today's 5 am
    return providedDate < today5am;
}