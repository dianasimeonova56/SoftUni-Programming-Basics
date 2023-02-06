function cinemaTickets(input) {
    let index = 0;

    let movieTitle = input[index];
    index++;

    let standardTicketsCount = 0;
    let studentsTicketsCount = 0;
    let kidTicketsCount = 0;

    while (movieTitle !== "Finish") {
        let spacesAvailable = Number(input[index]);
        index++;

        let currentTicket = input[index];
        index++;

        let spacesTaken = 0;

        while (currentTicket !== "End") {
            if (currentTicket === "standard") {
                standardTicketsCount += 1;
            } else if (currentTicket === "student") {
                studentsTicketsCount += 1;
            } else if (currentTicket === "kid") {
                kidTicketsCount += 1;
            }
            spacesTaken += 1;

            if (spacesTaken === spacesAvailable) {
                break;
            }

            currentTicket = input[index];
            index++;

        }
        let percentFull = (spacesTaken / spacesAvailable) * 100;
        console.log(`${movieTitle} - ${percentFull.toFixed(2)}% full.`);

        movieTitle = input[index];
        index++;
    }
    let totalTickets = standardTicketsCount + studentsTicketsCount + kidTicketsCount;

    console.log(`Total tickets: ${totalTickets}`);

    let standardPercent = (standardTicketsCount / totalTickets) * 100;
    let studentsPercent = (studentsTicketsCount / totalTickets) * 100;
    let kidPercent = (kidTicketsCount / totalTickets) * 100;

    console.log(`${studentsPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidPercent.toFixed(2)}% kids tickets.`);
} cinemaTickets(["The Matrix",

    "20",

    "student",

    "standard",

    "kid",

    "kid",

    "student",

    "student",

    "standard",

    "student",

    "End",

    "The Green Mile",

    "17",

    "student",

    "standard",

    "standard",

    "student",

    "standard",

    "student",

    "End",

    "Amadeus",

    "3",

    "standard",

    "standard",

    "standard",

    "Finish"])