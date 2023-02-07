import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// wczytywanie zasobów

loadSprite("tlo","swieta.png")
loadSprite("mikolaj","pierwszyplangotowy.png")

loadSound("muzyka","gdyslicznapanna.mp3")

// add a piece of text at position (120, 80)
add([
    text("hello"),
    pos(120, 80),
]);

add([
    sprite("tlo"),
    pos(0,0)
])

const mikolaj=add([
    sprite("mikolaj"),
    pos(100,100)
])

onUpdate(()=>{

    if(mikolaj.pos.x>500) mikolaj.pos.x = 20

    else mikolaj.pos.x += 2

    
    
})

onKeyPress("space", ()=>{
    play("muzyka")
})