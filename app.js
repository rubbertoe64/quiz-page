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
// var cardNext = [card1, card2, card3]
// var card4 = document.getElementById("card-4")
var optionText1 = document.getElementById("option1")
var optionText2 = document.getElementById("option2")
var optionText3 = document.getElementById("option3")
var optionText4 = document.getElementById("option4")

console.log(card1)



quizButton.addEventListener('click', function(){
    main.style.display = "none";
    card1.style.display = "flex";
    
})


card1.children[3].addEventListener('click', function(){
    card1.style.display = "none";
    card2.style.display = 'flex';
})

card2.children[1].addEventListener('click', function(){
    card2.style.display = "none";
    card3.style.display = 'flex';
})

card3.children[4].addEventListener('click', function(){
    card3.style.display = 'none';
    card4.style.display = 'flex';
    

})

card4.children[4].addEventListener('click', function(){
    card4.style.display = 'none';
    card5.style.display = 'flex';
    

})

card5.children[3].addEventListener('click', function(){
    card5.style.display = 'none';
    card6.style.display = 'flex';
    

})

card6.children[3].addEventListener('click', function(){
    card6.style.display = 'none';
    card7.style.display = 'flex';
    

})

card7.children[2].addEventListener('click', function(){
    card7.style.display = 'none';
    card8.style.display = 'flex';
    

})

card8.children[1].addEventListener('click', function(){
    card8.style.display = 'none';
    card9.style.display = 'flex';
    

})

card9.children[1].addEventListener('click', function(){
    card9.style.display = 'none';
    card10.style.display = 'flex';
    

})

card10.children[2].addEventListener('click', function(){
    card10.style.display = 'none';
    cardForm.style.display = 'flex';
    

})

cardForm.children[1, 2].addEventListener('click', function(event){
    event.preventDefault()
    var initials = cardForm.children[1].value
    localStorage['initials'] = initials
    console.log(localStorage)

})

var timerfunc = setInterval(function(){
var timer = 61;
var timerCountdown = timer--
document.getElementById('time')

}, 1000)





