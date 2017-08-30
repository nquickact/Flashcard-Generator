// Constructor function for the 'Cloze Card'.
function ClozeCard(text, cloze) {
    this.text = text.split(cloze);
    this.cloze = cloze;

};

// Constructor that creates a prototype of ClozeCard to return the question missing cloze
function ClozeCardPrototype() {

    this.clozeRemoved = function () {
        return `${this.text[0]} ... ${this.text[1]}`;  //Template literal enclosed by the back-tick ` allows embedded expressions wrapped with ${}
    };
};

ClozeCard.prototype = new ClozeCardPrototype();

module.exports = ClozeCard; 