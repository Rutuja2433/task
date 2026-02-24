function checkPalindrome(num) {
    let reversed = num.toString().split("").reverse().join("");

    if (num.toString() === reversed) {
        console.log("Palindrome Number");
    } else {
        console.log("Not a Palindrome Number");
    }
}

module.exports = checkPalindrome;