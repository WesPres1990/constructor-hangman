function Letter(character){
    this.character = character
    this.letterGuessed = false

    this.return = function(){
        if (this.letterGuessed){
            return "_";
        }
        else{
            return this.character;
        }
    }

    this.check = function(letter){
        if(this.character === letter){
            this.guessedLetter = true;
        }
    }
}

module.exports = Letter;