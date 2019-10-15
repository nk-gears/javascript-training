console.log("testing");

var birdName= "Parrot";

//console.log(birdName + locationName)

let isHoliday=true
let locationToVisit="adyar,marina";
let sunday=true


if(isHoliday){

let locationToVisit="besant nagar,vepery";

if(sunday){
locationToVisit="church"
}

console.log(locationToVisit);

}


//console.log(locationToVisit)

//Scope :

// Isolation

//Hyma has create function (birdName=)
//Bala has create function (birdName=)
/*
Variables
Constants
*/


//mutability
//immutable variables

const boxWidth  = 125;
const noOfBoxes = 23;
let log=console.log

totalCost=boxWidth * noOfBoxes;
log(totalCost)

///
//Strings
let fruit="apple"

log("Length " + fruit.length);

let fruits="apple,mango,jackfruit"

log(fruits.split(','));

log("using Old language " + fruits.indexOf("mango")>=0)

log("Using Includes " + fruits.includes("mango"))

let quote="quick brown fox jumps over the lazy dog"

//"Starting and Ending Position"
log(quote.slice(12,21))
log(quote.substr(12,21))


//Numbers
let x=8.0;
let y = 5.3;

//(+)

//let required=prompt("How much fruits you wanted");
//let actualCount=parseInt(required); //23a
//parseFloat
//alert("Pay " + actualCount * 3 + "Fruits");


//String Literals
alert(`Pay Bill Amount ${actualCount*3}`);

let categories=`Jan
Feb
Mar
Apr
May
Jun
Jul
Aug
Sep
Oct
Nov
Dec
Jan
Feb`;

arrCategories=categories.split('\n')
log(arrCategories)
log(arrCategories.join(","))
log(arrCategories.join("\n"))
log(arrCategories.join("\t"))


console.log(x+y);
let pattern=/\d+/;
let ssn="SSN US : 324 3434 212 213123";
log(pattern.test(ssn))

let newSSN="324 3434 212 213123";

let patterns=/ /g;

let specialCharacters="324aB3434A212a213123";

//let alphaPatern=/[a-z,A-Z]/g;

let alphaPatern=/ID/gi;
specialCharacters="324ID3434A212aid3123";
log(specialCharacters.replace(alphaPatern,"_"));

//regex: Regular Expresssions


//Numbers

//Docomo user
function rechargeThroughBalance(){
    console.log("recharged");

}