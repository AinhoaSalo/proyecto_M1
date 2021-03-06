let fishList;
let keyNameFish; 
const list = "fishList";

fetch("http://acnhapi.com/v1/fish/")
.then(function (res){
  if (res.ok) {
    return res.json();
  } else {
    document.querySelector(".formatDataMainSelectMobile").innerHTML = "ERROR";
    document.querySelector(".formatDataMainSelectDesktop").innerHTML = "ERROR";
    document.querySelector(".formatDataMainSelectDesktopMaxPixel").innerHTML = "ERROR";
  }
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

function checkIfItIsAlready(key,arr){
  let check = false;
  arr.forEach(current =>{
    if (current["file-name"] == key) {
      check = true;
    } 
  })
  return check;
}

function showFavorite() {
  document.querySelector('.callFavoriteStarMobile').innerHTML = "";
  if(localStorage.getItem(list)){
    let arrayLocal = localStorage.getItem(list);
    let arrayLocalDesparsedo = JSON.parse(arrayLocal);
    arrayLocalDesparsedo.forEach(fish => {
      document.querySelector('.callFavoriteStarMobile').innerHTML += `<div class="sonCallFavoriteStar"><img src=${fish.icon_uri}/><p>${fish.name["name-EUes"]}</p></div>`;  
    });
  } 

  document.querySelector('.callFavoriteStarDesktop').innerHTML = "";
  if(localStorage.getItem(list)){
    let arrayLocal = localStorage.getItem(list);
    let arrayLocalDesparsedo = JSON.parse(arrayLocal);
    arrayLocalDesparsedo.forEach(fish => {
      document.querySelector('.callFavoriteStarDesktop').innerHTML += `<div class="sonCallFavoriteStar"><img src=${fish.icon_uri}/><p>${fish.name["name-EUes"]}</p></div>`;  
    });
  }

  document.querySelector('.callFavoriteStarDesktopMaxPixel').innerHTML = "";
    if(localStorage.getItem(list)){
    let arrayLocal = localStorage.getItem(list);
    let arrayLocalDesparsedo = JSON.parse(arrayLocal);
    arrayLocalDesparsedo.forEach(fish => {
      document.querySelector('.callFavoriteStarDesktopMaxPixel').innerHTML += `<div class="sonCallFavoriteStar"><img src=${fish.icon_uri}/><p>${fish.name["name-EUes"]}</p></div>`;  
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
  if(localStorage.getItem(list)){
    let arrayLocal = localStorage.getItem(list);
    let arrayLocalDesparsedo = JSON.parse(arrayLocal);
    if (!checkIfItIsAlready(keyNameFish,arrayLocalDesparsedo)) {
      arrayLocalDesparsedo.push(fishList[keyNameFish]);
      let nuevoArrayParseado = JSON.stringify(arrayLocalDesparsedo);
      localStorage.setItem(list, nuevoArrayParseado);
    }
  } else {
      let nuevoArrayParseado = JSON.stringify([fishList[keyNameFish]]);
      localStorage.setItem(list, nuevoArrayParseado);
  }
  showFavorite() 
}

function deleteFromArray(key, arr) {
  let finalArray = [];
  i = 0;
  arr.forEach(current =>{
    if (current["file-name"] != key) {
      finalArray[i] = current;
    } 
    i++;
  })
  return finalArray
}

function deleteFavorite(){
  
  if(localStorage.getItem(list)){
    let arrayLocal = localStorage.getItem(list);
    let arrayLocalDesparsedo = JSON.parse(arrayLocal);
    if (checkIfItIsAlready(keyNameFish,arrayLocalDesparsedo)){
      let newArray = deleteFromArray(keyNameFish, arrayLocalDesparsedo);
      if (newArray.length == 0){
        localStorage.removeItem(list);
      } else {
        let nuevoArrayParseado = JSON.stringify(newArray);
        localStorage.setItem(list, nuevoArrayParseado);
      }
    }
  }
  showFavorite();
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
  document.querySelector('.nameFishBugsMobile').innerHTML =`<p><strong>${name}</strong></p>`; 
  document.querySelector('.monthFishingPriceFishAndBugsMobile').innerHTML = `<div><p><strong>Meses pesca hemisferio norte:</strong> ${monthNorthernWithNames}</p><strong>Meses pesca hemisferio sur:</strong> ${monthSouthernWithNames}</p></div><p><strong>Precio Mininook:</strong> ${priceMininook}</p><strong>Precio CJ:</strong> ${priceCjMininook}`;
  document.querySelector('.buttonMobile').innerHTML = `<div class="sonNameAndPriceFossil"><button class="addFavoriteMobile"><img src="../pictures/favorito.png" alt="a??ade favorito" width="30px" /></button></div><div class="sonNameAndPriceFossil"><button class="deleteFavoriteMobile"><img src="../pictures/estrella.png" alt="eliminar favorito" width="30px" /></button></div>`;
  document.querySelector('.addFavoriteMobile').addEventListener("click", addFavorite);
  document.querySelector('.deleteFavoriteMobile').addEventListener("click", deleteFavorite);

  document.querySelector('.imgFishBugsMainDesktop').innerHTML = `<img src=${image}/>`;
  document.querySelector('.nameFishBugsDesktop').innerHTML =`<p><strong>${name}</strong></p>`; 
  document.querySelector('.monthFishingPriceFishAndBugsDesktop').innerHTML = `<div><p><strong>Meses pesca hemisferio norte:</strong> ${monthNorthernWithNames}</p><strong>Meses pesca hemisferio sur:</strong> ${monthSouthernWithNames}</p></div><p><strong>Precio Mininook:</strong> ${priceMininook}</p><strong>Precio CJ:</strong> ${priceCjMininook}`;
  document.querySelector('.buttonDesktop').innerHTML = `<div class="sonNameAndPriceFossil"><button class="addFavoriteDesktop"><img src="../pictures/favorito.png" alt="a??ade favorito" width="35px" /></button></div><div class="sonNameAndPriceFossil"><button class="deleteFavoriteDesktop"><img src="../pictures/estrella.png" alt="eliminar favorito" width="35px" /></button></div>`;
  document.querySelector('.addFavoriteDesktop').addEventListener("click", addFavorite);
  document.querySelector('.deleteFavoriteDesktop').addEventListener("click", deleteFavorite);

  document.querySelector('.imgFishBugsMainDesktopMaxPixel').innerHTML = `<img src=${image}/>`;
  document.querySelector('.nameFishBugsDesktopMaxPixel').innerHTML =`<p><strong>${name}</strong></p>`; 
  document.querySelector('.monthFishingPriceFishAndBugsDesktopMaxPixel').innerHTML = `<div><p><strong>Meses pesca hemisferio norte:</strong> ${monthNorthernWithNames}</p><strong>Meses pesca hemisferio sur:</strong> ${monthSouthernWithNames}</p></div><p><strong>Precio Mininook:</strong> ${priceMininook}</p><strong>Precio CJ:</strong> ${priceCjMininook}`;
  document.querySelector('.buttonDesktopMaxPixel').innerHTML = `<div class="sonNameAndPriceFossil"><button class="addFavoriteDesktopMaxPixel"><img src="../pictures/favorito.png" alt="a??ade favorito" width="40px" /></button></div><div class="sonNameAndPriceFossil"><button class="deleteFavoriteDesktopMaxPixel"><img src="../pictures/estrella.png" alt="eliminar favorito" width="40px" /></button></div>`;
  document.querySelector('.addFavoriteDesktopMaxPixel').addEventListener("click", addFavorite);
  document.querySelector('.deleteFavoriteDesktopMaxPixel').addEventListener("click", deleteFavorite);
}
