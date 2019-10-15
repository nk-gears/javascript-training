let nooftickets = prompt("How many tickets you want?");
let destination = prompt("Where do you want to travel?");
let ticketprice = 150;
const discount = ticketprice*(15/100);
let totalprice = nooftickets*ticketprice;
if (nooftickets>3){

    alert("Final price:" + (totalprice-discount));

else
    alert("Final Price:" + totalprice);
}

