const numbers = [0, 1, 2, 3, 4 ,5, 6, 7,8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const searchFunction = (nums, target) => {
    let leftPosition = 0;
    let rightPosition = nums.length - 1;
    let currentPosition;

    // console.log(leftPosition, rightPosition);
    let i = 0;
    while(leftPosition <= rightPosition){
        i++;
        currentPosition = Math.round((rightPosition-leftPosition) / 2) + leftPosition;

        console.log(`${i}-loop`);
        console.log(leftPosition, currentPosition, rightPosition);

        if (target === nums[currentPosition]) {
            return currentPosition;
        }else if(target < nums[currentPosition]){
            rightPosition = currentPosition - 1;
        }else{
            leftPosition = currentPosition + 1;
        }
    }

    return NaN;
}

console.log("Result: " + searchFunction(numbers, 19));
