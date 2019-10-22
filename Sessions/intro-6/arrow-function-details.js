function run(){

let x="88";
let y=88;
let z=34;
let largestNum = (x>=y && x>=z) ? x : (y>=x && y>=z) ? y : z;
console.log(largestNum);

}

run();
 
//IIF : Immediately Invoking Function



(function printBook(bookName){
 
console.log(`This ${bookName} has not  released `);

})('My Experiment with Truth - MK. Gandhi');


/*
const getBookInfo=(price,year)=>{
    console.log(`This book has ben released in year ${year} with price ${price}` );
}
*/


((price,year,totalBooks)=>{


const getAuthorRoyalty=(price,booksSold)=>{
    return (price*booksSold)/10;
}

const rolyalty=getAuthorRoyaltyLegacy(price,totalBooks);

console.log(`Royalty : ${rolyalty} This book has ben released in year ${year} with price ${price}` );


})(34,2009,320);