function uniquePinCode(input) {
    let maxNum1 = Number(input[0]);
    let maxNum2 = Number(input[1]);
    let maxNum3 = Number(input[2]);
    
   for (let i = 2; i <=maxNum1; i += 2) {
    for (let j = 2; j <= maxNum2; j++) {
     for (let k = 2; k <= maxNum3; k += 2) {
        if (j == 2 || j == 3 || j == 5 || j == 7) {
            console.log(i + " " + j + " " + k);
        }
            }
        }
     }
    }
   

 uniquePinCode[ "3", "5", "5" ]

