 // thumnail js
        let thumbnail_imgs = document.querySelectorAll(".thumbnail_imgs img")
        let thumbnail_mainimg = document.querySelector(".thumbnail_mainimg img")
        thumbnail_imgs.forEach(images => {
            images.addEventListener("mouseenter", (e) => {
                thumbnail_imgs.forEach(all => { all.style.borderColor = "black"; })
                images.style.borderColor = "red";
                e.stopPropagation();
                thumbnail_mainimg.src = images.src;
            })
        })

        // products detail
        let table = document.querySelector(".prod_info")
        let product_details = document.querySelector(".product_details > div")
        product_details.addEventListener("click", () => {
            let minus = product_details.querySelector("i")
            minus.classList.toggle("bi-plus-lg")
            minus.classList.toggle("bi-dash-lg")
            table.classList.toggle("showing")
        })

 let review = document.querySelector(".review")
        let rating_section = document.querySelector(".rating_section > div")
        rating_section.addEventListener("click", () => {
            let minus = rating_section.querySelector("i")
            minus.classList.toggle("bi-plus-lg")
            minus.classList.toggle("bi-dash-lg")
            review.classList.toggle("showing")
        })


        // color js
           const colordiv = document.querySelector(".colordiv");

const colors = ["red", "blue", "green", "yellow", "black", "pink", "orange"];

colors.forEach(color => {
  const colorBox = document.createElement("div");
  colorBox.className = "color";
  colorBox.style.backgroundColor = color;
  colordiv.appendChild(colorBox);
});