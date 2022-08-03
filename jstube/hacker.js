var arr=[1,3,5,7,9]

console.log(arr)
var minValueInarry=Math.min(...arr)
console.log(minValueInarry)
var maxValueInarray=Math.max(...arr)
console.log(maxValueInarray)
var sumofmin=0;
var sumofmax=0;
var arraydifference=0;

for(var i=0;i<arr.length;i++){
  if(maxValueInarray===minValueInarry){
        sumofmax = (maxValueInarray)*(arr.length-1)
    }
  else if(arr[i]==maxValueInarray){
    sumofmin=sumofmin;
  }
  else{
    sumofmin=arr[i]+sumofmin;
  }
  console.log(sumofmin)
  
}
for(var i=0;i<arr.length;i++){
  if(maxValueInarray===minValueInarry){
        sumofmax = (maxValueInarray)*(arr.length-1)
    }
  else if(arr[i]==minValueInarry){
    sumofmax=sumofmax;
  }
  else{
    sumofmax=arr[i]+sumofmax;
  }
  console.log(sumofmax)
  
}
arrydifference=sumofmax-sumofmin;
console.log(arraydifference);


//find reapted no in array

const numbers = [18 ,90 ,90 ,13, 90 ,75 ,90, 8 ,90, 43];

let count =0;

numbers.filter((e,i) => {
  if(i !==numbers.indexOf(e) ){

count = count+1
}
})

console.log(count)
//no of repted candels
  const numbers = candles;

let count =0;

let maxNumber = Math.max(...candles);
for(let i =0;i<candles.length;i++){
    if(candles[i] ===maxNumber){
        
        count = count+1
    }
}

return count;
}