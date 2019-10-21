
const region=dataset.dataset.analytics.map(r=>r.region);
console.log(`The total no of region names in the dataset:${region.length}`);




(()=>{let resultss=["2019-10-12","2019-10-13",
    "2019-10-12","2019-10-14",
    "2019-10-15","2019-10-12","2019-10-12",
    "2019-10-12","2019-10-12","2019-10-12",
    "2019-10-17","2019-10-14"];
let finalResult=[];
resultss.forEach(item=>{
    if(!finalResult.includes(item)){
        finalResult.push(item);
    }

});
console.log(`FinalResult using forEach:${finalResult}`);

finalResult=[];
finalResult=[...new Set(resultss)];
console.log(`FinalResult using set:${finalResult}`);

finalResult=[];
finalResult=resultss.filter((item,index)=>{
   let hasItem= resultss.indexOf(item)===index;
    return hasItem;


}) 
console.log(`FinalResult using filter:${finalResult}`);

finalResult=[];
finalResult=resultss.reduce((uniqueList,item)=>{
    return uniqueList.includes(item)?uniqueList:[...uniqueList,item];
},[])


let numbers=[4,5,8,9,23];
let sumOfNumbers=numbers.reduce((sum,item)=>{return sum+item; },0)
let sumOfNumbersusingarrow=numbers.reduce((sum,item)=>sum+item,25);
console.log(`Sum of numbers using array reduce:${sumOfNumbersusingarrow}`);
console.log(`Sum of numbers using array reduce:${sumOfNumbers}`);
console.log(`FinalResult using Array Reduce:${finalResult}`);

})();
