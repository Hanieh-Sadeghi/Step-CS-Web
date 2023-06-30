var slideIndex = 0;
        ShowSlides();
    function ShowSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");

            for(i=0;i< slides.length;i++)
            {
                slides[i].style.display="none";
            }

            slideIndex++;
            if(slideIndex > slides.length)
            {
                slideIndex = 1;
            }

            for(i=0;i<dots.length;i++)
            {
                dots[i].className = dots[i].className.replace(" active","");
            }

            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex -1].className +=" active";

            setTimeout(ShowSlides,2000);
}