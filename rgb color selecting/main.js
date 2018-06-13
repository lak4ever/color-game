console.log("connected");
//you fuking idiont ", burowo tiba warada colrs athulee dardi ko space"
var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);



var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#msg");
var h1 = document.querySelector ("h1");
var button = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");


colorDisplay.textContent = pickedColor;
console.log(pickedColor);



for (var i = 0; i < squares.length; i++) {
     //adding inital colors
    squares[i].style.background = colors[i]; 
//add click listners to squares
    squares[i].addEventListener("click", function () {
        //grab color of clicked square
        var clickedColor = this.style.background;
        //compare color to pickedColor
        console.log(clickedColor , pickedColor);
        
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct"; 
            changeColors(clickedColor);
            h1.style.background = clickedColor;
            reset.textContent = " Play Again! ";
            
        }
        else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try again"; 
        }
    });
    
}

function changeColors(color) {
    //loop through all squeares
    for (var i = 0; i < squares.length; i++) {
    //change each colors
    squares[i].style.background = color;
        
    }
}

function pickColor(params) {
    //pick the random nuumber in js we use math it is a long long decimal
    //we use math . floo to chop of the decimal numbers

    var random = Math.floor(Math.random() * colors.length);
    return colors[random];

    //"M" Math should be capital and its floo not float

}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //repeat num items
    for (var i = 0; i < num ; i++) {
        //get random color and push into array 
        arr.push(randomColor())
    }

    //return the array
    return arr;
}

function randomColor(params) {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random()* 256)
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256)
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256)

    return "rgb(" + r + ", " + g + ", " + b + ")";
    /**alwyas be concern with space here if its regarding th array its a bug so we need add the space
     * ","  is wrong // ", " right
     */
}

reset.addEventListener("click", function reset() {
    //generate all new colors
    colors = generateRandomColors(numOfSquares);
    //pick new random color from array
    pickedColor = pickColor();
//omiitng the msg displya when we do play again so it want show
    messageDisplay.textContent = " ";

    //change the display color to match the new color
    colorDisplay.textContent = pickedColor;

    //dinata pase play agian nwei digatama tiyna oni play again button click karata pase ena onii new colors kiyla
    this.textContent = " New Colors ";



    //change the squares in the page
    //loop through all squeares
    for (var i = 0; i < squares.length; i++) {
        //change each colors
        squares[i].style.background = colors[i]; 
    }

    h1.style.background = "steelblue";

    
});


easy.addEventListener("click", function() {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);//colors only have three items
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
       if (colors[i]) {
           squares[i].style.background = colors[i]; 
          
       }else{
           squares[i].style.display = "none";
       }
       
        
    }
    
});

hard.addEventListener("click", function () {
    hard.classList.add("selected");
    easy.classList.remove("selected");
    numOfSquares = 6;
    colors = generateRandomColors(6);//colors only have three items
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        (colors[i]) 
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        


    }

});