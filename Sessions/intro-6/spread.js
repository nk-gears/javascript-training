//let mixedItems= [2,3,"Apple","Orange",["Carrot","beans"] ] 
///Roger(?= Waters)/.test('Roger is my dog and Roger Waters1 is a famous musician')

let seasons=['Winter','Autumn'];
let otherSeasons=["summer","spring"];
let allSeasons=[...seasons,...otherSeasons];

//Merged together
allSeasons=['Winter','Autumn',"summer","spring"];


//Primitive & Reference Types (heap => Memory Pointer)
//String,Int, Bool => NO MEMORY POINTER (Stack)
let empObjectInfo={name:'Arun',age:34,dept:'Analytics',bonus:200,basePay:452};

let payrollObject={}
Object.keys(empObjectInfo).forEach(keyName=>{ payrollObject[keyName]=empObjectInfo[keyName];})
delete empObjectInfo["basePay"];
delete empObjectInfo["bonus"];

calculatePayroll() //balkar
let newEmpData=empObjectInfo; //Same Memory Pointer
newEmpData.age=87;
console.log(empObjectInfo.age); // 87
//================================
let boardingPass="Arun";
let newBoardingPass=boardingPass; //NO SAME Mory Pointer

newBoardingPass="Bala";

console.log(newBoardingPass)// Bala
console.log(boardingPass)///   Arun

let newEmpData={}
Object.keys(empObjectInfo).forEach(keyName=>{ newEmpData[keyName]=empObjectInfo[keyName];})


//ES7
let freshEmpData={...empObjectInfo}

let indianSeasons={"winter":["Nov","Dec"],"Summer":["April","May","Jun","Jul"]}
//Dynamically add values to a Object
[0,1,2,3].forEach(item=>{ indianSeasons["Spring" + item]=["Jan " + parseInt((item*15) + 15)]  })

[0,1,2,3].forEach(function(arrayIndex){
     indianSeasons["Spring" + arrayIndex]=["Jan-" + (arrayIndex*15) + 15];
})

Jan 0-15
Jan 15-30

//Dispaly
//[0,1,2,3].forEach(item=>{ console.log(indianSeasons["Spring" + item]);})


function simpleCall(){ 

let empObjectInfo={name:'Arun',age:34,dept:'Analytics',bonus:200,basePay:452};

let payrollObject={};
Object.keys(empObjectInfo).forEach(keyName=>{ payrollObject[keyName]=empObjectInfo[keyName];});

//payrollObject["basePay"]=undefined;
//delete payrollObject["basePay"];
//delete payrollObject["bonus"];

//destructuring
let { bonus, basePay,...payrollInfo } = empObjectInfo;


console.log(bonus,basePay,payrollInfo);

calculatePayroll(payrollInfo);

}


simpleCall();