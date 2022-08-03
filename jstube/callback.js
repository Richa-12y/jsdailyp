let showAlert=()=>{
     console.log("Hello Richa");
}
setTimeout(showAlert,3000)
console.log("good bye")
var a =5+5;
console.log(a)

function printStar(n)
for(let i=0;i<n;i++){
  let data= '';
  
  for(let k=6-i-1;k>0;k--){
data=data+' '
}
  for(let j=0;j<i+1;j++){
    data= data+'#'
  }
  console.log(data)
}
printStar(6)