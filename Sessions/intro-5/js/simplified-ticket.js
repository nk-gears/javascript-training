
//Function Expression (.js)
const computeTicketCostWithArrow=(tktParam,notifyByMail=false,emailId="NA")=>{
    const ticketCost= tktParam.noOfTickets * tktParam.ticketPrice;
    let discount= tktParam.noOfTickets > 3 ? ticketCost*(15/100) : 0;
    discount=discount + (tktParam.isSeniorCitizen ? ticketCost*(5/100) : 0);
    const totalCost= ticketCost - discount;
    trainName="Jodhpur Express";
    //if(notifyByMail) sendEmail(emailId);
    return totalCost;
}


const ticketParams={ isSeniorCitizen:false, noOfTickets:0,ticketPrice:200,discountPerc:15/100};

//ticketParams.noOfTickets=prompt("Enter the tickets required");
const totalCost = computeTicketCostWithArrow(ticketParams);
console.log(totalCost);
console.log(trainName);


//Sorting
let shopNames=["EDigital","Asus store","Reliance"];
//console.log(shopNames.sort().reverse());

shopNames=[
    {name:"EDigital",type:"array"},{name:"Asus store",type:"small"},{name:"Reliance",type:"big"}
    ];

function compareStoreName(store1, store2){
   return store1.name < store2.name ? 1 : store1.name > store2.name ? -1 : 0;
}

//console.log(shopNames.sort(compareStoreName));
const compareStoreNames=(store,nextStore)=> store.name < nextStore.name ? 1 : store.name > nextStore.name ? -1 : 0;
console.log(shopNames.sort(compareStoreNames));

/*
[] This is Array

[]RED Box :
{} Object 1 : coin is an object. head, tail
{} Object 2 : coin is an object
{} Object 3 : coin is an object
{} Object 4 : coin is an object



[
    {'head':'3 chakra','tail':'flower','value:1'},
    {'head':'3 chakra','tail':'flower','value:0.50'},
    {'head':'3 chakra','tail':'flower','value:5'},
    {'head':'3 chakra','tail':'flower','value:10'},
    {'head':'3 chakra','tail':'flower','value:1'},
]
*/
//["1rupper","10 ruppess"]
//let streetName="Canon Street is alays larger than regular street";

//shopNames=shopNames.sort((a,b)=> a-b);



//Function Declaration (.js)
/*
function computeTicketCost(tktParam,sendMail=false){
    const ticketCost= tktParam.noOfTickets * tktParam.ticketPrice;
    let discount= tktParam.noOfTickets > 3 ? ticketCost*(15/100) : 0;
    discount=discount + (tktParam.isSeniorCitizen ? ticketCost*(5/100) : 0);
    const totalCost= ticketCost - discount;
    printEmail(sendMail);
    return totalCost;
}
*/





// HOISTING