/* Character Design */
var char1 = {
    Name: 'Ryu',
    Type: 'Fighter',
    Age: 20,
    Attacks: ['Hurrican Kick', 'Upper Cut', 'Hadoken', 'Jab', 'Left Hook', 'Right Hook']
}

var char2 = {
    Name: 'Butterfree',
    Type: 'Insect',
    Age: 20,
    Attacks: ['Sleep Powder', 'Dream Eater', 'PsyBeam', 'Flame Thrower', 'Solar Beam', 'Ember']
}
//Functions

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
function fight() {
    switch(getRandomInt(5)) {
    case 0:
        alert(character.Attacks[0])
        break;
    case 1:
        alert(character.Attacks[1])
        break;
    case 2:
        alert(character.Attacks[2])
        break;
    case 3:
        alert(character.Attacks[3])
        break;
    case 4:
        alert(character.Attacks[4])
        break;
    case 5:
        alert(character.Attacks[5])
        break;

}

}






//Game Play
alert("Welcome to my game")
let character = prompt("Choose a character: Ryu or ButterFree")
character = character.toLowerCase()


    if (character == 'ryu') {
        alert(`You selected ${character}`)
        character = char1
        alert('Here are your moves')
            for (i = 0; i < char2.Attacks.length; i++) 
            {
            alert(character.Attacks[i])
            }

    }   
    else if (character == 'butterfree') {
        alert(`You selected ${character}`)
        character = char2
        alert('Here are your moves')
            for (i = 0; i < char2.Attacks.length; i++) 
            {
            alert(character.Attacks[i])
            }
    }   
    else 
    {
        alert('Choose either Ryu or Butterfree')
    }



alert(`Hurry ${character.Name} save us from Bowser`)
alert("Press Enter to FIGHT!")
fight();
fight();
fight();
fight();
fight();
fight();
alert("You did ultimate Damage")



