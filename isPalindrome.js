/**
 * @param {*} str
 * @return {boolean} - whether str is a palindrome, ignoring all non alphanumerical values
 */
function isPalindrome(str) {
    str = str.toLowerCase()
        .split('')
        .filter(char => /[a-z0-9]/.test(char));
    for (let i = 0; i < str.length; i += 1) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.assert(!isPalindrome('asdf'))
console.assert(isPalindrome("Was it Eliot's toilet I saw?"))
