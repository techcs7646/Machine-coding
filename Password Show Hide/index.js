const toggle = document.querySelector(".toggle");

const input =document.querySelector("input");
console.log(input)
toggle.addEventListener("click", () =>{
    // console.log("clicked");
    if (input.type === "password") {
        input.type = "text";
        toggle.classList.replace('fa-eye-slash', 'fa-eye');
        
    }else{
        input.type = "password";
        toggle.classList.replace('fa-eye', 'fa-eye-slash');
    }

})
