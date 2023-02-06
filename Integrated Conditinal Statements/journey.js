function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    
    let accommodation ;
    let price = 0;
    let country ;

    if (budget <= 100) {
        country = "Bulgaria";
        if (season === "summer") {
            accommodation = "Camp";
            price = budget * 0.7;
            budget = (budget - price).toFixed(2);
            console.log(`Somewhere in ${country}`);
        console.log(`${accommodation} - ${budget}`);
        } else if (season === "winter") {
            accommodation = "Hotel";
            price = budget * 0.3;
            budget = (budget - price).toFixed(2);
            console.log(`Somewhere in ${country}`);
        console.log(`${accommodation} - ${budget}`);
        }
    } else if (budget <= 1000) {
        country = "Balkans";
        if (season === "summer") {
            accommodation = "Camp";
            price = budget * 0.6;
            budget = (budget - price).toFixed(2);
            console.log(`Somewhere in ${country}`);
        console.log(`${accommodation} - ${budget}`);
        } else if (season === "winter") {
            accommodation = "Hotel";
            price = budget * 0.2;
            budget = (budget - price).toFixed(2);
            console.log(`Somewhere in ${country}`);
        console.log(`${accommodation} - ${budget}`);
        }
        } else {
            country = "Europe";
            accommodation = "Hotel";
            price = budget * 0.1; 
            budget = (budget - price).toFixed(2);
            console.log(`Somewhere in ${country}`);
        console.log(`${accommodation} - ${budget}`);
        }
        
    }
    journey(["312", "summer"])