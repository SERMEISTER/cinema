window.onscroll = function () {
    var num = window.pageYOffset;

    //console.log(num);
    var header = document.getElementsByClassName('header');
    header = header[0];
    //console.log(header);
    var atribute;

    if (num == 0) {
        atribute = "header";
        header.setAttribute("class", atribute);
    }
    else {
        atribute = "header scrolled";
        header.setAttribute("class", atribute);
    }
    //console.log(atribute);
}


function rightSlide(){
    let slide = document.getElementById("id-slider-wrapper");
    document.getElementsByClassName("slider-button-left")[0].style.display = "block";
    if(parseInt(slide.style.marginLeft) >= -2136)
    {
        slide.style.marginLeft = parseInt(slide.style.marginLeft) -712 + "px";

    }
    if ( parseInt(slide.style.marginLeft) <= -2137)
    {
        let workWidth = document.documentElement.clientWidth/parseInt(slide.style.marginLeft);          
        //console.log(workWidth);
        let tmp = (parseInt(slide.style.marginLeft))+(workWidth*parseInt(slide.style.marginLeft));
        while(tmp > -2136)
        {
            tmp = tmp - 712;
            document.getElementsByClassName("slider-button-right")[0].style.display = "none";
        }
        
        if(workWidth>(-0.5))
        {
            tmp = tmp - 712;
        }
        // console.log(tmp);
        slide.style.marginLeft=tmp -30 + "px";
    }
}
function leftSlide(){
    var slide = document.getElementById("id-slider-wrapper");
    document.getElementsByClassName("slider-button-right")[0].style.display = "block";
    if(parseInt(slide.style.marginLeft) != 0)
    {
        slide.style.marginLeft = parseInt(slide.style.marginLeft) +712 + "px";

    }
    if(parseInt(slide.style.marginLeft) >= 0)
    {
        slide.style.marginLeft = 0 + "px";
        document.getElementsByClassName("slider-button-left")[0].style.display = "none";
    }
}

$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".dropdown-menu li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
});