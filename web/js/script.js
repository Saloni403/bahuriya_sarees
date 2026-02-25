const input = document.getElementById("searchInput");
const clearBtn = document.querySelector(".clear-btn");

clearBtn.addEventListener("click", () => {
    input.value = "";
    input.focus(); // optional: keeps cursor in input
});

// mobile ctg
const ctglistdiv = document.querySelector(".ctglistdiv")
const openctg = document.querySelector(".openctg").addEventListener("click",()=>{
    ctglistdiv.style.left="0"
    document.body.style.overflow = "hidden"
})
const ctgclose = document.querySelector(".ctgclose").addEventListener("click",()=>{
    ctglistdiv.style.left="-100%"
   document.body.style.overflow = "visible"
})

let couponcode = document.querySelector(".couponcode")
let couponcodeleft = document.querySelector(".couponcodeleft")
couponcodeleft.addEventListener("click",()=>{
    couponcode.classList.toggle("showing")
    couponcodeleft.querySelector("i").classList.toggle("active")
})