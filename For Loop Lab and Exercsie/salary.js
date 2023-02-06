function salary(input) {
    let openTabs = Number(input[0]);
    let salary = Number(input[1]);
    

    let moneyTaken = 0;

    for (let i = 2; i < input.length; i++) {
        let website = input[i];
        if (website === "Facebook") {
            moneyTaken = 150;
            salary -= moneyTaken;
        } else if (website === "Instagram") {
            moneyTaken = 100;
            salary -= moneyTaken;
        } else if (website === "Reddit") {
            moneyTaken = 50;
            salary -= moneyTaken;
        }
        
    }
    if (salary <= 0) {
        console.log("You have lost your salary.");
    } else {
        let moneyLeft = Math.abs(salary);
        console.log(`${moneyLeft}`);
    }
  
   
} salary(["10",

"750",

"Facebook",

"Dev.bg",

"Instagram",

"Facebook",

"Reddit",

"Facebook",

"Facebook"])