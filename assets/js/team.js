const root = document.getElementById("root")
const cardContainer = document.getElementById("cards")
const members = [
    {
        Id: 1,
        Image: "images/boy-chef.jpg",
        Name: "Əli Yaqubov",
    },
    {
        Id: 2,
        Image: "images/boy-chef.jpg",
        Name: "Aqil Rüstəmov",
    },
    {
        Id: 3,
        Image: "images/girl-chef.jpg",
        Name: "Leyla Qasımova",
    },
    {
        Id: 4,
        Image: "images/boy-chef.jpg",
        Name: "Azər Aslanov",
    },
    {
        Id: 5,
        Image: "images/girl-chef.jpg",
        Name: "Fəridə Dadaşova",
    },
    {
        Id: 6,
        Image: "images/girl-chef.jpg",
        Name: "Natalie Baxışova",
    },
    {
        Id: 7,
        Image: "images/boy-chef.jpg",
        Name: "Artur Jackson",
    },
    {
        Id: 8,
        Image: "images/girl-chef.jpg",
        Name: "Nərgiz  Əhmədova",
    },
    {
        Id: 9,
        Image: "images/boy-chef.jpg",
        Name: "Şahin  Əsədov",
    },
    {
        Id: 10,
        Image: "images/girl-chef.jpg",
        Name: "İlahə İbrahimova",
    },
    {
        Id: 11,
        Image: "images/boy-chef.jpg",
        Name: "Rasim Rüstəmov",
    },
    {
        Id: 12,
        Image: "images/boy-chef.jpg",
        Name: "İlkin Rüstəmov",
    },
    {
        Id: 13,
        Image: "images/boy-chef.jpg",
        Name: "Səməd Aslanov",
    },
    {
        Id: 14,
        Image: "images/boy-chef.jpg",
        Name: "Murad Abbosov",
    },
]

members.forEach(function (member) {
    cardContainer.innerHTML += `<div class="col-lg-4 col-md-6 col-sm-12">
    <div class="card" data-id="${member.Id}">
        <div class="img-container col-md-12">
            <img class="img-fluid member-img" src="${member.Image}">
        </div>
        <div class="text-con"> 
                <h4>${member.Name}</h4>
        </div>                       
     </div>             
</div>`
})

const cards = document.querySelectorAll(".card")
const popup = document.querySelector(".team-modal")
var popupImg = document.querySelector(".popup-img")
var popupName = document.querySelector(".member-name")

cards.forEach(card => {
    card.addEventListener("click", () => {
        const result = members.find(m=>m.Id == card.dataset.id)
        popupImg.src = result.Image
        popupName.innerText = result.Name
        popup.classList.add("modal-active");
    })
})

const close = document.querySelector(".modal-close");
close.addEventListener("click", () => {
    popup.classList.remove("modal-active");
})