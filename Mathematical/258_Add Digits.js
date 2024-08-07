// Q.258. Add Digits-  Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

var addDigits = function (num) {

    let n = num;
    let sum = 0;


    while (n > 0 || sum >= 10) {
        if (n == 0) {
            n = sum;
            sum = 0;
        }


        let lastDigit = n % 10;
        sum += lastDigit;
        n = Math.floor(n / 10);

    }
    return sum;




};


// TC- O(log10(n);
