'use strict';

function testFalseLooseEqualityComparison(){
    var x = 0;
    var y = 1;
    if x == y { 
        return true;
    } else {
        return false;
    }
}