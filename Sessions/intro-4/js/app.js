let analyticsList=dataset.dataset.analytics;

let results=[];
analyticsList.forEach(function(al){
    if(al.region=="America")
        results.push(al.name);
});
//Basic without Arrows
/*
let transformedData=analyticsList.map(function(al){
    if(al.region=="America")
        return al.name;
});
*/


const transformedData=analyticsList.map((al,index)=>{
    //if(al.region=="America")
        return al.name;
});

const regionSales={
    "srilanka":{
        "mar":2000,"apr":3000
    },
    "india":{
        "mar":3440,"apr":9000
    },
}

regionSales.india.mar=7777;
console.log(regionSales.india.mar);

let x="54";
let age=54;
//String, Number, Boolean

if(x===String(age))
    console.log("Valid age",age);
else
    console.log("Invalid age");

//Excel file
let payment_status="true";
console.log(typeof payment_status);
payment_status=JSON.parse(payment_status);

console.log(typeof payment_status);
if(payment_status===true)
    console.log("Amount paid");
else
    console.log("Amount not paid");


let shopNames=["Eigital","Asus store","Reliance"];
let streetName="Canon Street is alays larger than regular street";

//shopNames=shopNames.sort((a,b)=> a-b);
//console.log(shopNames);

//console.log("Shop Name" ,shopName >  streetName);

//console.log(parseFloat(x));
//=> Hey compiler, please try your best to parse
//=> Number => Strict
//parseInt, parseFloat

const updateText=transformedData[0].replace("America ARC Website","US ARC");


console.log("Using ForEach ", results);
console.log("Using Map ", transformedData);
console.log("Using Map after Replace ", updateText);