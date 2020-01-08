// All html elements that are needed
const createBtnEl = document.getElementById("create-btn");
const berderBoxEl = document.getElementById("burger-box");
const berderStorageEl = document.getElementById("berder-storage");
const devouredberdersEl = document.getElementById("devoured-burgers");

// displays all the berders in the db
async function displayburgers(){
    try{
        let allTheburgersHtml = "";
        let allTheDevouredHambersHtml = "";
        const {data: allburgers} = await axios.get("/api/burger")
        // Loops through all the burgers in the DB 
        for(let i=0; i < allburgers.length; i++){
            const {id, burger_name: burgerName, devoured} = allburgers[i]
            if(devoured){
                const devouredburgerHtml = `
                    <div class="burger ${id}">
                        ${id}: ${burgerName}
                    </div>`
                allTheDevouredHambersHtml += devouredburgerHtml;            
            }else{
                const devouredburgerHtml = `
                    <div class="burger ${id}">
                        ${id}: ${burgerName}
                        <button id=${id} class="devour-btn">Devour!</button>
                    </div>`
                allTheburgersHtml += devouredburgerHtml;
            }
        }
        // Updates the html elements
        berderStorageEl.innerHTML = allTheburgersHtml;
        devouredberdersEl.innerHTML = allTheDevouredHambersHtml;
    }
    catch(err){
        console.log("Error calling backend to get all the burgers: ", err);
    }
    try{
        await startDevourBtns()
    }
    catch(err){
        console.log("Error starting event listeners for devour btns: ", err)
    }
}
displayburgers();

async function createburger(){
    await startburgerBtn();
}
createburger(); 

function startDevourBtns(){
    const devourBtnEls = document.querySelectorAll(".devour-btn")
    for(let i=0; i < devourBtnEls.length; i++){
        devourBtnEls[i].addEventListener("click", function(){
            const burgerId = event.target.id;
            devourTheburger(burgerId)
        })
    }
}
async function devourTheburger(burgerId){
    
    await axios.put(`/api/burger/${burgerId}`)
    await displayburgers()
}
function startburgerBtn(){
    createBtnEl.addEventListener("click", async function(){
        let burgerName = "";
        await event.preventDefault()
        try {
            burgerName = await getburgerName();
          } catch (error) {
            console.error(error);
          }
        
        try {
            await axios.post('/api/burger',{burgerName});
            displayburgers();
          } catch (error) {
            console.error(error);
          }
    })
}
function getburgerName(){
    const burgerName = berderBoxEl.value;
    return burgerName;
}