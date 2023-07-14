fetch("drinkList.json")//導入json黨
    .then(res => res.json())
    .then(data => {
        drinkList = data
    })

const butEl = document.getElementById("but1");
const ansEl = document.querySelector("#ans1");

butEl.addEventListener("click",() => {
    ansNum = Math.floor(Math.random()*drinkList.length);
    ansEl.innerText = drinkList[ansNum].name;
})
