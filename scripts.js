var Names = ["Bear", "Yeti", "Buddy Boy", "Angel Baby", "Bad Boy", "Squeaky", "Nugget Baby", "Muppet Boy", "Alarm Clock", "Pukey"];

var Attacks = [
  "Hairball Launcher",
  "Gentle Paw",
  "Bunny Kick",
  "Sunny Nap",
  "Shed Storm",
  "Mommy's Boy",
  "Bath Time",
  "Mind Control",
  "Restless Night",
  "Sharp Tooth"]

var hitPoints = [20,30,40,50,80,100,120,150,240,350];
var Images = 
    ["url('https://res.cloudinary.com/dsldlqqsb/image/upload/v1588980230/38941445_2145860462357240_2857798318803648512_n.jpg_vhhoym.jpg')",
              
"url('https://res.cloudinary.com/dsldlqqsb/image/upload/v1588980205/46270700_224719688428511_5051646799761784266_n.jpg_alzizy.jpg')",
     
"url('https://res.cloudinary.com/dsldlqqsb/image/upload/v1588980198/47693095_492560267818336_8051465702116477197_n.jpg_mczimj.jpg')",
     
"url('https://res.cloudinary.com/dsldlqqsb/image/upload/v1588980186/47690347_359247588209198_7969110857301231820_n.jpg_o4mlbx.jpg')",
"url('https://res.cloudinary.com/dsldlqqsb/image/upload/v1588980182/50117167_710597492674890_4848785888561871970_n.jpg_q5swgi.jpg')",
     
"url('https://res.cloudinary.com/dsldlqqsb/image/upload/v1588980179/67485422_180859879598063_6258282993558889466_n.jpg_nl8feb.jpg')",
       "url('https://res.cloudinary.com/dsldlqqsb/image/upload/v1588979986/51442671_795274970815052_1147665457409532584_n.jpg_or8hpb.jpg')",
   "url('https://res.cloudinary.com/dsldlqqsb/image/upload/v1588979985/64837613_2755246124549369_3756693184816882502_n.jpg_uria6c.jpg')",
              "url('https://res.cloudinary.com/dsldlqqsb/image/upload/v1588980246/30592445_189168158371301_1592790825039822848_n.jpg_ochb2w.jpg')",
              "url('https://res.cloudinary.com/dsldlqqsb/image/upload/v1588980263/29093355_2094006350830985_8812139277723893760_n.jpg_z02ua7.jpg')"
]           
          
var Colors = [
  "purple", "cyan", "green", "red", "fuschia", "yellow"
]

function getRandomBackgroundColor(max) {
  var num = Math.floor(Math.random(max)*10);
    var backgroundColor = Colors[num];
    return backgroundColor;
}

document.querySelector(".card-background").style.backgroundColor = getRandomBackgroundColor(6);

function getRandomNum(max) {
    var num = Math.floor(Math.random(max)*10);
    var cardName = Names[num];
    return cardName;
}
document.querySelector("#name").innerHTML = getRandomNum(7);

function getRandomAttack1(max) {
  var num = Math.floor(Math.random(max)*10);
  var attackName1 = Attacks[num];
  return attackName1;
}
document.querySelector("#attack1").innerHTML = getRandomAttack1(10);

function getRandomAttack2(max) {
  var num = Math.floor(Math.random(max)*10);
  var attackName2 = Attacks[num];
  return attackName2;
}
document.querySelector("#attack2").innerHTML = getRandomAttack2(10);

function getRandomHp(max) {
    var num = Math.floor(Math.random(max)*7.77);
    var cardHp = hitPoints[num];
    return cardHp;
}

document.querySelector("#hp").innerHTML = getRandomHp(10);
document.querySelector("#attackPower1").innerHTML = getRandomHp(7);
document.querySelector("#attackPower2").innerHTML = getRandomHp(7);

function getRandomImage(max) {
    var num = Math.floor(Math.random(max)*10);
    var image = Images[num];
    return image;
}

document.querySelector(".picture").style.backgroundImage = getRandomImage(10);
