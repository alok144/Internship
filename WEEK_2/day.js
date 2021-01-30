var now = new Date();

//console.log("Today is: ");
var days=["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
if(now.getHours()==12 && now.getMinutes()==0 && now.getSeconds()==0){
    console.log("Today is: "+days[now.getDay()]);
    console.log("Noon: "+(now.getMinutes())+":"+now.getSeconds()+" ");
}
if(now.getHours()==23 && now.getMinutes()==0 && now.getSeconds()==0){
    console.log("Today is: "+days[now.getDay()]);
    console.log("Mid Night: "+(now.getMinutes())+":"+now.getSeconds()+" ");
}
else{
    if(now.getHours()<12){
        console.log("Today is: "+days[now.getDay()]);
        console.log(" "+now.getHours()+":"+(now.getMinutes())+":"+now.getSeconds()+"AM");
    }
    else{
        console.log("Today is: "+days[now.getDay()]);
        console.log("Current Time is: "+now.getHours()+":"+(now.getMinutes())+":"+now.getSeconds()+"PM");
    }
    
}
