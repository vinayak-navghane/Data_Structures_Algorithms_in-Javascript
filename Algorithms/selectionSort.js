//Selection Sort - 


var sortArray = function (nums) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;


        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[min])
                min = j;
        }


        let temp = nums[min];
        nums[min] = nums[i];
        nums[i] = temp;
    }
    return nums;
};

//TC - O(n^2)

