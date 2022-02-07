let bugsList;
let keyNameBugs;
const list = "bugsList";

fetch("http://acnhapi.com/v1/bugs/")
.then(function (res){
    if (res.ok) {
        return res.json();
    } else {
        document.querySelector(".formatDataMainSelectMobile").innerHTML = "ERROR";
        document.querySelector(".formatDataMainSelectDesktop").innerHTML = "ERROR";
        document.querySelector(".formatDataMainSelectDesktopMaxPixel").innerHTML = "ERROR";
    }
})
.then(function (response){
  bugsList = response;
  let name = "";
  Object.keys(bugsList).forEach(keyNameBugs => {
  name = bugsList[keyNameBugs].name["name-EUes"];
  document.querySelector(".dropdownFishFossilBugs").innerHTML += `<option value=${keyNameBugs}>${name}</option>`; 
  });
})

document.querySelector('.dropdownFishFossilBugs').onchange = bugsNameImage;
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
    arrayLocalDesparsedo.forEach(bugs => {
      document.querySelector('.callFavoriteStarMobile').innerHTML += `<div class="sonCallFavoriteStar"><img src=${bugs.icon_uri}/><p>${bugs.name["name-EUes"]}</p></div>`;  
    });
  } 

  document.querySelector('.callFavoriteStarDesktop').innerHTML = "";
  if(localStorage.getItem(list)){
    let arrayLocal = localStorage.getItem(list);
    let arrayLocalDesparsedo = JSON.parse(arrayLocal);
    arrayLocalDesparsedo.forEach(bugs => {
      document.querySelector('.callFavoriteStarDesktop').innerHTML += `<div class="sonCallFavoriteStar"><img src=${bugs.icon_uri}/><p>${bugs.name["name-EUes"]}</p></div>`;  
    });
  }

  document.querySelector('.callFavoriteStarDesktopMaxPixel').innerHTML = "";
  if(localStorage.getItem(list)){
    let arrayLocal = localStorage.getItem(list);
    let arrayLocalDesparsedo = JSON.parse(arrayLocal);
    arrayLocalDesparsedo.forEach(bugs => {
      document.querySelector('.callFavoriteStarDesktopMaxPixel').innerHTML += `<div class="sonCallFavoriteStar"><img src=${bugs.icon_uri}/><p>${bugs.name["name-EUes"]}</p></div>`;  
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
    if (!checkIfItIsAlready(keyNameBugs,arrayLocalDesparsedo)) {
      arrayLocalDesparsedo.push(bugsList[keyNameBugs]);
      let nuevoArrayParseado = JSON.stringify(arrayLocalDesparsedo);
      localStorage.setItem(list, nuevoArrayParseado);
    }
  } else {
      let nuevoArrayParseado = JSON.stringify([bugsList[keyNameBugs]]);
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
    if (checkIfItIsAlready(keyNameBugs,arrayLocalDesparsedo)){
      let newArray = deleteFromArray(keyNameBugs, arrayLocalDesparsedo);
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

function bugsNameImage() {
  keyNameBugs = this.value;
  let image = bugsList[keyNameBugs].icon_uri;
  let name = bugsList[keyNameBugs].name["name-EUes"];
  let monthNorthern = bugsList[keyNameBugs].availability["month-array-northern"];
  let monthSouthern = bugsList[keyNameBugs].availability["month-array-southern"];
  let monthNorthernWithNames = numberToMonth(monthNorthern);
  let monthSouthernWithNames = numberToMonth(monthSouthern);
  let priceMininook = bugsList[keyNameBugs].price;
  let priceKamilo = bugsList[keyNameBugs]["price-flick"];
  document.querySelector('.imgFishBugsMainMobile').innerHTML = `<img src=${image}/>`;
  document.querySelector('.nameFishBugsMobile').innerHTML =`<p><strong>${name}</strong></p>`; 
  document.querySelector('.monthFishingPriceFishAndBugsMobile').innerHTML = `<div><p><strong>Meses captura hemisferio norte:</strong> ${monthNorthernWithNames}</p><p><strong>Meses captura hemisferio sur:</strong> ${monthSouthernWithNames}</p></div><p><strong>Precio Mininook:</strong> ${priceMininook}</p><p><strong>Precio Kamilo:</strong> ${priceKamilo}`;
  document.querySelector('.buttonMobile').innerHTML = `<div class="sonNameAndPriceFossil"><button class="addFavoriteMobile"><img src="../pictures/favorito.png" alt="añade favorito" width=¨30px¨ /></button></div><div class="sonNameAndPriceFossil"><button class="deleteFavoriteMobile"><img src="../pictures/estrella.png" alt="eliminar favorito" width=¨30px¨ /></button></div>`;
  document.querySelector('.addFavoriteMobile').addEventListener("click", addFavorite);
  document.querySelector('.deleteFavoriteMobile').addEventListener("click", deleteFavorite);

  document.querySelector('.imgFishBugsMainDesktop').innerHTML = `<img src=${image}/>`;
  document.querySelector('.nameFishBugsDesktop').innerHTML =`<p><strong>${name}</strong></p>`; 
  document.querySelector('.monthFishingPriceFishAndBugsDesktop').innerHTML = `<div><p><strong>Meses captura hemisferio norte:</strong> ${monthNorthernWithNames}</p><p><strong>Meses captura hemisferio sur:</strong> ${monthSouthernWithNames}</p></div><p><strong>Precio Mininook:</strong> ${priceMininook}</p><p><strong>Precio Kamilo:</strong> ${priceKamilo}`;
  document.querySelector('.buttonDesktop').innerHTML = `<div class="sonNameAndPriceFossil"><button class="addFavoriteDesktop"><img src="../pictures/favorito.png" alt="añade favorito" width=¨35px¨ /></button></div><div class="sonNameAndPriceFossil"><button class="deleteFavoriteDesktop"><img src="../pictures/estrella.png" alt="eliminar favorito" width=¨35px¨ /></button></div>`;
  document.querySelector('.addFavoriteDesktop').addEventListener("click", addFavorite);
  document.querySelector('.deleteFavoriteDesktop').addEventListener("click", deleteFavorite);

  document.querySelector('.imgFishBugsMainDesktopMaxPixel').innerHTML = `<img src=${image}/>`;
  document.querySelector('.nameFishBugsDesktopMaxPixel').innerHTML =`<p><strong>${name}</strong></p>`; 
  document.querySelector('.monthFishingPriceFishAndBugsDesktopMaxPixel').innerHTML = `<div><p><strong>Meses captura hemisferio norte:</strong> ${monthNorthernWithNames}</p><p><strong>Meses captura hemisferio sur:</strong> ${monthSouthernWithNames}</p></div><p><strong>Precio Mininook:</strong> ${priceMininook}</p><p><strong>Precio Kamilo:</strong> ${priceKamilo}`;
  document.querySelector('.buttonDesktopMaxPixel').innerHTML = `<div class="sonNameAndPriceFossil"><button class="addFavoriteDesktopMaxPixel"><img src="../pictures/favorito.png" alt="añade favorito" width=¨40px¨ /></button></div><div class="sonNameAndPriceFossil"><button class="deleteFavoriteDesktopMaxPixel"><img src="../pictures/estrella.png" alt="eliminar favorito" width=¨40px¨ /></button></div>`;
  document.querySelector('.addFavoriteDesktopMaxPixel').addEventListener("click", addFavorite);
  document.querySelector('.deleteFavoriteDesktopMaxPixel').addEventListener("click", deleteFavorite);
}

    

