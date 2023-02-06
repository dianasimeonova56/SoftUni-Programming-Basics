function cake(input) {
    let index = 0;

    let width = Number(input[index]);
    index++;

    let length = Number(input[index]);
    index++;

    let piecesTaken = input[index];
    index++;

    let totalPieces = width * length;

    while (piecesTaken !== "STOP") {
        piecesTaken = Number(piecesTaken);
        totalPieces -= piecesTaken;

        if (totalPieces <= 0) {
            
            console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
            return;
        }

        piecesTaken = input[index];
        index++;
    }
    if (piecesTaken === "STOP") {
        console.log(`${totalPieces} pieces are left.`)
    }
    
    
} cake [("10",

"10",

"20",

"20", "20", "20", "21")]