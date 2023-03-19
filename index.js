let button = document.querySelector("#btn")
let container = document.querySelector(".container")


button.addEventListener("click",(e)=>{

    let input = document.querySelector("#text").value

    let sieve = input.split(" ").length - 1 // I counted the spaces thanks to the split method

    if(!input || input.length < 3){

        e.preventDefault()
        alert("Funny Thing")

    }else if(sieve > 2){

        container.innerHTML=`<img src="./ga.jpg">
         <h3>Okey</h3>
        `
     }else{
         
         container.innerHTML=`<img src="./ca.jpg">
         <h2>Coll</h2>
         <h2>You seem to succeed</h2>
         `
     }



})


//JAVASCRİPT İLE RESİM GÖNDERDİM







