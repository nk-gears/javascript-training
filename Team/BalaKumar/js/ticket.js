const ticketRequired=prompt("How much ticket you wanted");
const ticketPrice=60;
const travelLocation="London";
const totalPrice= ticketRequired*ticketPrice;
alert(`Total Ticket Price: ${totalPrice}`);

if(ticketRequired>3)
{
alert(`Discounted Price: ${totalPrice*(15/100)}`);
}
else{
    alert(`Final Price: ${totalPrice}`);
}