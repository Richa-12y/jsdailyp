var student=["Richa","Ashu","Anu","Reeni"]

console.log(student.push("Dev"));
//it will add that data in array
student[student.length]="debanshu"
console.log(student);

var data=["Richa","Ashu","Anu","Reeni"]
//it will take last data that is reeni
console.log(data.pop());

var ex=["gfhj","shdgj","shdghsg","wiyeiwye"]
//it will convert array to string
console.log(ex.toString());
//join also will same as like toString
console.log(ex.join("/"));

//if we want to delete something  then we have to use delete keyword
//delete it is not delete the item it will create hole that why we don't use delete much

delete ex[ex.length-1];
console.log(ex)

var y=["gfhj","shdgj","shdghsg","wiyeiwye"]
y.splice(3,0, "kk")
y.splice(2,1, "jj")
//if we give splice(0) that means it will create space then add but if we give splice(1)it will delete 
//odd item then add new one.
console.log(y);

var array=["mounten","Sea","Island","forest","Cave"]
array.splice(2);
console.log(array);
console.log(array.sort());


const numbers=[1,2,3,4,5,6,7];
console.log(Math.min.apply(null,numbers));
console.log(Math.max.apply(null,numbers));

numbers.forEach(function(element){
     console.log(element)
})
const number=[1,2,3,88,99,100];
const newArr=number.filter(function(element){
     return element < 4;
})
console.log(newArr)

let days;
switch (new Date().getDay()) {
     case 0:
          days = "Sunday";
          break;
          case 1:
               days="Monday";
               break;
               case 2:
                    days="Tuesday";
                    break;
                    case 3:
                         days="Wednesday";
                         break;
                         case 4:
                              days="Thursday";
                              break;
                              case 5:
                                   days="Friday";
                                   break;
                                   case 6:
                                        days="Saturday"
                                         break;
}
console.log( "Today is " + days)

let text;
switch (new Date().getDay()) {
     case 4:
     case 5:
          text="Soon it is Weekend";
          break;
     case 0:
     case 6:  
          text="It is Weekend";
          break;

     default:
          text = "Looking forward to the Weekend";

}
console.log(text);


const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
const bike =["ABC","BCC","GHH","IIGG"];

let texts = "";
let newItem="";
for (let i = 0; i < cars.length; i++) {
  texts += cars[i] + " ";
}

for(let i=0;i<bike.length; i++){
   newItem +=bike[i] + " "
}
console.log(texts);
console.log(newItem);

for(i=0;i<8;i++){
     let str="&";
     for(j=i;j<8;j++){
          str=str+"#";
     }
     console.log(str);
}
let n=4;
for(i=1;i<=n;i++){
     let strs="";
     for(j=1;j<=n;j++){
          strs=strs+"*"
     }
     console.log(strs)
}

const person = {fname:"John", lname:"Doe", age:25,address:"Purnea"}; 
let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}
console.log(txt);


// Create a String
const name = "W3Schools";

// List all Elements
let tex = ""
for (const x of name) {
  tex += x + "";
}
console.log(tex);

// Create aa Array
const letters=["a","b","c","d"];
//List all Elements

let newText="";
for (const x of letters) {
     newText += x + " ";
   }
  
   console.log(newText);
