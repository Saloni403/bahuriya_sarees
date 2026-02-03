    const input = document.getElementById("searchInput");
    const clearBtn = document.querySelector(".clear-btn");

    clearBtn.addEventListener("click", () => {
        input.value = "";
        input.focus(); // optional: keeps cursor in input
    });

    








     const dropdowns = document.querySelectorAll('.maindropdown');
    const sortoptions = document.querySelectorAll(".sort-option")

    dropdowns.forEach(dropdown=>{
       dropdown.addEventListener('click', () => {
        const dropdownList = dropdown.closest('.maindropdownlist');
        dropdownList.classList.toggle('active');
    });
    })
    

   sortoptions.forEach(option => {
    option.addEventListener('click', () => {

        const parentList = option.closest('.maindropdownlist');
        parentList.querySelectorAll('.sort-option')
            .forEach(el => el.classList.remove('active'));

        option.classList.add('active');
    });
});