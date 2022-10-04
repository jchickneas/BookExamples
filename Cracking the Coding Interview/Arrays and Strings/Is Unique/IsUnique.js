function IsUnique (s) {
    // validate input - strictly require string
    if (typeof(s) != "string")
        return true;

    // todo - could convert other types to strings before testing to accommodate more types

    const strlen = s.length;

    if (strlen === 0)
        return true;

    let index = 0;
    let dupFound = false;
    while (dupFound===false && index < strlen){
        if (s.indexOf(s.charAt(index), index+1) != -1){
            dupFound = true;
        }
        index++;
    }

    return !dupFound;
}

const s1 = "sample";
console.log (s1 + " " + (IsUnique (s1)? "is " : "is not ") + "unique");