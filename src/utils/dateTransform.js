export default function dateTransform(dateString){
    const fullDate = new Date(dateString);
    const date = fullDate.toLocaleDateString("en", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    });
    const time = fullDate.toLocaleTimeString("en", {hour12: false});
    return `${date} ${time}`;
}