const prod_card = document.querySelectorAll(".prod_card")
prod_card.forEach(card=>{
    card.addEventListener("click", ()=>{
        location.href='product-description.html';
    })
})