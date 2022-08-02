
const Btn1 = document.querySelector("#landingPage1Btn");
const Btn2 = document.querySelector("#jovic-btn");
const Btn3 = document.querySelector("#josue-btn");
const PopUp1 = document.querySelector(".pop-up1")
const PopUp2 = document.querySelector(".pop-up2")
const PopUp3 = document.querySelector(".pop-up3")
const BackBtn = document.querySelector("#back-btn");
const BackBtn2 = document.querySelector("#back-btn2");
const BackBtn3 = document.querySelector("#back-btn3");

Btn1.addEventListener("click", () => {
      PopUp1.classList.toggle('active');
})

Btn2.addEventListener("click", () => {
      PopUp2.classList.toggle('active');

})

Btn3.addEventListener("click", () => {
      PopUp3.classList.toggle('active');

})

BackBtn.addEventListener("click", () => {
      PopUp1.classList.remove('active');
      PopUp2.classList.remove('active');
      
})

BackBtn2.addEventListener("click", () => {
      PopUp2.classList.remove('active');
      
})


BackBtn3.addEventListener("click", () => {
      PopUp3.classList.remove('active');
      
})





// const Img = document.querySelector("#recent-image");

// Img.addEventListener('mouseout', ()=> {
//      Img.style.translateY = '900px';
//      Img.style.transition = '10s';
//      console.log("working")
// });
