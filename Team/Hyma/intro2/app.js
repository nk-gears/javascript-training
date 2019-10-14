const noOfTicketsInput = prompt("How much Tickets you want");
const destination = prompt("Where do you want to Travel");
const ticketPrice=500;
const noOfTickets=parseInt(noOfTicketsInput);
let totalAmt= noOfTickets*ticketPrice;

if(noOfTickets>3){
    const discount=15/100;
    const discounted=totalAmt * discount;
    totalAmt=totalAmt - discounted;
}

/************************** */
alert("Total Ticket Cost : " + (totalAmt-10).toString());
alert(`Total Ticket Cost : ${totalAmt}`);
console.log(`Total Ticket Cost : ${totalAmt}`);
