function check(){
    var scoreOfUser = Number(userScore.value)
    var songfail = new Audio ("")
    var songpass = new Audio ("")
    var songaverage = new Audio ("")
    var songcredit = new Audio ("")
    var songgood = new Audio ("")
    var songexcellent = new Audio ("download.mp3")

    if (scoreOfUser==""){
        score.value = ""
    }
    else if(scoreOfUser>=0 && scoreOfUser<40) {
        score.value = "F -Fail😀"
        songfail.play()
        scorscore.style.color = "red"
    }
    else if(scoreOfUser>=40 && scoreOfUser<45){
        score.value = "E - Pass😔"
        songpass.play()
        score.style.color = "crimson"
        
    }
    else if(scoreOfUser>=45 && scoreOfUser<50){
        score.value = "D - Average😬"
        songaverage.play()
        score.style.color = "orange"
        
    }
    else if(scoreOfUser>=50 && scoreOfUser<60){
        score.value = "C - Credit😀"
        songcredit.play()
        score.style.color = "chartreuse"
        
    }
    else if(scoreOfUser>=60 && scoreOfUser<70){
        score.value = "B - Good 😀"
        songgood.play()
        score.style.color = "green"
        
    }

    else if(scoreOfUser>=70 && scoreOfUser<=100){
        score.value = "A - Excellent😀"
        songexcellent.play()
        score.style.color = "green"
        
    }
   
    else{
        score.value = "please alaye enter something here"
        score.style.color = "black"
        
    }
    }