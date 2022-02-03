let bugsList;

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

        function bugsNameImage() {
            let keyNameBugs = this.value;
            let image = bugsList[keyNameBugs].icon_uri;
            let name = bugsList[keyNameBugs].name["name-EUes"];
            let monthNorthern = bugsList[keyNameBugs].availability["month-array-northern"];
            let monthSouthern = bugsList[keyNameBugs].availability["month-array-southern"];
            let monthNorthernWithNames = numberToMonth(monthNorthern);
            let monthSouthernWithNames = numberToMonth(monthSouthern);
            let priceMininook = bugsList[keyNameBugs].price;
            let priceKamilo = bugsList[keyNameBugs]["price-flick"];
            document.querySelector('.imgFishBugsMain').innerHTML = `<img src=${image}/>`;
            document.querySelector('.nameFishBugsMain').innerHTML =`<p>${name}</p>`; 
            document.querySelector('.monthFishingPriceFishAndBugs').innerHTML = `<div><p>Meses de captura de insectos en el emisferio norte: ${monthNorthernWithNames}</p><p>Meses de captura de insectos en el emisferio sur: ${monthSouthernWithNames}</p></div><p>Precio en la Mininook: ${priceMininook}</p><p>Precio cuando viene Kamilo a la isla: ${priceKamilo}`;
        }

        document.querySelector('.dropdownFishFossilBugs').onchange = bugsNameImage;

