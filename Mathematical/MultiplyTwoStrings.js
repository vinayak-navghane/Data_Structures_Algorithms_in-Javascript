// Q.Multiply two strings - Given two numbers as strings s1 and s2. 
// Calculate their Product.

// brute force - 

class Solution {
    multiplyStrings(num1, num2) {
        let nn = 1, mm = 1;
        if (num1[0] == '-')
            nn = -1;
        if (num2[0] == '-')
            mm = -1;

        let mul = nn * mm;
        let n1 = num1.length;
        let n2 = num2.length;
        if (n1 === 0 || n2 === 0) return "0";

        // will keep the result number in ArrayList in reverse order

        let result = new Array(n1 + n2);
        for (let ii = 0; ii < n1 + n2; ii++)
            result[ii] = 0;

        let i_n1 = 0; // index by num1
        let i_n2 = 0; // index by num2

        // go from right to left by num1
        for (let i = n1 - 1; i >= 0; i--) {
            if (num1[i] == '-')
                continue;
            let carrier = 0;
            let no1 = parseInt(num1[i]); // no1 = 1 , no1 = 1
            i_n2 = 0;


            // go from right to left by num2
            for (let j = n2 - 1; j >= 0; j--) {
                if (num2[j] == '-')
                    continue;
                let no2 = parseInt(num2[j]); // no2 = 3 , no2 = 2
                // no2 = 3 , no2 = 2


                let sum = no1 * no2 + result[i_n1 + i_n2] + carrier; // 3 3
                // 5 2

                carrier = Math.floor(sum / 10);
                result[i_n1 + i_n2] = sum % 10;  //result [0] is set to 3
                //result [1] is set to 2 
                //result = [3, 2, 0, 0]

                //result [1] is set to 5
                //result [2] is set to 2
                //result = [3, 5, 2, 0]

                i_n2++; //1st iteration = 1 -> 2
                //2nd iteration = 1 -> 2
            }

            // store carrier in next cell
            if (carrier > 0) {
                result[i_n1 + i_n2] += carrier;
            }

            i_n1++;
        }



        let i = n1 + n2 - 1;
        while (i >= 0 && result[i] === 0) i--;

        // if all were '0's - means either both or one of num1 or num2 were '0'
        if (i == -1) return "0";

        // generate the result string
        let s = "";
        let p = "";

        while (i >= 0) {
            s += result[i].toString();
            i--;
        }
        if (mul == -1) {
            p += "-";
            p += s;

        }
        else
            p += s;

        return p.toString();


    }
}
//  TC - O(n1×n2)
