const Img = document.querySelector("#recent-image");

Img.addEventListener('mouseout', ()=> {
     Img.style.translateY = '900px';
     Img.style.transition = '10s';
     console.log("working")
});