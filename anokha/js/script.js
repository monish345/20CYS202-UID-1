/*
Author : Dharmik S
Created Date : 28 November 2022
Update Date : 10 January 2023
Description : Javascript for Registration Page of Anokha 
*/
function NameCheck() {
    var x = document.getElementById("firstname").value;
    var y = x.split("")
    let sp = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
    var arrLen = sp.length;
    for (var i = 0; i < arrLen; i++) {
        if (y.includes(sp[i])) {
            alert("Special character present in Name please remove it")
            document.getElementById("firstname").focus()
            break
        }
    }


}


function ValidateEmail()  
{  
var x=document.getElementById("Email").value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n");  
  return false;  
  }  
}  

function PhoneNumberCheck() {

    var x = document.getElementById("phoneno").value;
    console.log(x)
    if (!(x.toString().length == 10)) {
        alert("Not a valid Phone Number")
        document.getElementById("phoneno").focus()
    }
}

function PasswordCheck() {
    
    var x = document.getElementById("password").value
    var upper = /[A-Z]/g
    var lower = /[a-z]/g
    var number = /[0-9]/g
    var sp = /[!@#$%^&*()]/g
    var y = x.toString().length

    if (y >= 8) {  
    }
    else {
        alert("password must be 8 letters atleast");
    }
	if (x.match(upper)) {
        }
    else {
	     alert("ther is no uppercase");
        }
	if (x.match(lower)) {
        }
    else {
	     alert("ther is no lowercase");
        }
    if (x.match(number)) {
        }
    else {
	     alert("ther is no numeric");
        }		
	if (x.match(sp)) {
        }
    else {
	     alert("ther is no specialcase");
        }	
    

}



function passCh() {
    var p1 = document.getElementById("password").value
    var p2 = document.getElementById("confirmpassword").value
    if (p1 != p2) {
        alert("Password is Not Same")
        document.getElementById("confirmpassword").focus()
    }

}

function subbut(){
	var flag=0;
	var u = document.getElementById("firstname").value;
	var u1 = document.getElementById("lastname").value;
	var u2 = document.getElementById("phoneno").value;
	var u3 = document.getElementById("Email").value;
	var u4 = document.getElementById("password").value;
	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



	if(u.length==0 || u1.length==0 || u2.length==0 || u3.length==0 || u4.length==0){
		alert("Input Fields are Empty");
		flag=1;
	}
	
	else{
		if(!(u3.match(validRegex)))
    		{
        		alert("Invalid email address!");
			document.getElementById("Email").focus();
			flag=1;
    		}
		else{
			if(u2.length<10 || u2.length>10)
    			{
        			alert("Incorrect Phone Number Length");
				document.getElementById("phoneno").focus();
				flag=1;
    			}
		}
		
	}
	if(flag==0){
		alert("Successfully Registered");
}
	

	
}

