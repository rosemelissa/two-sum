import { generateWorstCaseArray } from "./generateWorseCaseArray";

function twoSum({arr, targetSum}: {arr: number[], targetSum: number}): number[]|undefined {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                return [i, j];
            }
        }
    }
};

for (let i = 10; i <= 1000000; i*=10) {
    const myInput = generateWorstCaseArray(i);
    
    const startTime = performance.now();
    twoSum(myInput);
    const stopTime = performance.now();
    const elapsedTime = stopTime - startTime;
    
    console.log(i + ' - ' + elapsedTime);

}
