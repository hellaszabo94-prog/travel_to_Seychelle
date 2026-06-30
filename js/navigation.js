document.addEventListener("DOMContentLoaded",() => {
    const btn = document.querySelector("nav button.btnNav");
    btn.addEventListener("click",() => {
        const navliste = document.querySelector("nav > ul");
        navliste.classList.toggle("visible");
    });
    
    const navelemente = document.querySelectorAll("nav a");
    for(let i=0; i<navelemente.length; i++) {
        navelemente[i].addEventListener("click",() => {
            const navliste = document.querySelector("nav > ul");
            navliste.classList.remove("visible");
        });
    }
});