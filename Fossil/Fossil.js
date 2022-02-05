let fossilList;
let keyNameFossil;

fetch("http://acnhapi.com/v1/fossils/")
.then(function (res){
    return res.json();
})
.then(function (response){
    fossilList = response;
    let name = "";
    Object.keys(fossilList).forEach(keyNameFossil => {
      name = fossilList[keyNameFossil].name["name-EUes"];
      document.querySelector(".dropdownFishFossilBugs").innerHTML += `<option value=${keyNameFossil}>${name}</option>`; 
    });

})

console.log(fossilList)

document.querySelector('.dropdownFishFossilBugs').onchange = fossilNameImage;


function showFavorite() {
  document.querySelector('.favoriteStar').innerHTML = "";
  if(localStorage.getItem("fossilList")){
    let arrayLocal = localStorage.getItem("fossilList");
    let arrayLocalDesparsedo = JSON.parse(arrayLocal);
    arrayLocalDesparsedo.forEach(fossil => {
      console.log(fossil)
      document.querySelector('.favoriteStar').innerHTML += `<img src=${fossil.image_uri}/><p>${fossil.name["name-EUes"]}</p>`;  
    });
  } 
}

function addFavorite() {
  if(localStorage.getItem("fossilList")){
    let arrayLocal = localStorage.getItem("fossilList");
    let arrayLocalDesparsedo = JSON.parse(arrayLocal);
    console.log(arrayLocalDesparsedo);
    arrayLocalDesparsedo.push(fossilList[keyNameFossil]);
    let nuevoArrayParseado = JSON.stringify(arrayLocalDesparsedo);
    localStorage.setItem("fossilList", nuevoArrayParseado);
  } else {
      let nuevoArrayParseado = JSON.stringify([fossilList[keyNameFossil]]);
      localStorage.setItem("fossilList", nuevoArrayParseado);
  }
  showFavorite() 
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function fossilNameImage() {
    keyNameFossil = this.value;
    let image = fossilList[keyNameFossil].image_uri;
    let name = fossilList[keyNameFossil].name["name-EUes"];
    let priceMininook = fossilList[keyNameFossil].price;
    document.querySelector('.imageFossil').innerHTML = `<div class="imgFossilMain"><img src=${image}/></div>`; 
    document.querySelector('.nameAndPriceFossil').innerHTML = `<div id="nameFossilMain"><p>${name}</p></div></div><p>Precio en la Mininook: ${priceMininook}</p><button class="favorite">anadir a favorito</button>`;
    document.querySelector('.favorite').addEventListener("click", addFavorite);
}


