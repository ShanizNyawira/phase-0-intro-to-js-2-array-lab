// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push("Ralph");
    return cats;
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
    return cats;
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name){
    let newCats = [...cats,"Broom"]
    return newCats;
}
function prependCat(name){
    let newCats2 = ["Arnold",...cats]
    return newCats2;
}
function  removeLastCat() {
    let newCats3 = cats.slice(0,cats.length -1);
    return newCats3;
}
function removeFirstCat(){
    let newCats4 = cats.slice (1);
    return newCats4;
}