//java =script properties are the values associated with javascript object

//A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.
//java script is event driven language i.e instead of waiting for response before moving on javascript will keep executing while
//listening for other events
//callbacks are a way to make sure certain code doesn't execute until other code has already finished execution
//function fun1(){
//    console.log("fun1");
//}

//function fun2(fun1){
//    console.log("fun2");
    //fun1();
//}
//var a=10;
//console.log(a);
//var b="alok";
//console.log(b);
//var c={fname:"alok", lname:"singh"};
//console.log(c);
//var d=["al","cd","gh","jh"];
//d.length=45;
//d[8]=78;
//console.log(d[8]);
//console.log(d.length);
// d.reverse();
// d.sort();
// d.pop();
// for(var i=0;i<d.length;i++){
    //console.log(d[i]);
//}
//alert("hello");
//console.log(d["length"]);

//setTimeout(fun1,5000);
//fun2();
//function fun3(fun1){
    //fun1();
//}

//fun3();
//fun2();

// function fun4(){
//     setTimeout(function(){
//         console.log("fun4");
//     },3000)
// }
// fun4();

// function doHomework(subject) {
//     console.log(`Starting my ${subject} homework.`);
// }
// doHomework("Math");

// function doHomework(subject, call) {
//     console.log(`Starting my ${subject} homework.`);
//     call();
//   }
//   function alertFinished(){
//     console.log('Finished my homework');
//   }
//   doHomework('math', alertFinished);
  

var a="alok";
function fun(){
    console.log(a);
}
fun();