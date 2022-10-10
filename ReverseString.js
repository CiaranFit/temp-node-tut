function reverseString1 (stringInput) {
    // the fuctional way
    var splitString = stringInput.split("");
    var reverseString = splitString.reverse();
    stringInput = reverseString.join("");
    return stringInput
}

function reverseString2 (stringInput) {
    // decrementing loop
    var newstring = "";
    for (var i = stringInput.length - 1; i >= 0; i--) {
        newstring += stringInput[i];
    }
    return newstring;
}

function reverseString3 (stringInput) {
    // the recursive way
    if (stringInput === "")
        return "";
    else
        return reverseString3(stringInput.substr(1)) + stringInput.charAt(0);
}

console.log(reverseString1('hello'));
console.log(reverseString2('hello'));
console.log(reverseString3('hello'));