  var header = document.getElementsByTagName("header")[0];

  window.onload = function (){
    window.addEventListener("scroll", effectsHeader);
 }
 //Header Effects
 function effectsHeader() {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    var timeOutId = null;

    if (y == 0) {
        header.style.boxShadow = "";
        header.style.transition = "";
        header.style.backgroundColor = "transparent";
        clearTimeout(timeOutId)
    }

    if (y) {

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

    }
    
}