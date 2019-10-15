let ticketRequired=prompt("How much ticket you wanted");
let ticketPrice=60;
let travelLocation="London";
let totalPrice= ticketRequired*ticketPrice;
alert(`Total Ticket Price: ${totalPrice}`);

if(ticketRequired>3)
{
alert(`Discounted Price: ${totalPrice*(15/100)}`);
}
else{
    alert(`Final Price: ${totalPrice}`);
}