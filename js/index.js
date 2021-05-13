  var header = document.getElementsByTagName("header")[0];
  var sectionNayami = document.getElementById('section-nayami');

  window.onload = function (){
    window.addEventListener("scroll", effectsHeader);
    window.addEventListener("scroll", animationScroll);
    animationScroll();
 }

 //Header Effects
 function effectsHeader() {
    var timeOutId = null;
    var heigthHeader = header.offsetHeight;

    var distance = sectionNayami.getBoundingClientRect().top;

    if (distance <= heigthHeader) {
         header.classList.add("show-header");

        if (header.style.transition != "") {
            return;
        }

        var heigthHeader = header.offsetHeight;
        header.style.transform = "translateY(-" + heigthHeader + "px)";
        header.style.backgroundColor = "#b5cedf";

        timeOutId = setTimeout(() => {
            header.style.boxShadow = "0 1px 16px rgba(0, 0, 0, 0.215)";
            header.style.transform = "translateY(0)";
            header.style.transition = "transform ease 600ms";
        }, 100);

    }else if(distance > heigthHeader) {
        header.style.position = "none";
        header.style.top = "unset";
        header.style.transition = "";
        header.style.boxShadow = "";
        header.style.backgroundColor = "transparent";
        header.classList.remove("show-header");
        clearTimeout(timeOutId)
    }
    
}


$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        loop: true,
        dots: false,
        margin: 0,
        center: true,
        responsive: {
            320: {
                items: 1
            },
            768: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    })


    var owl = $('.owl-carousel');
    owl.owlCarousel();

    // Go to the next item
    $('#btn-next-slide').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('#btn-prev-slide').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    })
});



//This is only for DEV mode
//335px
//768px
// function getRelative(v) {
//     var r = (v * 100) / 768;
//     return r + "vw";
// }

// function getPX(v) {
//     var r = (v * 768) / 100;
//     return r + "px";
// }


function animationScroll(){
    var animatedElements = document.getElementsByClassName('animation');

    var height = window.innerHeight / 1.3;

    for(let i = 0; i < animatedElements.length; i++){

        var distance = animatedElements[i].getBoundingClientRect().top;
    
        animatedElements[i].classList.add("animation_hide_down");
    
        if(distance <= height){
            animatedElements[i].classList.add("animation_show_up");
        }
    }

}