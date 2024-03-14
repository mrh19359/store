let home=document.querySelector(".home")
let onboarding=document.querySelector(".onboarding")
let footer_icon=document.querySelector(".footer-icon")
let showOnboarding = true;

function getstarted(event) {
    event.preventDefault();
    console.log(event);
    console.log(event.preventDefault());
    
    onboarding.classList.add("display-none");
    home.classList.add("display-block");
    footer_icon.classList.add("display-flex");
    
    showOnboarding = false;
}

if (!showOnboarding) {
    onboarding.classList.add("display-none");
    home.classList.add("display-block");
    footer_icon.classList.add("display-flex");
}


const request = new XMLHttpRequest();
request.open("GET", "https://fakestoreapi.com/products");
request.send();

request.addEventListener("load", getData);

function getData() {
    const data = JSON.parse(request.responseText);
    render(data);
}

let root = document.querySelector(".root");

function render(list) {
    const tem = list.map(function (item) {
        return `
            <div class="store-cards">
                <img src="${item.image}" alt="">
                <div>
                    <p id="store-card-text-bold">${item.title}</p>
                    <p id="store-card-text"></p>
                    <p id="store-card-text-bold">${item.price}$</p>
                </div>
            </div>
        `;
    });
    root.innerHTML = tem.join(" ");
}

let search_input = document.getElementById("search-input")

function search() {
    const data = JSON.parse(request.responseText);
    let searchValue = search_input.value.toLowerCase();
    let filteredData = data.filter(item => item.category.toLowerCase().includes(searchValue));
    render(filteredData);
}
let bg_buttom=document.querySelector(".bg-button")
function dataFilter(category) {
    const dataFilte = JSON.parse(request.responseText)
    if (category === 1) { category = "men's clothing" }
    if (category === 2) { category = "jewelery" }
    if (category === 3) { category = "electronics" }
    const filteredList = dataFilte.filter(function (item) {
        return item.category === category;
    });
    render(filteredList)
}

