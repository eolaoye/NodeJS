// In the range 1 - 13 (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13) the digit 1
// occurs 6 times.

// In the range, 1 - 2,660 (half the number of Romans in a legion), expressed in
// Roman numerals, how many times does the numeral “X” occur?

function countOfXIn2660() {

    //9 and 18 => 1ce
    //19 and 28 => 2ce
    //29 and 38 => 3ce
    // 39 => 4
    //40 and 48 => 1
    //49 - 2
    //59 - 68 => 1
    //69 - 78 => 2
    //79-88 => 3
    //89 => 4
    //90-98 => 1
    //99 => 2

    //repeated function 26 times until 2600
    //9-49  repeated
    //59 - 66 => 1

    const sumOfXs9to18 = 1 * 10;
    const sumofXs19to28 = 2*10;
    const sumOfXs29to38 = 3*10;
    const sum39 = 4;
    const sumOfXs40to48 = 1*9;
    const sum49 = 2;
    const sumOfXs59to68 = 1 * 10;
    const sumofXs69to78 = 2*10;
    const sumOfXs79to88 = 3*10;
    const sum89 = 4;
    const sumOfXs90to98 = 1*9;
    const sum99 = 2;

    const sumTill100 = sumOfXs9to18 + sumofXs19to28 + sumOfXs29to38 +
    sum39 + sumOfXs40to48 + sum49 + sumOfXs59to68 + sumofXs69to78 + sumOfXs79to88 +
    sum89 + sumOfXs90to98 + sum99;

    const sumTill2600 = sumTill100 * 26;

    const sumTill49 = sumOfXs9to18 + sumofXs19to28 + sumOfXs29to38 +
    sum39 + sumOfXs40to48 + sum49;

    const sum59Till60 = 1 * 2;

    return sumTill2600 + sumTill49 + sum59Till60;
}

console.log(countOfXIn2660())