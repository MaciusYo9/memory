
  
const pary = ["red", "blue", "blue", "red", "green", "green", "yellow", "yellow", "orange", "orange", 
    "pink", "pink", "purple", "purple", "brown", "brown", "lime", "lime", "cyan", "cyan"];

let karty = document.querySelectorAll(".grid");
karty=[...karty]; //zamienia karty na tablica te "..." to te klasy 

let wynik=document.getElementById("wynik");

const licznik= new Date().getTime();

let aktywnaKarta="";
const aktywneKarty=[];

const iloscPar=karty.length/2; //liczba par
let rezultat=0;

const klikKarta=function(){

    aktywnaKarta= this; //to co zosatwlo klikniete i wywolalo tą funkcje!!!
    
    
    if(aktywnaKarta==aktywneKarty[0]) return;
   
    
    
    
    
    aktywnaKarta.classList.remove("ukryty");

    if(aktywneKarty.length===0){
        aktywneKarty[0]=aktywnaKarta;
        return; //konczy funkcje
    }
    else{
        karty.forEach(karta=>{
            karta.removeEventListener("click",klikKarta)
        })
        aktywneKarty[1]=aktywnaKarta;
        setTimeout(() => {
            if(aktywneKarty[0].classList[1] === aktywneKarty[1].classList[1]){
                aktywneKarty.forEach(karta=> karta.classList.add("wylaczona"))
                rezultat++;
                wynik.innerHTML=`Wynik: ${rezultat}/10`;

                karty=karty.filter(karta=>!karta.classList.contains("wylaczona"))


                if(rezultat==iloscPar)
                {
                    const koncowyLicznik= new Date().getTime();
                    const czas=(koncowyLicznik-licznik)/1000;
                    wynik.innerHTML=`Wynik: ${rezultat}/10`;
                    alert("Wygrana w: "+czas+"s");
                    location.reload();
                }
            }
            else{   
                aktywneKarty.forEach(karta=> karta.classList.add("ukryty"))
    
            }
            aktywnaKarta="";
            aktywneKarty.length=0;
            karty.forEach(karta=> karta.addEventListener("click",klikKarta))

        }, 500);
     


    }


};


const init = function() {
    //forEach mówi że wyonaj na każdym
    karty.forEach(function(karta){

        const pozycja =Math.floor(Math.random()*pary.length);
        karta.classList.add(pary[pozycja]);
        pary.splice(pozycja,1); //splice usuwa element z tablicy po , mówimy ile elementów chcemy usunąć

    })


    setTimeout(function(){
        karty.forEach(function(karta){
            karta.classList.add("ukryty")
            karta.addEventListener("click",klikKarta)


        })

    },1000)

}

init();




