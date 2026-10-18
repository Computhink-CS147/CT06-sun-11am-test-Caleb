let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
let yPos;

function setup(){
    createCanvas(200, 300);
    fill("pink");
    // Task: Align the text to the center using textAlign
    // Task: set font size to 20 using textSize
    yPos = 100;
    textSize(20);
    textAlign(CENTER);
}
function draw(){
    background('black')
    yPos=100;
    for(let i=0; i<pokemons.length; i++){
        text(pokemons[i],width/2,yPos);
        yPos=yPos+20;


    }
}

