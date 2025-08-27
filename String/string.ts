var myName:string = "Muhammad Asif Ansari";

var hello:string =`how are you?`

var age:number = 20;

var userName:string = "Ahmed";

var infoUser:string = `It's your name is ${userName} and
age is ${age}`
console.log(infoUser);


var num:number = 10;
var assignValue1:string = num.toString()
console.log(assignValue1);

var assignValue2:string = " " + num
console.log(assignValue2);

var isActive = true;
var str:string = isActive.toString(); 
console.log(str);


var item:boolean = false;
var otherItem:boolean;
otherItem = item;
console.log(otherItem);
// Type Inference
var user = "Asif";
var value = 17;
var isLive = true;
var blank = null 
var other = undefined
