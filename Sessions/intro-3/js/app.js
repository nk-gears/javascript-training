//Undefined
// Whenever the code encounters a undefined variable
//let age=null;
//console.log(undefined===null);
let productName;

if(productName==null)
{
   console.log("Product not initialized");
}
//Compute Product Inventory
//Dealing with array calculations.
let products=[];//"mouse","keybord","usb cable"];

let selected=products.length>0?products[0]:null;

///
//Networks calls
//Parsing a dynamic data
//
// JSON
let apiResult={"status":"success","data":{name:"mouse"}};
//let apiResult={"status":"success","data":["mouse","keybord","usb cable"]};
//let apiResult={"status":"failed","error":"Error occured to get the data"};

let studentInfo="{'name :'Arjun'}";
try{
console.log(JSON.parse(studentInfo));
}catch{
   console.log("Uanble to parse the script due to invalid JSON content");
}



if(apiResult.data)
   console.log(`We have got results  ${apiResult.data.length}`);

//
try{
//apicalls
let selected=products[0];
}
catch(ex){
console.log(ex);
}


  //console.log(`My age is ${age}`);

  //-- Working with Arrays


let productListing=["mouse","keybord","usb cable"];
let newProducts=["lcd","mobile"];

let inventoryList=productListing.concat(newProducts);

//For(i=0i<)//
//map variable
//foreach
//for of
inventoryList.forEach(function(prod,i){
   console.log(`Row ${i+1} The Product name is  ` +  prod);
});

let upperCaseProducts=inventoryList.map(function(p,i){
      return p.toUpperCase();
})

let upperCaseProducts=inventoryList.map((p,i)=>{
   return p.toUpperCase();
})


console.log(upperCaseProducts);