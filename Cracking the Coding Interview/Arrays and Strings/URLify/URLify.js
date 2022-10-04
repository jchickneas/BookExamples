function trimTrailingWhitespace (s) {
    var re1 = /\s*$/;
    return s.replace (re1, '');
}

function URLify (s) {
    var index = s.lastIndexOf(' ');
    var trimmed = trimTrailingWhitespace(s);
    var re1 = /\s/g;
    return trimmed.replace (re1, '%20');
    }
    
let s1 = "Mr John Smith     ";
console.log ("\"" + s1 + "\" becomes \"" +  URLify (s1) + "\"");