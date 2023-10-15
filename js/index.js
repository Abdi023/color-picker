let allGames = document.getElementsByClassName("game");        
let filters = document.getElementsByClassName("filter");

window.scrollTo(0,0);
setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
},1500);

for(let i = 0; i < filters.length; i++) {
    filters[i].checked = true;

}


// forbidden west
let forbiddenwest = document.getElementById("checkbox-forbiddenwest");
forbiddenwest.onchange = function(){
    if(forbiddenwest.checked === true){
        for (let i = 0; i < allGames.length; i++) {
            if(allGames[i].dataset.category === "forbiddenwest"){
                allGames[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i < allGames.length; i++) {
            if(allGames[i].dataset.category === "forbiddenwest"){
                allGames[i].style.display = "none";
            }
        }
    }
}



// ghost of tsushima 
let ghost = document.getElementById("checkbox-ghost-of-tsushima");
ghost.onchange = function(){
    if(ghost.checked === true){
        for (let i = 0; i < allGames.length; i++) {
            if(allGames[i].dataset.category === "ghost_of_tshumia"){
                allGames[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i < allGames.length; i++) {
            if(allGames[i].dataset.category === "ghost_of_tshumia"){
                allGames[i].style.display = "none";
            }
        }
    }
}



// red dead redemption 2
let red2 = document.getElementById("checkbox-red2");
red2.onchange = function(){
    if(red2.checked === true){
        for (let i = 0; i < allGames.length; i++) {
            if(allGames[i].dataset.category === "red-dead-redemption-2"){
                allGames[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i < allGames.length; i++) {
            if(allGames[i].dataset.category === "red-dead-redemption-2"){
                allGames[i].style.display = "none";
            }
        }
    }
}



