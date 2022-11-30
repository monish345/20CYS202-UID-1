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


function ValidateEmail() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var x = document.getElementById("Email").value;
    if (!x.match(mailformat)) {
        alert("You have entered an invalid email address!");
        document.getElementById("Email").focus()
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
    var Lendoc = document.getElementById("Len")
    var Updoc = document.getElementById("Up")
    var Lpdoc = document.getElementById("Lp")
    var Nudoc = document.getElementById("Nu")
    var Spdoc = document.getElementById("Sp")
    var x = document.getElementById("password").value
    var upper = /[A-Z]/g
    var lower = /[a-z]/g
    var number = /[0-9]/g
    var sp = /[!@#$%^&*()]/g
    var y = x.toString().length

    if (y > 8) {
        Lendoc.classList.remove("invalid")
        Lendoc.classList.add("valid")
    }
    else {
        Lendoc.classList.remove("valid")
        Lendoc.classList.add("invalid")
    }

    if (!!x.match(upper)) {
        Updoc.classList.remove("invalid")
        Updoc.classList.add("valid")
    }
    else {
        Updoc.classList.remove("valid")
        Updoc.classList.add("invalid")
    }

    if (!!x.match(upper)) {
        Updoc.classList.remove("invalid")
        Updoc.classList.add("valid")
    }
    else {
        Updoc.classList.remove("valid")
        Updoc.classList.add("invalid")
    }


    if (!!x.match(lower)) {
        Lpdoc.classList.remove("invalid")
        Lpdoc.classList.add("valid")
    }
    else {
        Lpdoc.classList.remove("valid")
        Lpdoc.classList.add("invalid")
    }


    if (!!x.match(number)) {
        Nudoc.classList.remove("invalid")
        Nudoc.classList.add("valid")
    }
    else {
        Nudoc.classList.remove("valid")
        Nudoc.classList.add("invalid")
    }



    if (!!x.match(sp)) {
        Spdoc.classList.remove("invalid")
        Spdoc.classList.add("valid")
    }
    else {
        Spdoc.classList.remove("valid")
        Spdoc.classList.add("invalid")
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


