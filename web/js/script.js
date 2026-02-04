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
})
const ctgclose = document.querySelector(".ctgclose").addEventListener("click",()=>{
    ctglistdiv.style.left="-100%"
})

// mobile filter
const sort_div= document.querySelector(".sort_div")
const filteratmobile_sort = document.querySelector("#filteratmobile_sort").addEventListener("click",()=>{
sort_div.classList.add('show')
})
const sort_div_close = sort_div.querySelector(".bi-x-lg").addEventListener("click",()=>{
sort_div.classList.remove('show')
})

const filter_div= document.querySelector(".filter_div")
const filteratmobile_filter = document.querySelector("#filteratmobile_filter").addEventListener("click",()=>{
filter_div.classList.add('show')
})
const filter_div_close = filter_div.querySelector(".bi-x-lg").addEventListener("click",()=>{
filter_div.classList.remove('show')
})



// filter section
const dropdowns = document.querySelectorAll('.maindropdown');
const sortoptions = document.querySelectorAll(".sort-option")

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        const dropdownList = dropdown.closest('.maindropdownlist');
        dropdownList.classList.toggle('active');
    });
})


sortoptions.forEach(option => {
    option.addEventListener('click', (e) => {
e.stopPropagation();
        const parentList = option.closest('.maindropdownlist');
        parentList.querySelectorAll('.sort-option')
            .forEach(el => el.classList.remove('active'));

        option.classList.add('active');
    });
});