let liItem = document.body.getElementsByClassName("li1")
liItem = Array.from(liItem)
let bottomLine = document.body.getElementsByClassName("pagebreak2")
bottomLine = Array.from(bottomLine)
// console.log(liItem, bottomLine)
let selectedItem = document.getElementsByClassName("li2")
let mainImg = document.getElementById("mainImg")
let mainImg2 = document.getElementById("mainImg2")
let src = [`images/image-product-1.jpg`, `images/image-product-2.jpg`, `images/image-product-3.jpg`, `images/image-product-4.jpg`]
let number = document.getElementsByClassName("number")[0].innerHTML
let number1 = document.getElementsByClassName("number")[0]
number = Number.parseInt(number)
let plus = document.getElementsByClassName("plus")[0]
let minus = document.getElementsByClassName("minus")[0]
let viewLarge = document.getElementsByClassName("viewLarge")[0]
let nav = document.getElementsByClassName("navbar")[0]
let body = document.getElementsByClassName("body")[0]
let cross = document.getElementById("svg")
let prev = document.getElementsByClassName("prev")[0]
let next = document.getElementsByClassName("next")[0]
let mainImage2 = document.getElementById("mainImage2")
let mainImage = document.getElementsByClassName("mainImage")[0]
let priceTag = document.getElementsByClassName("priceTag")[0]
let addtoCart = document.getElementsByClassName("addtoCart")[0]
let cartContainer = document.getElementsByClassName("cartContainer")[0]
let hidden = document.getElementsByClassName("hidden")[0]
let cartDelete = document.getElementsByClassName("cartDelete")[0]
let cart = document.getElementById("cart")
let cartPlace = document.getElementsByClassName("cartPlace")[0]
let noItem = document.createElement("div")
let cartBody = document.getElementsByClassName("cartBody")[0]
let cartImg2 = document.getElementsByClassName("cartImg2")[0]
let firstMain = document.getElementsByClassName("firstMain")[0]
let prevNext = document.createElement("div")
let html = document.getElementsByTagName("html")[0]
let menu = document.getElementById("menu")
let navSide = document.getElementsByClassName("navSide")[0]
let extra = document.getElementsByClassName("extra")[0]

noItem.innerHTML = "Cart is Empty"
noItem.setAttribute("id", "noItem")
prevNext.setAttribute("id", "prevNext")
var priceMultiplier = document.createElement("div")
priceTag.appendChild(priceMultiplier)

var finalPrice = document.createElement("div")
finalPrice.setAttribute("id", "finalPrice")
priceTag.appendChild(finalPrice)

let n = number


for (let i = 1; i < 6; i++) {
    liItem[i].onmouseover = () => {
        bottomLine[i - 1].style.background = "hsl(26, 100%, 55%)"
    }
    liItem[i].onmouseout = () => {
        bottomLine[i - 1].style.background = "transparent"
    }
}

let imageNumber = async () => {
    return new Promise((resolve, reject) => {
        for (let j = 0; j < 4; j++) {

            selectedItem[j].onclick = () => {
                resolve(j)
                largeImg()

                for (let k = 0; k < 4; k++) {
                    selectedItem[k].setAttribute("id", "")
                }
                selectedItem[j].setAttribute("id", "li2")
                mainImg.setAttribute("src", src[j])

            }

        }
    })
}


plus.onclick = () => {
    number += 1
    number1.innerHTML = number
}
addtoCart.onclick = () => {
    priceMultiplier.innerHTML = `x ${number} `
    finalPrice.innerHTML = `$${number * 125}.00`
    priceMultiplier.style.paddingRight = "6px"
    finalPrice.style.fontFamily = "'Kumbh Sans', sans-serif;"
    finalPrice.style.fontWeight = "700"
    cartContainer.style.opacity = "1"
    console.log(number)
    cartContainer.style.display = "flex"
    cartPlace.removeAttribute("id");
    if (number != 0) {
        noItem.innerHTML = ""
        noItem.style.padding = "0"
        cartContainer.style.display = "flex"
    }
    else {
        cartContainer.style.display = "none"
        noItem.innerHTML = "Cart is Empty"
        cartBody.appendChild(noItem)
    }

}
minus.onclick = () => {

    if (number > 0) {
        number -= 1
        number1.innerHTML = number

    }

}

cross.onmouseover = () => {
    cross.setAttribute("fill", "orange")
}
cross.onmouseout = () => {
    cross.setAttribute("fill", "white")
}
cross.onclick = () => {
    nav.setAttribute("id", "")
    body.setAttribute("id", "")
    document.body.setAttribute("class", "")
    viewLarge.style.display = "none"
    nav.style.pointerEvents = ""
    body.style.pointerEvents = ""
}
let largeImg = async () => {
    let outPut = await imageNumber()

    mainImg2.setAttribute("src", src[outPut])
    console.log(src[outPut])

    let o = 0
    next.onclick = () => {
        o += 1;
        if (o == 4) {
            o = 0
        }
        selectedItem[(o + 4)].style.border = "0px"
        let selectedThumbnail = ("endImg" + (o + 3))
        mainImg2.setAttribute("src", src[o])
        console.log(selectedThumbnail)
        selectedItem[(o + 4)].setAttribute("id", selectedThumbnail)
        let thumbnail = document.getElementById(selectedThumbnail)
        console.log(thumbnail)
        thumbnail.setAttribute("id", "highlighted")
    }
    prev.onclick = () => {
        if (o == -1) {
            o = 3
        }

        mainImg2.setAttribute("src", src[o])
        o -= 1;
    }


}
imageNumber()
let o = 0

next.onclick = () => {
    o += 1;
    if (o == 4) {
        o = 0
    }
    // selectedItem[(o + 4)].style.border = "0px"
    let selectedThumbnail = ("endImg" + (o + 3))
    mainImg2.setAttribute("src", src[o])
    console.log(selectedThumbnail)
    selectedItem[(o + 4)].setAttribute("id", selectedThumbnail)
    let thumbnail = document.getElementById(selectedThumbnail)
    console.log(thumbnail)
    thumbnail.setAttribute("id", "highlighted")
    if (o != 3) {
        selectedItem[7].setAttribute("id", "")
    }
    if (o != 0) {
        selectedItem[4].setAttribute("id", "")
    }
    if (o != 1) {
        selectedItem[5].setAttribute("id", "")
    }
    if (o != 2) {
        selectedItem[6].setAttribute("id", "")
    }
}

prev.onclick = () => {


    mainImg2.setAttribute("src", src[o])
    o -= 1;
    let selectedThumbnail = ("endImg" + (o + 3))
    if (o == -1) {
        o = 3
    }
    mainImg2.setAttribute("src", src[o])
    selectedItem[(o + 4)].setAttribute("id", selectedThumbnail)
    let thumbnail = document.getElementById(selectedThumbnail)
    // console.log(thumbnail)    
    console.log(selectedThumbnail)

    thumbnail.setAttribute("id", "highlighted")
    if (o != 3) {
        selectedItem[7].setAttribute("id", "")
    }
    if (o != 0) {
        selectedItem[4].setAttribute("id", "")
    }
    if (o != 1) {
        selectedItem[5].setAttribute("id", "")
    }
    if (o != 2) {
        selectedItem[6].setAttribute("id", "")
    }

}
if (number == 0) {
    cartContainer.style.opacity = "0"
}


cartDelete.onclick = () => {
    cartContainer.style.display = "none"
    cartBody.appendChild(noItem)
    noItem.innerHTML = "Cart is Empty"
    noItem.style.padding = "20px 10px"
}
cartImg2.onclick = () => {

    if (cartPlace.hasAttribute("id")) {
        cartPlace.removeAttribute("id");
    } else {
        cartPlace.setAttribute("id", "hidden");
    }

}
mainImg.onclick = () => {
    nav.setAttribute("id", "itemBlack")
    body.setAttribute("id", "itemBlack")
    document.body.setAttribute("class", "body1")
    viewLarge.style.display = "flex"
    nav.style.pointerEvents = "none"
    body.style.pointerEvents = "none"
    prevNext.innerHTML = ""
}

menu.onclick = ()=>{
    extra.style.display = "flex"
    navSide.style.display = "flex"
}
cross2.onclick = ()=>{
    extra.style.display = "none"
    navSide.style.display = "none"
}