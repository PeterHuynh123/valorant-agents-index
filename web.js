// const abilities = document.querySelectorAll("#abilities")
const URL = "https://valorant-api.com/v1/agents"
const abilitiesDesc = document.querySelector("#abilities-desc")
const currentDescTitle = document.querySelector("#current-desc-title")

let abilities = document.querySelectorAll(".ability")



const changeDesc = (data, abNum, abilitiesDesc, currentDescTitle) => {
    console.log("hello")
    let desc = data[0]['abilities'][abNum]["description"]
    let descTitle = data[0]['abilities'][abNum]["displayName"]

    abilitiesDesc.innerHTML = `<p>${desc}</p>`
    currentDescTitle.innerHTML = descTitle
}

const changeAbDesc = (abNum) => {
    (async () => {
        try {
            const res = await fetch('https://valorant-api.com/v1/agents')
            const data = await res.json()
            changeDesc(data, abNum, abilitiesDesc, currentDescTitle)
        } catch (err) {
            alert("ERROR")
        }
    })();
}


for (let i = 0; i < abilities.length; i++) {
    abilities[i].addEventListener('onclick', e => {
        changeAbDesc(counter);
        console.log("hi")
    }
    )
}
