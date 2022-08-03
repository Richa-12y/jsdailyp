// Create a Map
const fruits=([
     ["apples", 500],
     ["bananas", 300],
     ["oranges", 200],
     ["coconuts", 600],
     ["bananas", 100],
     ["pineapples",800],

])
const frutsData=fruits.map((el)=>{
     return{el}
})
console.log(frutsData)

//find out total occurence in given string?
let str="Hello World"
var ch="i";
var count=0;
for(var i=0;i<str.length;i++){
     console.log(i);
     if(str.charAt(i)==ch){
          count++;     
     }
}
console.log(`Total occures:${count}`)

const details=["shanu","A","B","C"]
console.log(details.length);
console.log(details[details.length-1]);
details.push("Richa")
console.log(details)
//push method add element in array

const Data=["jxgj","bxjb","jbjd","sjgdj","jsgdjds"]
//pop will delete the last element
console.log(Data.pop());
console.log(Data);

const newData=["jxgj","bxjb","jbjd","sjgdj","jsgdjds"]
console.log(newData.toString());
console.log(newData.join(" "));
//toString will convert the array to string
const newDatas=["1","2","3","4","6"]
console.log(newDatas.join( ));
//join  will convert the array to string
//toString and join both are doing the same work

const sd=["1","2","3","4","6"]
delete sd[sd.length-1]
console.log(sd)
//delete is used for delete the item in array
//we don't used delete key word bcz it is delete the element but 
//it will create whole in array

const tat=["878","777","555","111","999"]
console.log(tat.shift());
console.log(tat);
console.log(tat.unshift("syrat"))
console.log(tat)

//shift will remove first element for the array 
//unsift will add the element in first 

var gg=["students","son","moon","Level"]
var cc=["djgh","sdhjdh"]
var dd=["jgjd","sjhdj","djhjsdh","dhjdsh"]
console.log(gg.concat(cc,dd));
//concat() method add the element 

//if you want to delete something then used splice() method
dd.splice(2)
console.log(dd);
console.log(gg.indexOf("son"));
console.log(gg.lastIndexOf("moon"));


