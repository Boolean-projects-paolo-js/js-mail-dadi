const player = Math.round(Math.random() * 6);
console.log(player)

const computer = Math.round(Math.random() * 6);
console.log(computer)

if (player > computer){
    console.log ("il giocatore ha vinto");
}

else if (player < computer) {
    console.log ("il computer ha vinto");
}

else {
    (player == computer)
    console.log ("avete vinto entrambi")
}