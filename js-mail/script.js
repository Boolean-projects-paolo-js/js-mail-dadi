
//inserisci la tua mail
const mail = prompt('inserisci la tua mail');

//Iscritti
const iscritti = ["luca.iscritto@gmail.com", "marco.iscritto@gmail.com", "paolo.iscritto@gmail.com"];

let flag = 0

for (let i = 0; i < iscritti.length; i++) {
    //Stampa iscritti

    if (mail == iscritti[i]){
        console.log (iscritti[i]);
        flag = 1; 
    }

}

if (flag === 0){
    const errormail=alert("email non valida")    
}






