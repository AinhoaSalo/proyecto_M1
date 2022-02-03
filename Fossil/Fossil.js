let fossilList;

fetch("http://acnhapi.com/v1/fossils/")
.then(function (res){
    return res.json();
})
.then(function (response){
    fossilList = response;
    let name = "";
    Object.keys(fossilList).forEach(key => {
    name = fossilList[key].name["name-EUes"];
    document.querySelector(".dropdownFishFossilBugs").innerHTML += `<option value=${key}>${name}</option>`; 
    });
})

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function fossilNameImage() {
    let keyNameFossil = this.value;
    let image = fossilList[keyNameFossil].image_uri;
    let name = fossilList[keyNameFossil].name["name-EUes"];
    let priceMininook = fossilList[keyNameFossil].price;
    document.querySelector('.imageFossil').innerHTML = `<div class="imgFossilMain"><img src=${image}/></div>`; 
    document.querySelector('.nameAndPriceFossil').innerHTML = `<div id="nameFossilMain"><p>${name}</p></div></div><p>Precio en la Mininook: ${priceMininook}</p>`;
}

document.querySelector('.dropdownFishFossilBugs').onchange = fossilNameImage;

// if(localStorage.getItem(fossilList)){
//     let arrayLocal = localStorage.getItem(fossilList);
//     let arrayLocalDesparsedo = JSON.parse(fossilList)
//     console.log(arrayLocalDesparsedo)
//     /* alert("Tus datos del local son: " +  arrayLocalDesparsedo);
//     arrayLocalDesparsedo.push("soy nuevo");
//     let nuevoArrayParseado = JSON.stringify(arrayLocalDesparsedo);
//     localStorage.setItem("Favoritos", nuevoArrayParseado); */
// } else {
//     /* let nuevoArray = [ 2, true, "sadgfqsadg", {obj : "Si"}];

//     let nuevoArrayParseado = JSON.stringify(nuevoArray);
//     localStorage.setItem("Favoritos", nuevoArrayParseado);
//     alert("Gurdado en el local"); */
// }