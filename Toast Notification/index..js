const buttons =document.querySelectorAll(".buttons .btn");
const notifications = document.querySelector(".notifications");

const toastDetails = {
    timer:5000,
    success: {
        icon:"fa-circle-check",
        text:"Success : This is a scccess toast."
    },
    error: {
        icon:"fa-circle-xmark",
        text:"Error : This is a error toast."
    },
    warning: {
        icon:"fa-triangle-exclamation",
        text:"Warning : This is a warning toast."
    },
    info: {
        icon:"fa-circle-info",
        text:"Info : This is a info toast."
    }
}
const removeToast = (toast)=>{
toast.classList.add("hide");
setTimeout(()=>{toast.remove(),500})
}

const createToast =(id)=>{
const { icon, text } = toastDetails[id];
console.log(id)
const toast = document.createElement("li");
toast.className =`toast ${id}`;
toast.innerHTML =`<div class="column">
                <i id="icon1" class="fa-solid ${icon}"></i>
                <span>${text}</span>
            </div>
            <i class="fa-solid fa-xmark" onclick ="removeToast(this.parentElement)"></i>`
    notifications.appendChild(toast);
    setTimeout(() =>removeToast(toast),toastDetails.timer)
}


buttons.forEach((btn)=>{
    btn.addEventListener("click",() => createToast(btn.id));
})