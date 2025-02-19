const fixedItem = document.getElementById('fixedItem');
const stickyPosition = 1512;

let state = false;

window.addEventListener("scroll", ()=>{
    let position = window.scrollY

    if(position >= stickyPosition && position <= 2000){
        fixedItem.style.position = "fixed"
        fixedItem.style.left = "700px"
        state = false
    } else {
        fixedItem.style.position = "static"
    }
    console.log(position)
    console.log(state)
})