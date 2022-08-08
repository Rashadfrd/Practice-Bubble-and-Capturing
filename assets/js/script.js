let menu = document.querySelector(".menu");
let color = document.querySelector(".color");
let li = document.querySelectorAll(".li");
document.body.addEventListener("contextmenu",function (e) {
    e.preventDefault();
    let x = e.clientX;
    let y = e.clientY;
    console.log(x,y)
    menu.setAttribute("style","display:block;");
    menu.style.animationName = "opening";
    if (728 - y < 380 ) {
        menu.style.transform = "translate(" + (x - 7) + "px," + (y - 355) + "px)";
        if (1516 - x < 290) {
            menu.style.transform = "translate(" + (x - 290) + "px," + (y - 355) + "px)";
        }
    
    } else {
        menu.style.transform = "translate(" + (x - 7) + "px," + (y - 7) + "px)";    
        if (1516 - x < 290) {
            menu.style.transform = "translate(" + (x - 290) + "px," + (y) + "px)";
        }
    }
})

let customColor;
let count = 0;

color.addEventListener("click", function () {
    customColor = li[count].getAttribute("data-id");
    console.log(customColor);
    document.body.style.backgroundColor = customColor;

    if (count == li.length-1) {
        count = 0;
    } else {
        count++
    }
})

document.body.addEventListener("click", function (e) {
    menu.setAttribute("style","display:none;");
    menu.style.animationName = "none";
})
