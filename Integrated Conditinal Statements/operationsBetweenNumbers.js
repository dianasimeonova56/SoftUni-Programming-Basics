function operationsBetweenNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operation = input[2];

    let result = 0;

    if (operation === "+" || operation === "-" || operation === "*") {
        if (operation === "+") {
            result = num1 + num2;
            if(result % 2 == 0){
            console.log(`${num1} + ${num2} = ${result} - even`);
        } else { 
            console.log(`${num1} + ${num2} = ${result} - odd`);
        }
        } else if (operation === "-") {
            result = num1 - num2;
            if(result % 2 == 0) {
                console.log(`${num1} - ${num2} = ${result} - even`);
            } else {
                console.log(`${num1} - ${num2} = ${result} - odd`);
        }
            } else if (operation === "*") {
                result = num1 * num2;
                if(result % 2 == 0) {
                    console.log(`${num1} * ${num2} = ${result} - even`);
                } else {
                    console.log(`${num1} * ${num2} = ${result} - odd`);
        }
                }
            } else if (operation === "/") {
                result = (num1 / num2).toFixed(2);
                if(num1 == 0) { 
                    console.log(`Cannot divide ${num2} by zero`);
                    
                } else if (num2 == 0) {
                    console.log(`Cannot divide ${num1} by zero`);
                } else {
                    console.log(`${num1} / ${num2} = ${result}`);
                }
            } else if (operation === "%") {
                result = num1 % num2;
                if(num1 == 0) { 
                    console.log(`Cannot divide ${num2} by zero`);
                    
                } else if (num2 == 0) {
                    console.log(`Cannot divide ${num1} by zero`);
                } else {
                    console.log(`${num1} % ${num2} = ${result}`);
                }
            } 
        } operationsBetweenNumbers(["7",

        "3",
        
        "*"])
    