function validate(){

    let email = document.getElementById("email");
    let error1 = document.getElementById("error1");
    let psw = document.getElementById("psw");
    let error2 = document.getElementById("error2");

    let emailexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let pswexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        var emailid = new Boolean(false);
        var pswnum = new Boolean(false);

    if(emailexp.test(email.value)){
        email.style.border="2px solid green"
        error1.innerHTML = "valid";
        error1.style.color = "green"
        emailid = true;    
    }

    else{
        error1.innerHTML = "Invalid";
        error1.style.color = "red"
        email.style.border = "2px solid red"
        emailid = false;
    };

    if(pswexp.test(psw.value)){
        psw.style.border="2px solid green"
        error2.innerHTML = "valid";
        error2.style.color = "green"
        pswnum = true;    
    }

    else{
        error2.innerHTML = "Invalid";
        error2.style.color = "red"
        psw.style.border = "2px solid red"
        pswnum = false;
    };

    if(emailid && pswnum){
        return true;
    }
    else{
        return false;
    };
    
    
};
    
        
    
