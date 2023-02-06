function skiTrip(input) {
   // room for one person" – 18.00 лв за нощувка
   // "apartment" – 25.00 лв за нощувка 
   // "president apartment" – 35.00 лв за нощувка

   let days = Number(input[0]);
   let roomType = input[1];
   let grade = input[2];

   let nights = days - 1;

   let total = 0;

   let gradeAdd = 0;

   if (roomType === "room for one person") {
    total = nights * 18;
   } else if (roomType === "apartment") {
    total = nights * 25;
    if (days < 10) {
        total = total -  total * 0.3;
    } else if (days >= 10 && days <= 15) {
        total = total - total * 0.35;
    } else if (days > 15) {
        total = total - total * 0.5;
    }
   } else if (roomType === "president apartment") {
    total = nights * 35;
    if (days < 10) {
        total = total - total * 0.1;
    } else if (days >= 10 && days <= 15) {
        total = total - total * 0.15;
    } else if (days > 15) {
        total = total - total * 0.2;
    }
   }

   if (grade === "positive") {
    gradeAdd = total  * 0.25;
    total = (total + gradeAdd).toFixed(2);
} else if (grade === "negative") {
    gradeAdd = total * 0.1;
    total = (total - gradeAdd).toFixed(2);
}

console.log(`${total}`);
}
skiTrip (["14",
"apartment",
"positive"])

