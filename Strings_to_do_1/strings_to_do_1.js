// 1.Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

function removeBlanks(str){
    wordArray = str.split(" ");
    return wordArray.join("");
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));

// 2.Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

function getDigits(str){
    let getnums= str.split("");
    for(var i = 0; i < getnums.length; i++){
        if(isNaN(getnums[i])){
            getnums[i] = "";
        }
    }
    return getnums.join("");
}

console.log(getDigits("abc8c0d1ngd0j0!8"));
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));


// 3. Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

function acronym(str){
    var getAcro = str.split(" ");
    acro = ""
    for(i=0; i<getAcro.length; i++){
        acro += getAcro[i][0];
    }
    return acro.toUpperCase();
}

console.log(acronym("there's no free lunch - gotta pay yer way."))
console.log(acronym("Live from New York, it's Saturday Night!"));

// 4.Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 

function countNonSpaces(str){
    let counter = 0;
    for(i=0; i<str.length; i++){
        if(str[i] != " "){
            counter ++;
        };
    };
    return counter;
};

console.log(countNonSpaces("Honey pie, you are driving me crazy"));
console.log(countNonSpaces("Hello world !"));

// 5. Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

function removeShorterStrings(arr, num){
    let newArr = []
    let count = 0;
    for(i=0; i<arr.length;i++){
        if(arr[i].length >= num){
            newArr[count] = arr[i];
            count ++;
        };
    };
    return newArr;
};

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));