function numSum(input) {
    let n = Number(input[0]);
    let sum = 0;
    let index = 1; 

    while (sum < n) {
        let currentN = Number(input[index]);
        sum += currentN;
        index++;
    }
     console.log(sum)
}