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

    function showFavorite() {
        document.querySelector('.callFavoriteStar').innerHTML = "";
        if(localStorage.getItem("bugsList")){
          let arrayLocal = localStorage.getItem("bugsList");
          let arrayLocalDesparsedo = JSON.parse(arrayLocal);
          arrayLocalDesparsedo.forEach(bugs => {
            console.log(bugs)
            document.querySelector('.callFavoriteStar').innerHTML += `<div class="sonCallFavoriteStar"><img src=${bugs.icon_uri}/><p>${bugs.name["name-EUes"]}</p></div>`;  
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

    function addFavorite() {
        if(localStorage.getItem()){
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

    function deleteFavorite() {
        localStorage.removeItem([bugsList[keyNameBugs]]);
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
        document.querySelector('.nameFishBugsMobile').innerHTML =`<p>${name}</p>`; 
        document.querySelector('.monthFishingPriceFishAndBugsMobile').innerHTML = `<div><p>Meses de captura de insectos en el emisferio norte: ${monthNorthernWithNames}</p><p>Meses de captura de insectos en el emisferio sur: ${monthSouthernWithNames}</p></div><p>Precio en la Mininook: ${priceMininook}</p><p>Precio cuando viene Kamilo a la isla: ${priceKamilo}`;
        document.querySelector('.buttonMobile').innerHTML = `<div class="sonNameAndPriceFossil"><button class="addFavoriteMobile">Anadir a favoritos</button></div><div class="sonNameAndPriceFossil"><button class="deleteFavoriteMobile">Eliminar de favoritos</button></div>`;
        document.querySelector('.addFavoriteMobile').addEventListener("click", addFavorite);
        document.querySelector('.deleteFavoriteMobile').addEventListener("click", deleteFavorite);

        document.querySelector('.imgFishBugsMainDesktop').innerHTML = `<img src=${image}/>`;
        document.querySelector('.nameFishBugsDesktop').innerHTML =`<p>${name}</p>`; 
        document.querySelector('.monthFishingPriceFishAndBugsDesktop').innerHTML = `<div><p>Meses de captura de insectos en el emisferio norte: ${monthNorthernWithNames}</p><p>Meses de captura de insectos en el emisferio sur: ${monthSouthernWithNames}</p></div><p>Precio en la Mininook: ${priceMininook}</p><p>Precio cuando viene Kamilo a la isla: ${priceKamilo}`;
        document.querySelector('.buttonDesktop').innerHTML = `<div class="sonNameAndPriceFossil"><button class="addFavoriteDesktop">Anadir a favoritos</button></div><div class="sonNameAndPriceFossil"><button class="deleteFavoriteDesktop">Eliminar de favoritos</button></div>`;
        document.querySelector('.addFavoriteDesktop').addEventListener("click", addFavorite);
        document.querySelector('.deleteFavoriteDesktop').addEventListener("click", deleteFavorite);

        document.querySelector('.imgFishBugsMainDesktopMaxPixel').innerHTML = `<img src=${image}/>`;
        document.querySelector('.nameFishBugsDesktopMaxPixel').innerHTML =`<p>${name}</p>`; 
        document.querySelector('.monthFishingPriceFishAndBugsDesktopMaxPixel').innerHTML = `<div><p>Meses de captura de insectos en el emisferio norte: ${monthNorthernWithNames}</p><p>Meses de captura de insectos en el emisferio sur: ${monthSouthernWithNames}</p></div><p>Precio en la Mininook: ${priceMininook}</p><p>Precio cuando viene Kamilo a la isla: ${priceKamilo}`;
        document.querySelector('.buttonDesktopMaxPixel').innerHTML = `<div class="sonNameAndPriceFossil"><button class="addFavoriteDesktopMaxPixel">Anadir a favoritos</button></div><div class="sonNameAndPriceFossil"><button class="deleteFavoriteDesktopMaxPixel">Eliminar de favoritos</button></div>`;
        document.querySelector('.addFavoriteDesktopMaxPixel').addEventListener("click", addFavorite);
        document.querySelector('.deleteFavoriteDesktopMaxPixel').addEventListener("click", deleteFavorite);

    }

    

