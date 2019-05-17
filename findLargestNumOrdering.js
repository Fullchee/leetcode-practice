// Fortran Traffic Systems Interview

/**
 *
 * assuming there are no decimals
 * @param {Array<integers>} nums
 * @returns {string} - the largest number
 * 
 * eg: [30, 43, 5, 9] -> '954330'
 */
function findLargestOrdering(nums) {


    return nums.map(num => "" + num)
        .sort((a, b) => (a + b) < (b + a))
        .join('');
}
console.assert(findLargestOrdering([30, 3, 34, 332, 334]) === '34334333230');
console.assert(findLargestOrdering([30, 43, 5, 9]) === '954330');
