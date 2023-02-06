function building(input) {
    let floorEntered = Number(input[0]);
    let roomEntered = Number(input[1]);
    let result = "";
    

    for (let floor = floorEntered; floor >= 1; floor--) {
        for (let room = 0; room < roomEntered; room++) {
            if (floor === floorEntered) {
                if (room === roomEntered-1) {
                    result += "L" + floor + room;
                } else {
                    result += "L" + floor + room + " ";
                }
            } else if (floor % 2 === 0) {
                if (room === roomEntered-1) {
                    result += "O" + floor + room;
                } else {
                    result += "O" + floor + room + " ";
                }
          } else {
            if (room === roomEntered-1) {
                result += "A" + floor + room;
            } else {
                result += "A" + floor + room + " ";
            }
          }
       }
       console.log(result);
       result =  "";
   }
}