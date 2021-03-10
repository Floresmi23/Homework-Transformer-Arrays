var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];



function createCharacter(cha){
  var ele = document.createElement("div");
  ele.classList.add("character");
  var nameEle = document.createElement("h3");
  var classEle = document.createElement("h4");
  var vehicleEle = document.createElement("h5");
  var imgEle = document.createElement("img");
  
  
  if(cha.afl=="autobot"){
    ele.classList.add("autobot");
    imgEle.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
    
  }else if(cha.afl=="decepticon"){
    ele.classList.add("decepticon");
    imgEle.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
  }
  
  if(cha.vehicle=="truck"){
    vehicleEle.style.color="blue";
  }
  else if(cha.vehicle=="tank"){
    vehicleEle.style.color="green";
  }
  else if(cha.vehicle=="car"){
    vehicleEle.style.color="gold";
  }
  else if(cha.vehicle=="plane"){
    vehicleEle.style.color="white";
  }
  
  nameEle.innerHTML="Name: " +cha.name;
  classEle.innerHTML="Class: " +cha.class;
  vehicleEle.innerHTML="Vehicle: " +cha.vehicle;
  
  
  ele.appendChild(nameEle);
  ele.appendChild(classEle);
  ele.appendChild(vehicleEle);
  ele.appendChild(imgEle);
  
  document.body.appendChild(ele);
}

for(var i=0; i<chrs.length; i++){
  createCharacter(chrs[i]);
}
  
  




// CLASS PROJECT NOTES
// ====================================================================================

// do not write any elements into your HTML file

// loop through the above array to append a div using .append() into the body tag

// the appended div should always have the ".character" class

// display the characters name, class, and vehicle in the div

// Information should be displayed as "Name: Optimus Prime", with the next information on a different line

// if the character being looped through has an afl of autobot/decepticon, give them either a class of "autobot", or "decepitcon"

// in the top right, based on the top information, insert an img elemnt for either the autobot or decepticon

// link for autobot image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png

// link for decepticon image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png

// in the characters' "class" data, all of those values' letters should be capitalized when displayed in the div (so 'leader' should become 'LEADER')

// in the characters' "vehicle" data, change the color of that value in the div based on its value

// truck=blue
// tank=green
// card=gold
// plane=white