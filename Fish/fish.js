let fishList; 

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

function getMonthByNumber(number) {
  let month = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio", "Agosto","Septiembre", "Octubre", "Noviembre", "Diciembre"];
  return month[(number-1)]
}

function numberToMonth(array) {
  let monthString = [] 
  for (let i = 0; i < array.length; i++) {
    monthString[i] = getMonthByNumber(array[i])
  }
  return monthString;
}

function fishNameImage() {
  let keyNameFish = this.value;
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
  document.querySelector('.monthFishingPriceFishAndBugs').innerHTML = `<div><p>Meses de pesca en el emisferio norte: ${monthNorthernWithNames}</p><p>Meses de pesca en el emisferio sur: ${monthSouthernWithNames}</p></div><p>Precio en la Mininook: ${priceMininook}</p><p>Precio cuando viene CJ a la isla: ${priceCjMininook}`;
}

document.querySelector('.dropdownFishFossilBugs').onchange = fishNameImage;