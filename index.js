var isPalindrome = function (string) {
    if (string == string.split('').reverse().join('')) {
        alert(string + ' is a palin');
    }
    else{
        alert(string + 'is not palin');
    }
}