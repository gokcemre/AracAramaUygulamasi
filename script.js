// ! ARAÇ FİLTRELEMESİ YAPMAK İÇİN

const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", function() {
    let searchTerm = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll(".card");
    for(let i = 0; i < cards.length; i++){
    let card = cards [i]
    
    let productName = card.querySelector(".card-title").innerHTML.toLowerCase();
    console.log(productName);
    if(productName.includes(searchTerm)){
        card.style.display = "block";
    }else{
        card.style.display = "none";
    }

}   
})

const row = document.querySelector(".row");

const sepet = document.querySelector("#result");

row.addEventListener("click", function(e){
    console.log(e.target)
    if(e.target.className.includes("add-to-card")){
        sepet.innerHTML++
    }else if (e.target.className.includes("remove-to-card")){
        if(sepet.innerHTML !=0){
            sepet.innerHTML--
        }
    }
})