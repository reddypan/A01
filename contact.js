function email(){
    let r = confirm("Trust me, your information is secured with me. Do you want to submit your information?");
    if (r == true) {
        alert("Thanks for submitting your information. Your information is mailed to me and I will get in touch with you as soon as possible.");
    } else {
        alert("I know you don't trust me. Anyway Thanks! Your informtion is not recorded. However, you can directly contact me at the details provided in this site.");
    }
}

function onlyAlphabets(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        }
        else if (e) {
            var charCode = e.which;
        }
        else { return true; }
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
            return true;
        else
            return false;
    }
    catch (err) {
        alert(err.Description);
    }
}

function onlyNumbers(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        }
        else if (e) {
            var charCode = e.which;
        }
        else { return true; }
        if ((charCode > 47 && charCode < 58))
            return true;
        else
            return false;
    }
    catch (err) {
        alert(err.Description);
    }
}
