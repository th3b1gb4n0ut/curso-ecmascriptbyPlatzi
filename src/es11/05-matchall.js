const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, banana Kiwi, Apple, Orange'

for(const match of fruit.matchAll(regex)){
    console.log(match);
}