//Primitive and Object References

//Hyma


function computeEmployeeReport(){
    let empObjectInfo={name:'Arun',age:34,dept:'Analytics',bonus:200,is_active:true};
    let badgeLevel=2;
    //Every Object : MEMORY ADDRESS POINTER
    //string, intergrs, booleans => Primitive Types
    // Referecce Types : Objects, Arrays
    let rsult=addBadgeToEmployee(empObjectInfo,badgeLevel);
    empObjectInfo.badgeName=rsult.badgeName;
    console.log("Badge Level : ",badgeLevel); //2
    console.log(empObjectInfo); //=> MID-NEW
}

//pure functions

//Balkar
function addBadgeToEmployee(emp,badgeLevel){
    let newEmp={};

    badgeLevel=badgeLevel+1;
         newEmp.bonus=20000;
    if(badgeLevel==1)
        newEmp.badgeName="HIGH";
    if(badgeLevel==2)
        newEmp.badgeName="MID";
        if(badgeLevel==3)
        newEmp.badgeName="MID-NEW";
    return newEmp;
}

let employeReport={
    name:'Arun',
    age:34,
    dept:'Analytics',
    basic:"3400",
    is_active:true,
    computeBonus:function(){ console.log(this); return this.basic*(10/100)}
}


const sqr= x => x * x;

const log=consle.log;

const calDisc= perc => (perc/100);

function computeAreaOfCircle(radius,fn){
    return Math.PI * fn(radius);
};

console.log(computeAreaOfCircle(4,sqr));
//squareNumber(30);

//window
console.log(employeReport.computeBonus());