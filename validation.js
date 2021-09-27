
//FOR USERNAME VALIDATION
let unamenode=document.getElementById("Uname");
let spannode1=document.getElementById("error1");
function validate1(){
    spannode1.innerHTML="";
    let uname=unamenode.value;
    
    if(uname=='')
    {
    spannode1.innerHTML="This Field is required";
    unamenode.style.border="3px solid red";
    return false;
    }
    else if(uname.includes(' '))
    {
    spannode1.innerHTML="Space is not allowed";
    unamenode.style.border="3px solid red";
    return false;
    }
    else
    {
        unamenode.style.border="3px solid green";
        return true;
    }
}

//FOR PASSWORD VALIDATION

let passnode=document.getElementById("Pass");
let spannode3=document.getElementById("error2");
function validate2(){
    spannode3.innerHTML="";
    let password=passnode.value;
    let regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(password=="")
    {
    spannode3.innerHTML="This Field is required";
    passnode.style.border="3px solid red";
    return false;
    }
    else if(password.includes(' '))
    {
        spannode3.innerHTML="Space is not allowed";
        passnode.style.border="3px solid red";
    }
    else if(password.length<4 || password.length<6)
    {
    spannode3.innerHTML="Password should be 4 to 6 character long";
    passnode.style.border="3px solid red";
    return false;
    }

    else if(regExp.test(password)==false){
        spannode3.innerHTML="Password should be alphanumeric with special symbol";
        passnode.style.border="3px solid red";
        return false;
    }
    else
    {
        passnode.style.border="3px solid green";
        return true;
    }
}


function validateform(){
    v1=validate1();
    v2=validate2();
    if(v1 && v2)
    return true;
    else
    return false;

}