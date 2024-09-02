// Cashing the DOM, jadi ga perlu selalu ditulis terus karna udh declare variable
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");  
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const gajah_div = document.getElementById("gajah");
const orang_div = document.getElementById("orang");
const semut_div = document.getElementById("semut");

// Function untuk random choice computer
function getComputerChoice() {
    const choices = ['gajah', 'orang', 'semut'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Function untuk user choice
function main(){
gajah_div.addEventListener ('click', function() {
    game("gajah");
})

orang_div.addEventListener ('click', function() { 
    game("orang");
})

semut_div.addEventListener ('click', function() {
    game("semut");
})
}

main();

// Function untuk game 
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "gajahorang":
        case "orangsemut":
        case "semutgajah":
            win(userChoice, computerChoice);
            break;
        case "oranggajah":
        case "semutorang":
        case "gajahsemut":
            lose(userChoice, computerChoice);
            break;
        case "gajahgajah":
        case "orangorang":
        case "semutsemut":
            draw(userChoice, computerChoice);
            break;
    }
}

// Function untuk result
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(userChoice) + " Mengalahkan " + convertToWord(computerChoice) + ". Kamu Menang!";
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(userChoice) + " Dikalahkan " + convertToWord(computerChoice) + ". Kamu Kalah :(";
}

function draw(userChoice, computerChoice){
    result_div.innerHTML = convertToWord(userChoice) + " Sama Dengan " + convertToWord(computerChoice) + ". Hasil Seri";
}

// Function untuk merubah gajah dll menjadi huruf besar
function convertToWord(Letter) {
    if (Letter === "gajah") return "Gajah";
    if (Letter === "orang") return "Orang";
    return "Semut";
}