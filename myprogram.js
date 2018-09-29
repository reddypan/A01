function caughtSpeeding(speed, isBirthday) {

    let speed1 = parseInt(speed)
    if (isBirthday) {
        if (speed1 <= 65) {
            alert("$100");
        } else if (speed1 >= 66 && speed1 <= 85) {
            alert("$150");
        } else if (speed1 >= 86) {
            alert("$200");
        }
    }

    if (speed1 <= 60) {
        alert("$100");
    } else if (speed1 >= 61 && speed1 <= 80) {
        alert("$150");
    } else {
        alert("$200");
    }
} 