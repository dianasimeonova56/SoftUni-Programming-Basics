function tennis(input) {
    let numTournaments = Number(input[0]);
    let firstPoints = Number(input[1]);
    let pointsEarned = 0;
    let numWon = 0;
    
    for (let i = 2; i < input.length; i++) {
        let tournamentType = input[i];
        if (tournamentType === "W") {
            pointsEarned += 2000;
            numWon++;
            
        } else if (tournamentType === "F") {
            pointsEarned += 1200;
        } else if ( tournamentType === "SF") {
            pointsEarned += 720;
        }
    }
    let finalPoints = firstPoints + pointsEarned;
    let averagePoints = Math.floor((pointsEarned) / numTournaments);
    let percentWon = ((numWon / numTournaments) * 100).toFixed(2);

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${percentWon}%`)


} tennis(["5",

"1400",

"F",

"SF",

"W",

"W",

"SF"])