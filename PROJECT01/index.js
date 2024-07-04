const startBtn = document.getElementById("startbtn");
const endBtn = document.getElementById("endBtn");
const prevNext = document.querySelectorAll(".prevNext");
const numbers= document.querySelectorAll(".link");

let currentStep =0;

const updateBtn = () =>{
    if(currentStep===4){
        endBtn.disabled =true;
        endBtn.style.opacity = 0.4;
        prevNext[1].disabled =true;
        prevNext[1].style.opacity =0.4;
        prevNext[0].style.opacity=1;
        startBtn.style.opacity =1;
    }else if (currentStep === 0){
        endBtn.style.opacity = 1;
        prevNext[1].style.opacity =1;
        startBtn.disabled =true;
        prevNext[0].disabled =true;
        prevNext[0].style.opacity=0.4;
        startBtn.style.opacity =0.4;
    }else{
        endBtn.style.opacity = 1;
        prevNext[1].style.opacity =1;
        endBtn.disabled =false;
        prevNext[1].disabled =false;
        startBtn.disabled =false;
        prevNext[0].disabled =false;
        prevNext[0].style.opacity=1;
        startBtn.style.opacity =1;
    }
}

numbers.forEach((number,numIndex) =>{
    number.addEventListener("click",(e) =>{
        e.preventDefault();
        currentStep = numIndex;
        document.querySelector(".active").classList.remove("active");
        number.classList.add("active");
        updateBtn();
    })
})

prevNext.forEach((button =>{
    button.addEventListener("click",(e) =>{
        currentStep+=e.target.id ==="next" ? 1 : -1;
        numbers.forEach((number,numIndex) =>{
            number.classList.toggle("active",numIndex === currentStep);
            updateBtn();
        })
        
    })
}))

startBtn.addEventListener("click", () =>{
    document.querySelector(".active").classList.remove("active");
    numbers[0].classList.add("active");
    currentStep = 0;
    updateBtn();
  
});
endBtn.addEventListener("click", () =>{
    document.querySelector(".active").classList.remove("active");
    numbers[4].classList.add("active");
    currentStep = 4;
    updateBtn();
  
});
