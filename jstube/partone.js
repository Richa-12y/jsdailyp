let num=8
if(num%2===0){
  console.log('even')
}
else{
     console.log('odd')

}
let number=9
if(number%3===0){
     console.log('odd')
}
else{
     console.log('even')
}

var a=[1,2,3]
var b=a;
var c=JSON.parse(JSON.stringify(a));
a[0]=89;
console.log(b);
console.log(c);

var dd={name:"darsh",location:"mumbai"}
var de=JSON.parse(JSON.stringify(dd));
dd.name="Arsh"
console.log(dd)
console.log(de)

var no=[11,22,33]
var nos=no;
no[0]=[10,20,30]
console.log(nos[0]);

var y=10;
var z=y;
y=15;
console.log(y,z);
