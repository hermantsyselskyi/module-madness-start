function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);}
    randomAsNumber = randomNumber;
    module.exports = randomAsNumber;