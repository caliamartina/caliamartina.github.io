
const categorie = document.querySelectorAll(".cat");


const contenuti = document.querySelectorAll(".content-box");


categorie.forEach(cat => {
    cat.addEventListener("click", () => {

        
        categorie.forEach(c => c.classList.remove("active"));
        cat.classList.add("active");

        
        contenuti.forEach(box => box.classList.remove("active"));

        
        const target = cat.getAttribute("data-target");
        document.getElementById(target).classList.add("active");
    });
});
