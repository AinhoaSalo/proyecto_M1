let fossilList;
let keyNameFossil;
const list = "fossilList";

fetch("http://acnhapi.com/v1/fossils/")
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
    fossilList = response;
    let name = "";
    Object.keys(fossilList).forEach(keyNameFossil => {
      name = fossilList[keyNameFossil].name["name-EUes"];
      document.querySelector(".dropdownFishFossilBugs").innerHTML += `<option value=${keyNameFossil}>${name}</option>`; 
    });

})

document.querySelector('.dropdownFishFossilBugs').onchange = fossilNameImage;
showFavorite()

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
    arrayLocalDesparsedo.forEach(fossil => {
      document.querySelector('.callFavoriteStarMobile').innerHTML += `<div class="sonCallFavoriteStar"><img src=${fossil.image_uri}/><p>${fossil.name["name-EUes"]}</p></div>`;  
  });
  } 

  document.querySelector('.callFavoriteStarDesktop').innerHTML = "";
  if(localStorage.getItem(list)){
    let arrayLocal = localStorage.getItem(list);
    let arrayLocalDesparsedo = JSON.parse(arrayLocal);
    arrayLocalDesparsedo.forEach(fossil => {
      document.querySelector('.callFavoriteStarDesktop').innerHTML += `<div class="sonCallFavoriteStar"><img src=${fossil.image_uri}/><p>${fossil.name["name-EUes"]}</p></div>`;  
    });
  }

  document.querySelector('.callFavoriteStarDesktopMaxPixel').innerHTML = "";
  if(localStorage.getItem(list)){
    let arrayLocal = localStorage.getItem(list);
    let arrayLocalDesparsedo = JSON.parse(arrayLocal);
    arrayLocalDesparsedo.forEach(fossil => {
      document.querySelector('.callFavoriteStarDesktopMaxPixel').innerHTML += `<div class="sonCallFavoriteStar"><img src=${fossil.image_uri}/><p>${fossil.name["name-EUes"]}</p></div>`;  
    });
  }
}

function addFavorite() {
  if(localStorage.getItem("fossilList")){
    let arrayLocal = localStorage.getItem(list);
    let arrayLocalDesparsedo = JSON.parse(arrayLocal);
    if (!checkIfItIsAlready(keyNameFossil,arrayLocalDesparsedo)) {
      arrayLocalDesparsedo.push(fossilList[keyNameFossil]);
      let nuevoArrayParseado = JSON.stringify(arrayLocalDesparsedo);
      localStorage.setItem(list, nuevoArrayParseado);
    }
  } else {
      let nuevoArrayParseado = JSON.stringify([fossilList[keyNameFossil]]);
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
    if (checkIfItIsAlready(keyNameFossil,arrayLocalDesparsedo)){
      let newArray = deleteFromArray(keyNameFossil, arrayLocalDesparsedo);
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
  document.querySelector('.imageFossilMobile').innerHTML = `<div class="sonImgFossilMainMobile"><img src=${image}/></div>`; 
  document.querySelector('.nameAndPriceFossilMobile').innerHTML = `<div class="sonNameAndPriceFossil"><p><strong>Nombre:</strong> ${name}</p></div><div class="sonNameAndPriceFossil"><p><strong>Precio Mininook:</strong> ${priceMininook}</p></div>`;
  document.querySelector('.buttonMobile').innerHTML = `<div class="sonNameAndPriceFossil"><button class="addFavoriteMobile"><img src="../pictures/favorito.png" alt="añade favorito" width="30px" /></button></div><div class="sonNameAndPriceFossil"><button class="deleteFavoriteMobile"><img src="../pictures/estrella.png" alt="eliminar favorito" width="30px" /></button></div>`;
  document.querySelector('.addFavoriteMobile').addEventListener("click", addFavorite);
  document.querySelector('.deleteFavoriteMobile').addEventListener("click", deleteFavorite);


  document.querySelector('.imageFossilDesktop').innerHTML = `<div class="sonImgFossilMainDesktop"><img src=${image}/></div>`; 
  document.querySelector('.nameAndPriceFossilDesktop').innerHTML = `<div class="sonNameAndPriceFossil"><p><strong>Nombre:</strong> ${name}</p></div><div class="sonNameAndPriceFossil"><p><strong>Precio Mininook:</strong> ${priceMininook}</p></div>`;
  document.querySelector('.buttonDesktop').innerHTML = `<div class="sonNameAndPriceFossil"><button class="addFavoriteDesktop"><img src="../pictures/favorito.png" alt="añade favorito" width="35px" /></button></div><div class="sonNameAndPriceFossil"><button class="deleteFavoriteDesktop"><img src="../pictures/estrella.png" alt="eliminar favorito" width="35px" /></button></div>`;
  document.querySelector('.addFavoriteDesktop').addEventListener("click", addFavorite);
  document.querySelector('.deleteFavoriteDesktop').addEventListener("click", deleteFavorite);


  document.querySelector('.imageFossilDesktopMaxPixel').innerHTML = `<div class="sonImgFossilMainDesktopMaxPixel"><img src=${image}/></div>`; 
  document.querySelector('.nameAndPriceFossilDesktopMaxPixel').innerHTML = `<div class="sonNameAndPriceFossil"><p><strong>Nombre:</strong> ${name}</p></div><div class="sonNameAndPriceFossil"><p><strong>Precio Mininook:</strong> ${priceMininook}</p></div>`;
  document.querySelector('.buttonDesktopMaxPixel').innerHTML = `<div class="sonNameAndPriceFossil"><button class="addFavoriteDesktopMaxPixel"><img src="../pictures/favorito.png" alt="añade favorito" width="40px" /></button></div><div class="sonNameAndPriceFossil"><button class="deleteFavoriteDesktopMaxPixel"><img src="../pictures/estrella.png" alt="eliminar favorito" width="40px" /></button></div>`;
  document.querySelector('.addFavoriteDesktopMaxPixel').addEventListener("click", addFavorite);
  document.querySelector('.deleteFavoriteDesktopMaxPixel').addEventListener("click", deleteFavorite);
}


