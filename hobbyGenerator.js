var body = document.querySelector("body");

var hobbies = [
        'Schreien',
        'Schlafen',
        'Kaffee trinken',
        'nur noch schnell was Machen',
        'arm Sein',
        'brav Sein',
        'lieb Sein',
        'gscheit Sein',
        'klein Sein',
        'Eise Essen',
        'lieb Schauen',
        'immer Kriegen, was sie will, ',
        'immer genau Wissen, was sie grad will, ',
        'Kuscheln',
        'sich auf ihren Geburtstag Freuen',
        'im Blumentopf Sitzen',
        'fast eine ganze Babymausportion Essen',
        'fast einen ganzen Film Schauen'
        ];

function getRandomHobby() {
    var d = new Date();
    var monthDay = d.getMonth() + "-" + d.getDate();
    // months are 0-indexed, dates are 1-indexed!
    if (monthDay == "6-22"){
        return "ihren Geburtstag Feiern";
    }

    var randomHobby = hobbies[(Math.random() * hobbies.length) | 0]
    return randomHobby;
}

var currActivity = "Die Babymaus ist gerade mit " + getRandomHobby() + " beschäftigt!";
document.querySelector("#curr_activity").innerHTML = currActivity;