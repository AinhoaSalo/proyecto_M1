let fishList;
let keyNameFish; 

fetch("http://acnhapi.com/v1/fish/")
.then(function (res){
    return res.json();
})
.then (function (response){
    fishList = response;
    let name = "";
    Object.keys(fishList).forEach(keyNameFish => {
        name = fishList[keyNameFish].name["name-EUes"];
        document.querySelector(".dropdownFishFossilBugs").innerHTML += `<option value=${keyNameFish}>${name}</option>`; 
    }); 
})

document.querySelector('.dropdownFishFossilBugs').onchange = fishNameImage;
showFavorite();

function showFavorite() {
  document.querySelector('.favoriteStar').innerHTML = "";
  if(localStorage.getItem("fishList")){
    let arrayLocal = localStorage.getItem("fishList");
    let arrayLocalDesparsedo = JSON.parse(arrayLocal);
    arrayLocalDesparsedo.forEach(fish => {
      console.log(fish)
      document.querySelector('.favoriteStar').innerHTML += `<img src=${fish.icon_uri}/><p>${fish.name["name-EUes"]}</p>`;  
    });
  } 
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function getMonthByNumber(number) {
  let month = [" Enero"," Febrero"," Marzo"," Abril"," Mayo"," Junio"," Julio", " Agosto"," Septiembre", " Octubre", " Noviembre", " Diciembre"];
  return month[(number-1)]
}

function numberToMonth(array) {
  let monthString = [] 
  for (let i = 0; i < array.length; i++) {
    monthString[i] = getMonthByNumber(array[i])
  }
  return monthString;
}

function addFavorite() {
  if(localStorage.getItem("fishList")){
    let arrayLocal = localStorage.getItem("fishList");
    let arrayLocalDesparsedo = JSON.parse(arrayLocal);
    console.log(arrayLocalDesparsedo);
    arrayLocalDesparsedo.push(fishList[keyNameFish]);
    let nuevoArrayParseado = JSON.stringify(arrayLocalDesparsedo);
    localStorage.setItem("fishList", nuevoArrayParseado);
  } else {
      let nuevoArrayParseado = JSON.stringify([fishList[keyNameFish]]);
      localStorage.setItem("fishList", nuevoArrayParseado);
  }
  showFavorite() 
}



function fishNameImage() {
  keyNameFish = document.querySelector('.dropdownFishFossilBugs').value;
  let image = fishList[keyNameFish].icon_uri;
  let name = fishList[keyNameFish].name["name-EUes"];
  let monthNorthern = fishList[keyNameFish].availability["month-array-northern"];
  let monthSouthern = fishList[keyNameFish].availability["month-array-southern"];
  let monthNorthernWithNames = numberToMonth(monthNorthern);
  let monthSouthernWithNames = numberToMonth(monthSouthern);
  let priceMininook = fishList[keyNameFish].price;
  let priceCjMininook = fishList[keyNameFish]["price-cj"];
  document.querySelector('.imgFishBugsMain').innerHTML = `<img src=${image}/>`;
  document.querySelector('.nameFishBugsMain').innerHTML =`<p>${name}</p>`; 
  document.querySelector('.monthFishingPriceFishAndBugs').innerHTML = `<div><p>Meses de pesca en el emisferio norte: ${monthNorthernWithNames}</p><p>Meses de pesca en el emisferio sur: ${monthSouthernWithNames}</p></div><p>Precio en la Mininook: ${priceMininook}</p><p>Precio cuando viene CJ a la isla: ${priceCjMininook} <button class="favorite">anadir a favorito</button>`;
  document.querySelector('.favorite').addEventListener("click", addFavorite);
}
