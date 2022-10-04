function PalindromePermutation (s) {
    // if even, just needs pairs of letters (to bee mirrored about center)
    // if odd, should have pairs of letters + any other letter (at middle)
    // remove all pairs of letters, if one or zero letters remains, it's a palidrome permutation
    // otherwise false
    let isPermutation = false;
    let index = 0;
    // remove non-alpha characters and convert to lowercase
    let tmpStr = s.replace(/[^A-Za-z]/,'').toLowerCase();
    let matchIndex = -1;
    while (tmpStr.length > 1 && index < 2) {
        matchIndex = tmpStr.indexOf(tmpStr.charAt(index),index+1);
        if (matchIndex > -1) {
            let first = tmpStr.slice(index+1,matchIndex);
            let second = tmpStr.slice (matchIndex+1);
            tmpStr = first.concat(second);
        }
        else
            index++;
    }

    if (tmpStr.length <= 1)
        isPermutation = true;

    return isPermutation;
}

function TestPalindromePermutation (s, expectedResult) {
    let result = PalindromePermutation (s);
 if (result != expectedResult) {
    console.log (`Fail: For the string \'${s}\' the result ${expectedResult} was expected but PalindromePermutation returned ${result}`);
 }
else {
    console.log (`Pass: For the string \'${s}\' the result ${expectedResult} was expected and PalindromePermutation returned ${result}`);
    }
}

TestPalindromePermutation ("abcadcba", false);
TestPalindromePermutation ("abcdcba", true);
TestPalindromePermutation ("abccba", true);
TestPalindromePermutation ("abcccba", true);
TestPalindromePermutation ("abcddddcba", true);
TestPalindromePermutation ("abcdddddcba", true);
TestPalindromePermutation ("abcdddddccba", false);
TestPalindromePermutation ("Tact Coa", true); // example given with the problem