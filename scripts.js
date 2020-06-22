const button = document.querySelector("#button");

var attackName = [
  "Hairball Launch",
  "Gentle Paw",
  "Cuddle Bug",
  "4AM Alarm",
  "Shed Storm",
  "Neuter",
  "Bath Time",
  "Mind Control",
  "Flea Infestation",
  "The Vet's Office"]

var attackDescription = [
  "Discard 1 Energy in order to use this attack. Flip a coin. If heads, the opponent is now paralyzed.",
  "Discard all energy cards attached to your opponent's active card.",
  "Flip a coin. If heads, the opponent is now confused. If tails, this attack does nothing.",
  "Flip 3 coins. For each heads, this attack does an additional 20 damage to the opponent. For each tails tails, this attack does damage to self.",
  "Your opponent is now paralyzed.",
  "Discard 2 energy attached to this card.",
  "If your opponent is also a cat, this attack does 2x damage. If not, this attack does nothing.",
  "Place one of your opponent's cards in the Lost Zone.",
  "For every damage counter on this card, attach that number of energy from your deck."
]

var hitPoints = [20,30,40,50,80,100,120,150,240,350];

var energyCost = [1,2,3,4];

var image = 
    ["url('https://res.cloudinary.com/dsldlqqsb/image/upload/v1588980230/38941445_2145860462357240_2857798318803648512_n.jpg_vhhoym.jpg')",
              
"url('https://res.cloudinary.com/dsldlqqsb/image/upload/v1588980205/46270700_224719688428511_5051646799761784266_n.jpg_alzizy.jpg')",
     
"url('https://res.cloudinary.com/dsldlqqsb/image/upload/v1588980198/47693095_492560267818336_8051465702116477197_n.jpg_mczimj.jpg')",
     
"url('https://res.cloudinary.com/dsldlqqsb/image/upload/v1588980186/47690347_359247588209198_7969110857301231820_n.jpg_o4mlbx.jpg')",
"url('https://res.cloudinary.com/dsldlqqsb/image/upload/v1588980182/50117167_710597492674890_4848785888561871970_n.jpg_q5swgi.jpg')",
     
"url('https://res.cloudinary.com/dsldlqqsb/image/upload/v1588980179/67485422_180859879598063_6258282993558889466_n.jpg_nl8feb.jpg')",
       "url('https://res.cloudinary.com/dsldlqqsb/image/upload/v1588979986/51442671_795274970815052_1147665457409532584_n.jpg_or8hpb.jpg')",
   "url('https://res.cloudinary.com/dsldlqqsb/image/upload/v1590172981/bearfluff_oxqxoe.png')",
              "url('https://res.cloudinary.com/dsldlqqsb/image/upload/v1588980246/30592445_189168158371301_1592790825039822848_n.jpg_ochb2w.jpg')",
              "url('https://res.cloudinary.com/dsldlqqsb/image/upload/v1588980263/29093355_2094006350830985_8812139277723893760_n.jpg_z02ua7.jpg')"
]           

let colors = [
  "purple", "cyan", "green", "red", "fuschia", "yellow"]

 let energyHue = {
  "purple": "hue-rotate(90deg);",
  "cyan": "hue-rotate(60deg);",
  "green": "hue-rotate(300deg);",
  "red": "hue-rotate(220deg);",
  "fuschia": "hue-rotate(180deg);",
  "yellow": "hue-rotate(240deg);"
}

var cardName = ["Bear", "Yeti", "Buddy Boy", "Angel Baby", "Big Muppet", "Squeaky", "Nugget Baby", "Puddle", "Alarm Clock", "Pukey"];

/*for (let i = 0, cardStatNum.length < 11, i++) { */

  function assignCardStat(max, objectName) {
      let randomNum = Math.floor(Math.random(max)*10);
      let cardStat = ((objectName)[randomNum]);
      return cardStat;
      }

let backgroundColor;

 function assignColor(num) {
    let val = Math.floor(Math.random(6)*10);
    let backgroundColor = ""
      switch(val) {
        case 1:
          return "purple";
          break;
        case 2:
          return "cyan";
          break;
        case 3:
          return "green";
          break;
        case 4:
          return "red";
          break;
        case 5:
          return "fuschia";
          break;
        case 6:
          return "yellow";
          break;
        default:
          return "silver";
    }
   return backgroundColor;
 }

let ballColorNum;

function assignBallColor(backgroundColor) {
  let ballColorNum = "";
  switch(backgroundColor) {
    case "purple":
      return 90;
      break;
    case "cyan":
      return 60;
      break;
    case "green":
      return 300;
      break;
    case "red":
      return 220;
      break;
    case "fuschia":
      return 180;
      break;
    case "yellow":
      return 240;
      break;
    default:
      return 0;
      break;
  }
 return ballColorNum;
}

document.querySelector(".card-background").style.backgroundColor = assignColor();
document.querySelector(".energy-balls").style.filter = "hue-rotate("+ (assignBallColor(backgroundColor)) +")deg;";
document.querySelector("#name").innerHTML = assignCardStat(10, cardName);
document.querySelector("#attack1").innerHTML = assignCardStat(10, attackName);  
document.querySelector("#attack2").innerHTML = assignCardStat(10, attackName);
document.querySelector("#attack-description2").innerHTML = assignCardStat(10, attackDescription);
document.querySelector(".picture").style.backgroundImage = assignCardStat(10, image);
document.querySelector("#hp").innerHTML = assignCardStat(10, hitPoints);
document.querySelector("#attackPower1").innerHTML = assignCardStat(7, hitPoints);
document.querySelector("#attackPower2").innerHTML = assignCardStat(7, hitPoints);

/*button.onClick = */
