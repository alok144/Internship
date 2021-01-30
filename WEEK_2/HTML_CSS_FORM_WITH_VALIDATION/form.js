
// function alphaOnly() {
//     var key = event.keyCode;`enter code here`
//     return ((key >= 65 && key <= 90) || key == 8);
// };
function alphaOnly(){
    var letters = /^[A-Za-z]+$/;
    if(inputtxt.value.match(letters)){
        //return true;
    }
    else{
        //alert("message");
        //return false;
        document.getElementById("efname").innerHTML="Name contains only alphabets";
    }
}


function showalert(){
    var name = document.forms["register"]["name"];
    var mobile = document.forms["register"]["mobile"];
    var email = document.forms["register"]["email"];
    var Password = document.forms["register"]["Password"];
    var ConfirmPassword = document.forms["register"]["ConfirmPassword"];
    var temp=0;
    if(name.value==""){
        //alert("Enter Name");
        document.getElementById("error").innerHTML="enter name";
        temp=1;
        
    }
    else if(mobile.value==""){
        //alert("Enter Mobile Number");
        document.getElementById("error").innerHTML="enter mobile number";
        temp=1;
    }
    else if(email.value==""){
        //alert("Enter Mobile Number");
        document.getElementById("error").innerHTML="enter email ID";
        temp=1;
    }
    else if(Password.value==""){
        //alert("Enter Password");
        document.getElementById("error").innerHTML="enter password";
        temp=1;
    }
    else if(ConfirmPassword.value==""){
        //alert("Enter Confirm Password");
        document.getElementById("error").innerHTML="confirm password";
        temp=1;
    }
    else if(Password.value!=ConfirmPassword.value){
        alert("Confirmed Password is not matched");
        //document.getElementById("econfirmpassword").innerHTML="enter mobile number";
        //temp=1;
    }
    else if(temp==0){
        alert(name.value+" Registered Succcessfully");
    }
    //event.preventDefault();
}
 

