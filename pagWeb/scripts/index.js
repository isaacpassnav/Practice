function cardsLoad(pelicula) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const h4 = document.createElement("h4"); 
    const button = document.createElement("button");

    img.src = pelicula.poster;
    img.classList.add("guardians"); 
    img.alt = pelicula.title;
    img.value = pelicula.id;
    img.background = pelicula.background; 

    h4.innerHTML = pelicula.title; // Cambiado de h1 a h4
    button.innerHTML = "ver ahora";

    div.classList.add("card");
    div.appendChild(img); 
    div.appendChild(h4); 
    div.appendChild(button); 

    img.addEventListener("mouseenter", function(ele) {
        const background = ele.target.background
        const body = document.querySelector("body")
        body.style.backgroundImage =  `url(${background})`
    }); 
    return div;
}

function dataTransform(data){
    data.forEach((pelicula,index) =>{
        pelicula.id = index + 1;
        switch(pelicula){
            case 1:
                pelicula.background = "https://wallpaperaccess.com/full/96391.jpg"
            case 2: 
                pelicula.background = "https://th.bing.com/th/id/R.2d463f54bf6c4896262523ccf5cc37aa?rik=EVT0W%2bqJ%2fjzaJg&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2fstar-wars-poster-4k-af.jpg&ehk=XUwzZ2HStyJCqpLQKYqNtM1TqtI3A0CjNb0VhwOxx0I%3d&risl=1&pid=ImgRaw&r=0"
            case 3:
                pelicula.background = "https://c8.alamy.com/comp/HCH6BE/the-lord-of-the-rings-fellowship-of-the-ring-2001-HCH6BE.jpg"
            default:
                break;
        }
    });

    const arrayHtmlCards = tempData.map(cardsLoad);
    arrayHtmlCards.forEach((pelicula) => {cardsContainer.appendChild(pelicula)});
};

const cardsContainer = document.querySelector('.section2'); 

function getData(){
    $.get("https://jsonplaceholder.typicode.com/users", (dataTransform) );
};
getData()
