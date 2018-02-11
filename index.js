var Word = require('./word.js');
var Letter = require('./letter.js');
var inquirer = require('inquirer');

function startGame(){
    inquirer.prompt([
        {
            type: "confirm",
            name: "Confirm",
            message: "Play Game?"
        },
        ]).then(function(inquirerResponse) {
            if (inquirerResponse.Confirm) {
                var words = ["Savannah", "Boston", "Chicago", "Portland", "Omaha"];
                function functionGame() {
                    var chances = 10;
                    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
                    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
                    var randomNumber = Math.floor(Math.random() * (words.length));
                    var wordSelect = words[randomNumber];
                    var constant = new Word.Word(wordSelect);

                    function continueGame() {
                        if (constant.underScores() == wordSelect && chances > 0) {
                            inquirer.prompt([{
                                type: "input",
                                name: "Value",
                                message: "Please choose a letter"
                            }]).then(function(inquirerResponse) {
                                if(inquirerResponse.Value){
                                    for (var i = 0; i < alphabet.length; i++) {
                                        var element = alphabet[i];
                                        if (element === answers.Value) {
                                            console.log(answers.Value);
                                            constant.guess(letter);
                                            console.log(constant.underScores());
                                            console.log("Correct!");
                                            nextPrompt();
                                        }
                                        else {
                                            console.log(answers.Value);
                                            constant.guess(letter);
                                            console.log(constant.underScores());
                                            console.log("Good try! Try Again");
                                            chances--;
                                            console.log("You have " + chances + " chances left!");
                                            continueGame();
                                        }
                                    }
                                }
                            });
                        }

                        if (constant.underScores() == wordSelect && chances === 0) {
                            inquirer.prompt([{
                                type: "confirm",
                                name: "ContinuePlay",
                                message: "Game Over! Play again?"
                            }]).then(function(inquirerResponse) {
                                if(inquirerResponse.ContinuePlay){
                                    startGame();
                                }
                                else {
                                    console.log("Good-Bye!");
                                }
                            });
                        }
                        else {
                            if ((words.length) > 0) {
                                console.log("Correct word! Next word");
                                functionGame();
                            }
                            else {
                                inquirer.prompt([{
                                    type: "confirm",
                                    name: "ContinuePlay",
                                    message: "You've won! Play again?"
                                }]).then(function(inquirerResponse) {
                                    if(inquirerResponse.ContinuePlay){
                                        startGame();
                                    }
                                    else {
                                        console.log("Good-Bye!");
                                    }
                                });
                            }
    
                        }
                    }
                    constant.guess(letter);
                    console.log(constant.underScores());
                    continueGame();
    
                };
    
            runGame();
    
        }
        else {
            console.log("No sweat! Come back later if you decide you want to play.");
        }
    });
}              