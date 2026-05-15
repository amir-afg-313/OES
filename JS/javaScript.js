
let headerel=document.querySelector('.header');
let btnNavEl=document.querySelector('.btn-mobile-nav');


btnNavEl.addEventListener("click",function () {
    headerel.classList.toggle("open-nav");
});



//examCode validation
const examForm = document.getElementById("examForm");
const examCode = document.getElementById("examCode");
const message = document.getElementById("message");


// exam codes
const exams = {
    "math123": "math.html",
    "java456": "java.html",
    "english789": "english.html"
};


// show toast function
function showMessage(text){

    message.textContent = text;

    // show toast
    message.classList.add("show");

    // hide after 3 seconds
    setTimeout(() => {
        message.classList.remove("show");
    }, 3000);
}


examForm.addEventListener("submit", function(e){

    e.preventDefault();

    const userCode = examCode.value.trim();

    if(exams[userCode]){

        // redirect
        window.location.href = exams[userCode];

    } else {

        // show error toast
        showMessage("ناسم کوډ!");
    }

});


//features
const hiddenElements = document.querySelectorAll(
    ".hidden-left, .hidden-right"
);


const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");
        }

    });

});


hiddenElements.forEach((el) => observer.observe(el));
