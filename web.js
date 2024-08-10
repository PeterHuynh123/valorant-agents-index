// const getIcon = async () => {

// }

// var glide = new Glide(".glide", {
//     type: "carousel",
//     focusAt: "center",
//     perView: 3
//   });

// glide.mount();
  

const agentsGrid = document.querySelector("#agents-grid");
const agentPortrait = document.querySelector('#agent-portrait');
const agentBg = document.querySelector('#agent-bg');


const API_URL = "https://valorant-api.com/v1/agents";
fetch(API_URL)
  .then((responseObject) => responseObject.json())
  .then((resJson) => {
    // console.log(resJson);
    const { data: agentList } = resJson; // deconstruct resJson object && rename data to agentList
    // console.log(data); // resJson.data
    console.log(agentList);

    agentList.forEach((agent) => {
      const { fullPortraitV2, background } = agent; // no need agent.fullPortraitV2

      const li = document.createElement('li');

      li.addEventListener('click', () => {
        agentPortrait.src = fullPortraitV2;
        agentBg.src = background;
      })
      
      const agentImage = `<img src="${fullPortraitV2}" alt="" width="400"></img>`;
      li.innerHTML += agentImage;

    //   agentsGrid.innerHTML += li;
        agentsGrid.appendChild(li);
    });
  })
  .catch((err) => {
    console.error(err);
  });
