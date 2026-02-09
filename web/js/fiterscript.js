// mobile filter
const sort_div= document.querySelector(".sort_div")
const filteratmobile_sort = document.querySelectorAll(".filteratmobile_sort")
const filter_div= document.querySelector(".filter_div")
const filteratmobile_filter = document.querySelectorAll(".filteratmobile_filter")

filteratmobile_sort.forEach(showing=>{
showing.addEventListener("click",()=>{
sort_div.classList.add('show')
filter_div.classList.remove('show')
})
})
const sort_div_close = sort_div.querySelector(".bi-x-lg").addEventListener("click",()=>{
sort_div.classList.remove('show')
})

filteratmobile_filter.forEach(showing=>{
showing.addEventListener("click",()=>{
filter_div.classList.add('show')
sort_div.classList.remove('show')
})
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