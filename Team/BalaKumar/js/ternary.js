let x=34;
let y=88;
let z=160;
let largestNum= (x>y && x>z) ? x : (y>x && y>z) ? y : z;
alert(largestNum);

Hypostheses

A
B
C=> Lead

(A > B && A > C) ? A : ( (B > A && B > C) ? B  : C) ;



== logicalExpression
    Is A=>
        > B TRUE
        > C TRUE
        => A is Bigger

     Is A=>
        > B FALSE
        > C TRUE
        => B May be Greater

        What is Greater

