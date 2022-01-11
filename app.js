var quizButton = document.getElementById("button")
var main = document.getElementById("main")
var initialText = document.getElementById("initial")
var tryText = document.getElementById("try")

var card1 = document.getElementById("card-1")
var card2 = document.getElementById("card-2")
var card3 = document.getElementById("card-3")
var card4 = document.getElementById("card-4")
var card5 = document.getElementById("card-5")
var card6 = document.getElementById("card-6")
var card7 = document.getElementById("card-7")
var card8 = document.getElementById("card-8")
var card9 = document.getElementById("card-9")
var card10 = document.getElementById("card-10")

var cardForm = document.getElementById("card-form")

var cardHS = document.getElementById('card-highscores')

var btnHighscore = document.getElementById('viewscore')
var scoreDisplay = document.getElementById("scores")

var optionBtn1 = document.getElementById("option1")
var optionBtn2 = document.getElementById("option2")
var optionBtn3 = document.getElementById("option3")
var optionBtn4 = document.getElementById("option4")

var goBackBtn = document.getElementById('goback') 

var timeText = document.getElementById('time')

var clearScoresBtn = document.getElementById('clear');

var timer = null;


btnHighscore.addEventListener('click', function(){
    main.style.display = "none"
    cardHS.style.display = 'flex'
    displayScores()
})


var timeNumber = 60;
timeText.innerHTML = timeNumber;


quizButton.addEventListener('click', function(){
    main.style.display = "none";
    card1.style.display = "flex";
    btnHighscore.style.visibility = 'hidden';
    startTimer();
    
})

function subtractTimer(event){
    event.preventDefault()
    timeNumber = timeNumber - 4;
}


card1.children[4].addEventListener('click', function(event){
    event.preventDefault()
    timeNumber = timeNumber - 5;
    console.log(event)
})
// optionBtn2.addEventListener('click', function(event){
//     event.preventDefault()
//     timeNumber = timeNumber - 5;
// })
// optionBtn3.addEventListener('click', function(event){
//     event.preventDefault()
//     timeNumber = timeNumber - 5;
// })
// optionBtn4.addEventListener('click', function(event){
//     event.preventDefault()
//     // timeNumber = timeNumber - 5;
// })





card1.children[3].addEventListener('click', function(event){
    card1.style.display = "none";
    card2.style.display = 'flex';
    event.preventDefault()
    timeNumber = timeNumber + 5;
})

card2.children[1].addEventListener('click', function(event){
    card2.style.display = "none";
    card3.style.display = 'flex';
    event.preventDefault()
    timeNumber = timeNumber + 5;
})

card3.children[4].addEventListener('click', function(event){
    card3.style.display = 'none';
    card4.style.display = 'flex';
    
    event.preventDefault()
    timeNumber = timeNumber + 5;

})

card4.children[4].addEventListener('click', function(event){
    card4.style.display = 'none';
    card5.style.display = 'flex';
    
    event.preventDefault()
    timeNumber = timeNumber + 5;

})

card5.children[3].addEventListener('click', function(event){
    card5.style.display = 'none';
    card6.style.display = 'flex';
    
    event.preventDefault()
    timeNumber = timeNumber + 5;

})

card6.children[3].addEventListener('click', function(event){
    card6.style.display = 'none';
    card7.style.display = 'flex';
    
    event.preventDefault()
    timeNumber = timeNumber + 5;

})

card7.children[2].addEventListener('click', function(event){
    card7.style.display = 'none';
    card8.style.display = 'flex';
    
    event.preventDefault()
    timeNumber = timeNumber + 5;

})

card8.children[1].addEventListener('click', function(event){
    card8.style.display = 'none';
    card9.style.display = 'flex';
    
    event.preventDefault()
    timeNumber = timeNumber + 5;

})

card9.children[1].addEventListener('click', function(event){
    card9.style.display = 'none';
    card10.style.display = 'flex';
    
    event.preventDefault()
    timeNumber = timeNumber + 5;

})

card10.children[2].addEventListener('click', function(event){
    card10.style.display = 'none';
    cardForm.style.display = 'flex';
    clearInterval(timer)
    event.preventDefault()
    timeNumber = timeNumber + 5;
    btnHighscore.style.visibility = 'visible';
    

})

goBackBtn.addEventListener('click', function(){
    main.style.display = "flex"
    cardHS.style.display = 'none'
    timeNumber = 60;
    timeText.innerHTML = timeNumber; 
}

)


function displayScores(){
    cardHS.style.display = 'flex'
    scoreDisplay.innerHTML = null;
    var currentScores = localStorage.getItem('Initial')
    if(currentScores){
        var data = JSON.parse(currentScores)
        var parsedData = data.sort(function(a, b) {
            if (a.time < b.time) {
                return 1
            }
            if (a.time > b.time) {
                return -1
            }
            return 0
        })
        console.log(parsedData)
        for(var i = 0; i < parsedData.length; i++ ){
            var li = document.createElement('li');
            var textContents = document.createTextNode(parsedData[i].initial + ' : ' + parsedData[i].time ); 
            li.appendChild(textContents);
            scoreDisplay.appendChild(li)
        }
    }

}

clearScoresBtn.addEventListener('click', function() {
    scoreDisplay.innerHTML = null;
    localStorage.removeItem('Initial');
    initialsArray = [];
})



var initialsArray = [];
var storedInitials = localStorage.getItem('Initial');
if(storedInitials){
    initialsArray = JSON.parse(storedInitials)
}
console.log(storedInitials)

cardForm.children[2].addEventListener('click', function(event){
    event.preventDefault()
    var initial = cardForm.children[1].value;
    var scoreDetails = {
        initial: initial,
        time: timeNumber
    };
    initialsArray.push(scoreDetails);

    localStorage.setItem("Initial", JSON.stringify(initialsArray));

    
    console.log(localStorage);


    cardForm.style.display = 'none';
    cardHS.style.display = "flex";
    displayScores()

})



function startTimer(){

    timer = setInterval(function(){
        timeNumber--;
       if(timeNumber <= 1){
        clearInterval(timer)
        card1.style.display = 'none';
        card2.style.display = 'none';
        card3.style.display = 'none';
        card4.style.display = 'none';
        card5.style.display = 'none';
        card6.style.display = 'none';
        card7.style.display = 'none';
        card8.style.display = 'none';
        card9.style.display = 'none';
        card10.style.display = 'none';
        cardForm.style.display = 'flex';
        btnHighscore.style.visibility = 'visible';
        timeNumber = 0;
    }
    timeText.innerHTML = timeNumber; 
    }, 1000)
    
}











