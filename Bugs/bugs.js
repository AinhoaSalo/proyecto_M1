let bugsList;
let keyNameBugs;

    fetch("http://acnhapi.com/v1/bugs/")
    .then(function (res){
        return res.json();
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
        document.querySelector('.monthFishingPriceFishAndBugsMobile').innerHTML = `<div><p>Meses de captura de insectos en el emisferio norte: ${monthNorthernWithNames}</p><p>Meses de captura de insectos en el emisferio sur: ${monthSouthernWithNames}</p></div><p>Precio en la Mininook: ${priceMininook}</p><p>Precio cuando viene Kamilo a la isla: ${priceKamilo} <button class="favoriteMobile">anadir a favorito</button>`;
        document.querySelector('.favoriteMobile').addEventListener("click", addFavorite);

        document.querySelector('.imgFishBugsMainDesktop').innerHTML = `<img src=${image}/>`;
        document.querySelector('.nameFishBugsDesktop').innerHTML =`<p>${name}</p>`; 
        document.querySelector('.monthFishingPriceFishAndBugsDesktop').innerHTML = `<div><p>Meses de captura de insectos en el emisferio norte: ${monthNorthernWithNames}</p><p>Meses de captura de insectos en el emisferio sur: ${monthSouthernWithNames}</p></div><p>Precio en la Mininook: ${priceMininook}</p><p>Precio cuando viene Kamilo a la isla: ${priceKamilo} <button class="favoriteDesktop">anadir a favorito</button>`;
        document.querySelector('.favoriteDesktop').addEventListener("click", addFavorite);

        document.querySelector('.imgFishBugsMainDesktopMaxPixel').innerHTML = `<img src=${image}/>`;
        document.querySelector('.nameFishBugsDesktopMaxPixel').innerHTML =`<p>${name}</p>`; 
        document.querySelector('.monthFishingPriceFishAndBugsDesktopMaxPixel').innerHTML = `<div><p>Meses de captura de insectos en el emisferio norte: ${monthNorthernWithNames}</p><p>Meses de captura de insectos en el emisferio sur: ${monthSouthernWithNames}</p></div><p>Precio en la Mininook: ${priceMininook}</p><p>Precio cuando viene Kamilo a la isla: ${priceKamilo} <button class="favoriteDesktopMaxPixel">anadir a favorito</button>`;
        document.querySelector('.favoriteDesktopMaxPixel').addEventListener("click", addFavorite);
    }

    

