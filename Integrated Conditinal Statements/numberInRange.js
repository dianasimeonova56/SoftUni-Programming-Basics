function numberInRange(input) {
    let number = Number(input[0]);
    let isTrue = -100 < number && number < 100 && number!=0;
    if(isTrue) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
numberInRange(["25"
])