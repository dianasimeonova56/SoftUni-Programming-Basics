function onTime(input) {
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minArrival = Number(input[3]);

    let timeExam = (hourExam * 60) + minExam;
    let timeArrival = (hourArrival * 60) + minArrival;

    let totalMinsDiff = Math.abs(timeExam - timeArrival);

    let timeHoursDiff = Math.floor(totalMinsDiff / 60);
    let minsDiff = totalMinsDiff % 60;

    let timeDiff = '';

    if (timeHoursDiff > 0) {
        if (minsDiff < 10) {
            timeDiff = `${timeHoursDiff}:0${minsDiff}`
        } else {
        timeDiff = `${timeHoursDiff}:${minsDiff}`; }
    } else {
        timeDiff = minsDiff;
    }

    if (timeArrival < timeExam) {
        if (totalMinsDiff <= 30) {
            console.log("On time");
            console.log(`${timeDiff} minutes before the start`);
        } else {
            console.log("Early");
            if (totalMinsDiff < 60) {
                console.log(`${timeDiff} minutes before the start`);
            } else {
                console.log(`${timeDiff} hours before the start`);
            }
        }

    } else if (timeArrival > timeExam) {
        console.log("Late");
        if (totalMinsDiff < 60) {
            console.log(`${timeDiff} minutes after the start`);
        } else {
            console.log(`${timeDiff} hours after the start`);
        }
    } else {
        console.log("On time");

    }
}