function caughtSpeeding(speed, isBirthday) {
    let speed1 = parseInt(speed)
    let today = new Date();
    if (isBirthday) {
        if (speed1 <= 65) {
            alert("The fine will be: $0");
        } else if (speed1 >= 66 && speed1 <= 85) {
            alert("The fine will be: $0");
        } else if (speed1 >= 86) {
            alert("The fine will be: $0");
        }
    }
    else {
        if (speed1 <= 60) {
            alert("The fine will be: $100");
        } else if (speed1 >= 61 && speed1 <= 80) {
            alert("The fine will be: $150");
        } else {
            alert("The fine will be: $200");
        }
    }
} 