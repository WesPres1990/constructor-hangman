var Letter = require('./letter.js');

function Word(word){
    this.word = word;
    var wordsArray = [];
    for (var i = 0; i < word.length; i++){
        var letter = new Letter(word[i]);
        wordsArray.push(letter);
    }
    return wordsArray

    this.underScore = function(){
        underscoreString = "";
        thisWord = this.word
        for (var i = 0; i < thisWord.length; i++) {
            var usValue = thisWord[i].return();
            underscoreString += underscoreValue;
        }
        return underscoreString;
    }
    
    this.guessCheck = function(character){
        var thisWord = this.word;
        for (var i = 0; i < thisWord.length; i++) {
            thisWord[i].check(character);
    }
}
}

module.exports = Word;