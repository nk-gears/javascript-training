const item = [
{name:"bala", company:"oracle", place:"chennai", start:1981, end:2003},
{name:"sheik", company:"microsoft", place:"pune", start:1992, end:2008},
{name:"parthi", company:"infofaces", place:"mumbai", start:1993, end:2007},
{name:"karthi", company:"infofaces", place:"mumbai", start:1994, end:2007},
{name:"karthi", company:"softcrylic", place:"bangalore", start:1999, end:2010},
{name:"parthi", company:"softcrylic", place:"bangalore", start:1995, end:2010},
{name:"meenu", company:"tcs", place:"mysore", start:2009, end:2014},
{name:"sandy", company:"cts", place:"australia", start:2011, end:2019}
];
console.log(item);

const age = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];
console.log(age);

//foreach//
item.forEach(function(indexVal){
    console.log("forEach value:",indexVal.name);
    return indexVal.name;
});

item.forEach((indexVal) => {console.log("foreach value with arrow function:",indexVal)});

//map//
let map = item.map(function(indexVal){
    return indexVal.name;
});
console.log("map value:",map);

let map1 = item.map(indexVal => indexVal.name);
console.log("map value with arrow function:",map1)

//filter//
let emptyArray = [];
for(i=0;i<age.length;i++){
    console.log(age[i]);
    if(age[i]>=21){
        emptyArray.push(age[i]);
    }
}
console.log("using normal for loop",emptyArray);

let ageFilter = age.filter(function(ageIndex){
    if(ageIndex>=21){
        return true;
    }
});
console.log("using filter method",ageFilter);

let ageArrow = age.filter(ageIndex => ageIndex >= 21);
console.log("using arrow function",ageFilter);

let companyName = item.filter(function(companyName){
    if(companyName.company === "infofaces"){
        return true;
    }
});
console.log("using filter method with company name",companyName);

let companyNameArrow = item.filter(companyName => companyName.company === "softcrylic");
console.log("using arrow function",companyNameArrow);

let companyStart = item.filter(function(companyStart){
    //console.log(companyStart);
    if(companyStart.start >= 1992 && companyStart.start <= 1999){
        return true;
    }
});
console.log("using filter method with company start: ",companyStart);

let companyStartArrow = item.filter(companyStart => companyStart.start >= 1992 && companyStart.start <= 1999);
console.log("using filter arrow function with company start: ",companyStartArrow);

//map//
let companyNameStartEnd = item.map(function(companyNameStartEnd){
    return `${companyNameStartEnd.name} [companyNameStartEnd.start - companyNameStartEnd.end]`;
})
console.log("using map method",companyNameStartEnd)

let companyNameStartEndArrow = item.map(companyNameStartEnd => `${companyNameStartEnd.name} [companyNameStartEnd.start - companyNameStartEnd.end]`)
console.log("using map method with arrow function",companyNameStartEndArrow)

//sort//
let companyStartEndSort = item.sort(function(c1,c2){
    if(c1.start > c2.start){
        return 1;
    }
    else{
        return -1;
    }
});
console.log("using sort method",companyStartEndSort);

let companyStartEndSortArrow = item.sort((a,b) => (a.start > b.start ? 1 : -1));    
console.log("using sort method with arrow function with ternary operator",companyStartEndSortArrow);

let ageAscending = age.sort((a,b) => a - b);    
console.log("age ascending",ageAscending);
let ageDecending = age.sort((a,b) => b - a);    
console.log("age decending",ageDecending);