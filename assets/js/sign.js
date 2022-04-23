function validate(){
    
    let fname = document.getElementById("fname");
    let errorf = document.getElementById("error");
    let email = document.getElementById("email");
    let error1 = document.getElementById("error1");
    let adr = document.getElementById("adr");
    let error2 = document.getElementById("error2");
    let city = document.getElementById("city");
    let error3 = document.getElementById("error3");
    let state = document.getElementById("state");
    let error4 = document.getElementById("error4");
    let pincode = document.getElementById("pincode");
    let error5 = document.getElementById("error5");
    let lname = document.getElementById("lname");
    let error6 = document.getElementById("error6");
    let mobile = document.getElementById("mobile");
    let error7 = document.getElementById("error7");
    let psw = document.getElementById("psw");
    let error8 = document.getElementById("error8");
    let repsw = document.getElementById("repsw");
    let error9 = document.getElementById("error9");
    

    let nameexp = /^([A-Za-z]{3,15})$/;
    let emailexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let adrexp = /^([A-Za-z0-9.-]{5,30})$/;
    let cityexp = /^([A-Za-z0-9-]{3,15})$/;
    let stateexp = /^([A-Za-z]{3,15})$/;
    let pincodeexp = /^([0-9]{6})$/;
    let lnameexp = /^([A-Za-z\.-]+)$/;
    let mobileexp = /^([0-9]{10})$/;
    let pswexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        var firstname = new Boolean(false);
        var emailid = new Boolean(false);
        var address = new Boolean(false);
        var cityname = new Boolean(false);
        var statename = new Boolean(false);
        var pincodenum = new Boolean(false);
        var lastname = new Boolean(false);
        var mobilenum = new Boolean(false);
        var pswnum = new Boolean(false);
        var repswnum = new Boolean(false);

    if(nameexp.test(fname.value)){
        fname.style.border="2px solid green"
        errorf.innerHTML = "valid";
        errorf.style.color = "green"
        firstname = true;
    }

    else{
        errorf.innerHTML = "Invalid";
        errorf.style.color = "red"
        fname.style.border = "2px solid red"
        firstname = false;
    };

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
    
    if(adrexp.test(adr.value)){
        adr.style.border="2px solid green"
        error2.innerHTML = "valid";
        error2.style.color = "green"
        address = true;
    }

    else{
        error2.innerHTML = "Invalid";
        error2.style.color = "red"
        adr.style.border = "2px solid red"
        address = false;
    };

    if(cityexp.test(city.value)){
        city.style.border="2px solid green"
        error3.innerHTML = "valid";
        error3.style.color = "green"
        cityname = true;    
    }

    else{
        error3.innerHTML = "Invalid";
        error3.style.color = "red"
        city.style.border = "2px solid red"
        cityname = false;
    };

    if(stateexp.test(state.value)){
        state.style.border="2px solid green"
        error4.innerHTML = "valid";
        error4.style.color = "green"
        statename = true;    
    }

    else{
        error4.innerHTML = "Invalid";
        error4.style.color = "red"
        state.style.border = "2px solid red"
        statename = false;
    };

    if(pincodeexp.test(pincode.value)){
        pincode.style.border="2px solid green"
        error5.innerHTML = "valid";
        error5.style.color = "green"
        pincodenum = true;    
    }

    else{
        error5.innerHTML = "Invalid";
        error5.style.color = "red"
        pincode.style.border = "2px solid red"
        pincodenum = false;
    };

    if(lnameexp.test(lname.value)){
        lname.style.border="2px solid green"
        error6.innerHTML = "valid";
        error6.style.color = "green"
        lastname = true;    
    }

    else{
        error6.innerHTML = "Invalid";
        error6.style.color = "red"
        lname.style.border = "2px solid red"
        lastname = false;
    };

    if(mobileexp.test(mobile.value)){
        mobile.style.border="2px solid green"
        error7.innerHTML = "valid";
        error7.style.color = "green"
        mobilenum = true;    
    }

    else{
        error7.innerHTML = "Invalid";
        error7.style.color = "red"
        mobile.style.border = "2px solid red"
        moblienum = false;
    };

    if(pswexp.test(psw.value)){
        psw.style.border="2px solid green"
        error8.innerHTML = "valid";
        error8.style.color = "green"
        pswnum = true;    
    }

    else{
        error8.innerHTML = "Invalid";
        error8.style.color = "red"
        psw.style.border = "2px solid red"
        pswnum = false;
    };

    if(repsw.value==psw.value){
        repsw.style.border="2px solid green"
        error9.innerHTML = "valid";
        error9.style.color = "green"
        repswnum = true;    
    }

    else{
        error9.innerHTML = "Invalid";
        error9.style.color = "red"
        repsw.style.border = "2px solid red"
        repswnum = false;
    };



    if(firstname && emailid && address && cityname && statename && pincodenum && lastname && mobilenum && pswnum && repswnum){
        return true;
    }
    else{
        return false;
    };
    
    
};
