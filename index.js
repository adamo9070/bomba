function play() {
    var audio = document.getElementById('audio');
    audio.play();
}

function toggle() {

    if (document.getElementById('image').style.display == 'none') {    
        document.getElementById('image').style.display = 'block';
    }
    else {
        document.getElementById('image').style.display = 'none';
    }
    
    var audio = document.getElementById('audio');
        audio.play();
}
            