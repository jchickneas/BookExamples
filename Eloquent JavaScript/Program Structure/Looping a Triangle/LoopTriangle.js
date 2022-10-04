function LoopTriangle (num) {
    var index = 0;
    var triTierStr = "";
    while (index < num) {
        triTierStr += "#";
        console.log (triTierStr);
        index++;
    }
}

LoopTriangle (7);