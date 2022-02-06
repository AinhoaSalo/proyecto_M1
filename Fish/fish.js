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
  document.querySelector('.callFavoriteStar').innerHTML = "";
  if(localStorage.getItem("fishList")){
    let arrayLocal = localStorage.getItem("fishList");
    let arrayLocalDesparsedo = JSON.parse(arrayLocal);
    arrayLocalDesparsedo.forEach(fish => {
      console.log(fish)
      document.querySelector('.callFavoriteStar').innerHTML += `<div class="sonCallFavoriteStar"><img src=${fish.icon_uri}/><p>${fish.name["name-EUes"]}</p></div>`;  

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
  document.querySelector('.imgFishBugsMainMobile').innerHTML = `<img src=${image}/>`;
  document.querySelector('.nameFishBugsMobile').innerHTML =`<p>${name}</p>`; 
  document.querySelector('.monthFishingPriceFishAndBugsMobile').innerHTML = `<div><p>Meses de pesca en el emisferio norte: ${monthNorthernWithNames}</p><p>Meses de pesca en el emisferio sur: ${monthSouthernWithNames}</p></div><p>Precio en la Mininook: ${priceMininook}</p><p>Precio cuando viene CJ a la isla: ${priceCjMininook} <button class="favoriteMobile">anadir a favorito</button>`;
  document.querySelector('.favoriteMobile').addEventListener("click", addFavorite);

  document.querySelector('.imgFishBugsMainDesktop').innerHTML = `<img src=${image}/>`;
  document.querySelector('.nameFishBugsDesktop').innerHTML =`<p>${name}</p>`; 
  document.querySelector('.monthFishingPriceFishAndBugsDesktop').innerHTML = `<div><p>Meses de pesca en el emisferio norte: ${monthNorthernWithNames}</p><p>Meses de pesca en el emisferio sur: ${monthSouthernWithNames}</p></div><p>Precio en la Mininook: ${priceMininook}</p><p>Precio cuando viene CJ a la isla: ${priceCjMininook} <button class="favoriteDesktop">anadir a favorito</button>`;
  document.querySelector('.favoriteDesktop').addEventListener("click", addFavorite);

  document.querySelector('.imgFishBugsMainDesktopMaxPixel').innerHTML = `<img src=${image}/>`;
  document.querySelector('.nameFishBugsDesktopMaxPixel').innerHTML =`<p>${name}</p>`; 
  document.querySelector('.monthFishingPriceFishAndBugsDesktopMaxPixel').innerHTML = `<div><p>Meses de pesca en el emisferio norte: ${monthNorthernWithNames}</p><p>Meses de pesca en el emisferio sur: ${monthSouthernWithNames}</p></div><p>Precio en la Mininook: ${priceMininook}</p><p>Precio cuando viene CJ a la isla: ${priceCjMininook} <button class="favoriteDesktopMaxPixel">anadir a favorito</button>`;
  document.querySelector('.favoriteDesktopMaxPixel').addEventListener("click", addFavorite);
}
