function lunchBreak(input) {
    let name = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = breakDuration * 1/8;
    let leisureTime = breakDuration * 1/4;

    let timeLeft = breakDuration - lunchTime - leisureTime;
    
    if(timeLeft >= episodeDuration) {
        let timeForEpisode = Math.ceil(timeLeft - episodeDuration);
        console.log(`You have enough time to watch ${name} and left with ${timeForEpisode} minutes free time.`)
    } else {
        let timeNeeded = Math.ceil(episodeDuration - timeLeft);
        console.log(`You don't have enough time to watch ${name}, you need ${timeNeeded} more minutes.`)
    }
}
lunchBreak(["Teen Wolf",

"48",

"60"]);