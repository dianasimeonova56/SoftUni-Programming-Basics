function invalidNumber(input) {
    let number = Number(input[0]);
    let isTrue = 100 <= number && number <= 200 || number === 0;

    if (!isTrue) {
        console.log("invalid");
    }
} invalidNumber(["150"]);