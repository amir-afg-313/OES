
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
const features = [

    {
        number: "",
        title: "په انلاین ډول د ازمویني لپاره غوره پروسه",

        description:"موږ وکولای سووه چی په انلاین ډول د ازمویني یو داسي سیسټم وړاندي کړو تر څو د غوښتنکو هر ډول غوښتني پور کړای    سي دا سیسټم د انلاین ازمویني لپاره یو ډیره شفافه ساده پروسه وړاندي کړه چيری چي مشتری کولای سي په خوندي ډول ازمویني کنټرول کړ",
        

        image: "/img/process_of_online_exam_software.webp",

        textAnimation: "hidden-left",

        imageAnimation: "hidden-right"
    },


    {
        number: "01",

        title: "په یو وخت د همهاله ازموینو ورکونکو ته د خدماتو وړاندی کول",

        description:
        "هممهاله ازموینو پر مهال د ډېرو زیاتو ګډونوالو اړتیاوې په اسانه توګه پوره کېږي، چې دا کار هم ازموینه ورکوونکو  او هم مدیرانو ته یو خوندور او اغېزمن تجربه برابروي. زموږ د آنلاین ازموینو سیسټم داسې  طرحه شوی چې په یو وخت کې د ډېرو زیاتو ازموینو د ترسره کېدو وړتیا ولري.ي...",

        image: "/img/multiple.jpeg",

        textAnimation: "hidden-left",

        imageAnimation: "hidden-right"
    },


    {
        number: "02",

        title: "مسلکی او زیرکه څارنه",

        description:
        "  د انلاین ازموینو پر مهال د AI پر بنسټ د نقل مخنیوي ټکنالوژۍ په مرسته هر  ډول مشکوک فعالیتونه وڅارئ او وپیژنئ، او د نامناسب چلند په موندلو سره پرې جدي اقدام  وکړئ. د ازموینه ورکوونکو د ژوندۍ ویډیو خپرونې او ژوندۍ خبرې (Live Chat) اختیار هم شتون لري. همدارنګه، د ازموینې پر مهال په ټاکلو وقفو کې د ګډونوالو  عکسونه په اتومات ډول اخیستل کېدای شي...",

        image: "/img/protact.jpeg",

        textAnimation: "hidden-left",

        imageAnimation: "hidden-right"
    },


    {
        number: "03",

        title: "پرمختللی د ازموینې بڼې جوړولو سیسټم",

        description:
        "د خپلو ارزونو او ازموینو لپاره پرمختللی موضوع جوړوونکی وکاروئ. د ازموینې پلیټفارم بڼه او احساس د خپلې ادارې له نښې (برانډ) سره برابر کړئ. د ازموینې انٹرفېس داسې ډیزاین کړئ چې د طبي، نرسانو، حقوقي، بانکي ازموینو سیسټمونو او نورو سره سمون ولري ..",

        image: "/img/theme.jpeg",

        textAnimation: "hidden-left",

        imageAnimation: "hidden-right"
    }

];

const featuresContainer =
document.getElementById("featuresContainer");

features.forEach((feature, index) => {

    const featureHTML = `${index % 2 === 0 ? `

            <div class="step-text-box ${feature.textAnimation}">

                ${feature.number ? `<p class="step-number">${feature.number}</p>` : ""
                }

                <h3 class="theetery-h">
                    ${feature.title}
                </h3>

                <p class="step-discription">
                    ${feature.description}
                </p>

            </div>

            <div class="step-img-box ${feature.imageAnimation}">

                <img
                    class="step-img"
                    src="${feature.image}"
                    alt="feature"
                >

            </div>

        ` : `

            <div class="step-img-box ${feature.imageAnimation}">

                <img
                    class="step-img"
                    src="${feature.image}"
                    alt="feature"
                >

            </div>

            <div class="step-text-box ${feature.textAnimation}">

                <p class="step-number">
                    ${feature.number}
                </p>

                <h3 class="theetery-h">
                    ${feature.title}
                </h3>

                <p class="step-discription">
                    ${feature.description}
                </p>

            </div>

        `}
    `;

    featuresContainer.innerHTML += featureHTML;

});
// scroll animation
const hiddenElements = document.querySelectorAll(
    ".hidden-left, .hidden-right"
);


const detector = new IntersectionObserver((items) => {

    items.forEach((item) => {

        if(item.isIntersecting){

            item.target.classList.add("show");
        }

    });

});


hiddenElements.forEach((el) => detector.observe(el));

//Card section
