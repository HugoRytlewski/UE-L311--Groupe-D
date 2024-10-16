window.addEventListener("DOMContentLoaded", (event) => {
    let is_run = true; // J'ai changé "true" en true car c'est une variable bool et non une variable string


    init();

    function init(){
        document.querySelector('.button').addEventListener('click', (event) => {
            is_run = !is_run;
            ((' ' + document.querySelector('.button').className + ' ').indexOf('pause') > -1)
            ? document.querySelector('.button').setAttribute('class', document.querySelector('.button').getAttribute('class').replace(' pause', ''))
            : document.querySelector('.button').setAttribute('class', document.querySelector('.button').getAttribute('class') + ' pause');
        }); // passage sur deux lignes pour plus de lisibilité

        setInterval(function(){//setTimeInterval n'existe pas en JavaScript mais plutot setInterval
            if(is_run){
                let oDate = new Date();
                document.querySelector('#hours').innerHTML   =  adjustTimer(oDate.getHours());
                document.querySelector('#minutes').innerHTML =  adjustTimer(oDate.getMinutes());
                document.querySelector('#seconds').innerHTML =  adjustTimer( oDate.getSeconds());

                document.querySelector('body').style.background = randomHexColor(
                    document.querySelector('#hours').innerHTML,
                    document.querySelector('#minutes').innerHTML,
                    document.querySelector('#seconds').innerHTML
                ); // passage sur plusieurs lignes pour plus de lisibilité
            }
        }, 1000);
    }

    function adjustTimer(timer){
        return(timer < 10 ? '0'+timer : timer);//manque return
    }

    function randomHexColor(x, y, z){ // ajouter z comme paramètre 
        //let z= 50 // J'ai ajouté cette ligne pour définir la valeur de z
        //normalement, z est passé en paramètre à l'appel de cette fonction, et sa valeur est "document.querySelector('#seconds').innerHTML".
        return "rgb(" + Math.floor(x/100 * 256) + "," + Math.floor(y/100 * 256) + "," + Math.floor(z/100 * 256) + ")";
    }
});
