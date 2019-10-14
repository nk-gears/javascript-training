var noOfTickets = prompt("How much Tickets you want");
let destination = prompt("Where do you want to Travel");
let discount=15/100;
if(noOfTickets>3){
    alert("Total Ticket Amount:",noOfTickets*500 - discount);
}else{
    alert("Total Ticket Amount:",noOfTickets*500);
}

