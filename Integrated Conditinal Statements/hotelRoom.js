function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    
    let studio = 0;
    let apartment = 0;

    if (month == "May" || month == "October") {
        studio = (50 * nights).toFixed(2);
        apartment = (65 * nights).toFixed(2);
        if (nights > 14) {
            studio = (studio * 0.7).toFixed(2);
            apartment = (apartment * 0.9).toFixed(2);
        } else if (nights > 7) {
            studio = (studio* 0.95).toFixed(2);
        }
    } else if (month == "June" || month == "September") {
        studio = (75.2 * nights).toFixed(2);
        apartment = (68.7 * nights).toFixed(2);
        if (nights > 14) {
            studio = (studio * 0.8).toFixed(2);
            apartment = (apartment * 0.9).toFixed(2);
        } 
    } else if (month == "July" || month == "August") {
        apartment = (77 * nights).toFixed(2);
        studio = (76 * nights).toFixed(2);
        if (nights > 14) {
            apartment = (apartment* 0.9).toFixed(2);
        }
    } 
    console.log(`Apartment: ${apartment} lv.`);
    console.log(`Studio: ${studio} lv.`);

} hotelRoom(["June",

"14"]);