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
        'Kuscheln'
        ];

function getRandomHobby() {
    var n = Math.random(hobbies.length);
    var randomHobby = hobbies[(Math.random() * hobbies.length) | 0]
    return randomHobby;
}

var currActivity = "Die Babymaus ist gerade mit " + getRandomHobby() + " beschäftigt!"
document.querySelector("#curr_activity").innerHTML = currActivity;