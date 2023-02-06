const root = document.getElementById("root")
const cardContainer = document.getElementById("cards")
const members = [
    {
        Id: 1,
        Image: "images/johnathan-macedo.jpg",
        Name: "Johnathan Macedo",
    },
    {
        Id: 2,
        Image: "images/rod-long.jpg",
        Name: "Rod Long",
    },
    {
        Id: 3,
        Image: "images/mckayla-maroney.jpg",
        Name: "Mckayla Maroney",
    },
    {
        Id: 4,
        Image: "images/amina-filkins.png",
        Name: "Amina Filkins",
    },
    {
        Id: 5,
        Image: "images/petr-sevcovic.png",
        Name: "Petr Sevcovic",
    },
    {
        Id: 6,
        Image: "images/chen-mei-zhen.png",
        Name: "Chen Mei Zhen",
    },
    {
        Id: 7,
        Image: "images/ekaterina-bolovtsova.jpg",
        Name: "Ekaterina Bolovtsova",
    },
    {
        Id: 8,
        Image: "images/bobby-flay.jpg",
        Name: "Bobby Flay",
    },
    {
        Id: 9,
        Image: "images/andrea-piacquadio.png",
        Name: "Andrea Piacquadio",
    }
]

members.forEach(function (member) {
    cardContainer.innerHTML += `<div class="col-lg-4 col-md-6 col-sm-12">
    <div class="card" data-id="${member.Id}">
        <div class="img-container col-md-12">
            <div class="member-img" style="background-image: url('${member.Image}')"></div>
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