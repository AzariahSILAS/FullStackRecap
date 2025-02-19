

window.addEventListener('click', () => {
    console.log("clicked")
})

function callIndianRestaurant(callback) {
    console.log(`waiter answered Phone and i ordered`)
    callback()
    
}

function orderIndianFood(callback) {
    setTimeout(() => {
        console.log("the cheff cooked my meal")
        callback()
    }, 2000)
}

function deliveredIndianFood(callback) {
    setTimeout(() => {
        console.log("the driver delivered my food!!")
        callback()
    }, 2000)
}

function eatIndianFood() {
    setTimeout(() => {
        console.log("I eat all that delicious food!!")
    }, 2000)
}


orderIndianFood(() => {
    deliveredIndianFood(() => {
        eatIndianFood()
    })
})

