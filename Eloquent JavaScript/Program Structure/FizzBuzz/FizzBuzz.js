function FizzBuzz (num) {
    // from 1 to 100
    // e.g, num is 100
    var index = 1;
    while (index <= num) {
        if (index%15===0) {
                msgStr = "FizzBuzz";
            }
        else if (index%5===0) {
            msgStr = "Buzz";
        }
        else if (index%3===0) {
            msgStr = "Fizz";
        }
        else {
            msgStr = index.toString();
        }
        console.log (msgStr)
        index++;
    }

}


FizzBuzz (100);