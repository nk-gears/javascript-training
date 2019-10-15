let nooftickets = prompt("How many tickets you want?");
let destination = prompt("Where do you want to travel?");
let ticketprice = 100;
let totalprice = nooftickets*ticketprice;
const discount = totalprice*(15/100);
if (nooftickets>3){
    alert("TotalPrice:" + totalprice);
    alert("Amount to be Paid after discount:" + (totalprice-discount));
}
else
{
    alert("Amount to be Paid:" + totalprice);
}

