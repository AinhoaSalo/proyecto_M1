showFavoriteFossil();
showFavoriteBugs();
showFavoriteFish();

function showFavoriteFossil() {
  document.querySelector('.callFavoriteFossil').innerHTML = "";
  if(localStorage.getItem("fossilList")){
    let arrayLocal = localStorage.getItem("fossilList");
    let arrayLocalDesparsedo = JSON.parse(arrayLocal);
    arrayLocalDesparsedo.forEach(fossil => {
      console.log(fossil)
      document.querySelector('.callFavoriteFossil').innerHTML += `<div class="sonCallFavoriteAll"><img src=${fossil.image_uri}/><p>${fossil.name["name-EUes"]}</p></div>`;  
    });
  } 
}

function showFavoriteBugs() {
  document.querySelector('.callFavoriteBugs').innerHTML = "";
  if(localStorage.getItem("bugsList")){
    let arrayLocal = localStorage.getItem("bugsList");
    let arrayLocalDesparsedo = JSON.parse(arrayLocal);
    arrayLocalDesparsedo.forEach(bugs => {
      console.log(bugs)
      document.querySelector('.callFavoriteBugs').innerHTML += `<div class="sonCallFavoriteAll"><img src=${bugs.icon_uri}/><p>${bugs.name["name-EUes"]}</p></div>`;  
    });
  } 
}

function showFavoriteFish() {
  document.querySelector('.callFavoriteFish').innerHTML = "";
  if(localStorage.getItem("fishList")){
    let arrayLocal = localStorage.getItem("fishList");
    let arrayLocalDesparsedo = JSON.parse(arrayLocal);
    arrayLocalDesparsedo.forEach(fish => {
      console.log(fish)
      document.querySelector('.callFavoriteFish').innerHTML += `<div class="sonCallFavoriteAll"><img src=${fish.icon_uri}/><p>${fish.name["name-EUes"]}</p></div>`;  
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

function addFavorite() {
  if(localStorage.getItem("bugsList")){
    let arrayLocal = localStorage.getItem("bugsList");
    let arrayLocalDesparsedo = JSON.parse(arrayLocal);
    console.log(arrayLocalDesparsedo);
    arrayLocalDesparsedo.push(bugsList[keyNameBugs]);
    let nuevoArrayParseado = JSON.stringify(arrayLocalDesparsedo);
    localStorage.setItem("bugsList", nuevoArrayParseado);
  } else {
      let nuevoArrayParseado = JSON.stringify([bugsList[keyNameBugs]]);
      localStorage.setItem("bugsList", nuevoArrayParseado);
  }
  showFavorite() 
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

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}