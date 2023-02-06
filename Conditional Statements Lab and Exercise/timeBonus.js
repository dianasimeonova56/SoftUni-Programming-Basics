function timeBonus(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    let totalTime = ((hour * 60) + minutes) + 15;

    let timeHour = Math.floor(totalTime / 60);
    let timeMins = totalTime % 60;

    if (timeHour >= 24) {
        timeHour = timeHour - 24;
    } 
    if (timeMins < 10) {
        console.log(`${timeHour}:0${timeMins}`);
    } else {
        console.log(`${timeHour}:${timeMins}`);
    }
}