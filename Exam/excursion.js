function excursion(input) {
    let peopleNum = Number(input[0]);
    let nights = Number(input[1]);
    let cardsT = Number(input[2]);
    let museumTickets = Number(input[3]);

    /*•	Нощувка - 20 лв.
Карта за транспорт - 1.60 лв.
	Билет за музей - 6 лв. -*/

    let singleNightSum = nights * 20;
    let singleCardsSum = cardsT * 1.6;
    let singleTicketsSum = museumTickets * 6;

    let totalSingleSum = singleCardsSum + singleNightSum + singleTicketsSum;

    let totalSum = totalSingleSum * peopleNum;
    let addedExpnese = totalSum + totalSum * 0.25;

    console.log(`${addedExpnese.toFixed(2)}`)



} excursion (["20", "14", "30", "6"])