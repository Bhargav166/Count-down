const endDate = "16 June, 2023"

document.getElementById("end_date").innerText = endDate;
const inputs = document.querySelectorAll("input");

const timer = () => {
    const end = new Date(endDate);
    const now = new Date();

    const time = end - now;

    const days = Math.floor((time / (60 * 60 * 24 * 1000)));
    const hours = Math.floor((time / (60 * 60 * 1000) % 24));
    const min = Math.floor((time / (60 * 1000)) % 60);
    const sec = Math.floor((time / (1000)) % 60);

    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = min;
    inputs[3].value = sec;

}

setInterval(
    () => {
        timer();
    }, 1000
)