const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carroussel(){
    idx++;

    if(idx > img.length -1 ){
        idx = 0;
    }

    imgs.style.transform = `translateX(${ -idx * 500}px)`;
}

setInterval(carroussel, 3600);