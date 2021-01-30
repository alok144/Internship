
var d = new Date(2018, 11, 24, 10, 33, 30, 0);
//document.getElementById("demo").innerHTML = d;

//console.log(d);

var e=new Date();
var f=e.getFullYear();
//console.log(f);	

var now = new Date();
//console.log(now);
var days = [];
// for (var d = new Date(2012, 0, 1); d <= now; d.setDate(d.getDate() + 1)) {
//     days.push(new Date(d));
// }

var chris=new Date();
chris.setDate(25);
chris.setMonth(11);
if(chris.getMonth()<=11 && chris.getDay()<=25){
    chris.setFullYear(now.getFullYear());
}
else{
    chris.setFullYear(now.getFullYear()+1);
}
//console.log("today: "+now+" christmas on: "+chris);
for (var d = now; d <= chris; d.setDate(d.getDate() + 1)) {
    days.push(new Date(d));
}

console.log("christmas coming in: "+days.length+" days");

//while(days.length) { console.log( days.shift() ); }
