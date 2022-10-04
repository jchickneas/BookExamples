// Given two strings, write a method to decide if one is a permutation of the other.

function IsPermutation (s1, s2) {

let status = false;

const len = s1.length;

if (len != s2.length) {
    return false;
}

for (let i = 0; i < len; ++i) {
    s2 = s2.replace (s1[i],'');
}

if (s2.length == 0) {
    status = true;
}


return status;
}

let s1 = "abc"
let s2 = "cba"

console.log (IsPermutation(s1,s2)? "pass" : "fail");
console.log (IsPermutation("xxyyzz","zyxxyz")? "pass" : "fail");
console.log (IsPermutation("abc","zyxxyz")? "fail" : "pass");
console.log (IsPermutation("abc","xyz")? "fail" : "pass");
console.log (IsPermutation("zillow","llowiz")? "pass" : "fail");
console.log (IsPermutation("google","googol")? "fail" : "pass");
console.log (IsPermutation("alphabetagamma","gammabetaalpha")? "pass" : "fail");