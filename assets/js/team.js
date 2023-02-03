
const root = document.getElementById("root")
const cardContainer = document.getElementById("cards")
const members = [
    {
        Id: 1,
        Image: "./images/member1.png",
        Name: "Əli Yaqubov",
    },

    {
        Id: 2,
        Image: "./images/member2.jpg",
        Name: "Aqil Rüstəmov",
    },

    {
        Id: 3,
        Image: "./images/member3.jpg",
        Name: "Leyla Qasımova",
    },

    {
        Id: 4,
        Image: "./images/member4.jpg",
        Name: "Azər Aslanov",
    },

    {
        Id: 5,
        Image: "./images/member5.png",
        Name: "Fəridə Dadaşova",
    },

    {
        Id: 6,
        Image: "./images/member6.png",
        Name: "Natalie Baxışova",
    },

    {
        Id: 7,
        Image: "./images/member7.png",
        Name: "Artur Jackson",
    },

    {
        Id: 8,
        Image: "./images/member8.png",
        Name: "Nərgiz  Əhmədova",
    },

    {
        Id: 9,
        Image: "./images/member9.png",
        Name: "Şahin  Əsədov",
    },

    {
        Id: 10,
        Image: "./images/member10.png",
        Name: "İlahə İbrahimova",
    },

    {
        Id: 11,
        Image: "./images/member11.jpg",
        Name: "Rasim Rüstəmov",
    },

    {
        Id: 12,
        Image: "./images/member12.png",
        Name: "İlkin Rüstəmov",
    },

    {
        Id: 13,
        Image: "./images/member13.jpg",
        Name: "Səməd Aslanov",
    },

    {
        Id: 14,
        Image: "./images/member14.png",
        Name: "Murad Abbosov",
    },
]

members.forEach(function (member) {
    cardContainer.innerHTML += `<div class="col-md-4 col-sm-6">
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

const popup = document.querySelector(".pop-up-container")
var popupImg = document.querySelector(".pop-up .image img")
var popupName = document.querySelector(".pop-name")

cards.forEach(card => {
    card.addEventListener("click", () => {
        const result = members.find(m=>m.Id == card.dataset.id)
        popupImg.src = result.Image
        popupName.innerText = result.Name
        popup.classList.add("pop-up-active");
    })
})

const close = document.querySelector(".close button");
close.addEventListener("click", () => {
    popup.classList.remove("pop-up-active");
})

