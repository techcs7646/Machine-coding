const stars =document.querySelectorAll(".stars i");
// console.log(stars);

stars.forEach((star, index1) =>{
    console.log(star)
    star.addEventListener("click",() =>{
        console.log("clicked")
        console.log(index1);
        stars.forEach((star,index2) =>{
            // console.log(index2)
            index1 >=index2 ? star.classList.add("active") : star.classList.remove("active");
        });

    });
});