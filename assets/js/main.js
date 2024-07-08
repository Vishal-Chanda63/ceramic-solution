 /* ================================== BACK TO TOP ============================================== */
 //Get the button
 var mybutton = document.getElementById("myBtn");
 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function () {
     scrollFunction();
 };

 function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         mybutton.style.display = "block";
     } else {
         mybutton.style.display = "none";
     }
 }
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 }




 /* ============== NAVBAR JS ============= */

 $(".hamburger-menu").on("click", function () {
     $(".hamburger-menu").toggleClass("animate");
     $("#overlay").toggleClass("overlay-active");
     $(".main-top-section").toggleClass("mobile-view");
     $("body").toggleClass("fix-screen-mobile");
     $(".hero-background").toggleClass("overflow-initial");
 });
 $(document).ready(function () {
     const Section1 = document.querySelector("#mint");
     const Section2 = document.querySelector("#about");
     const Section3 = document.querySelector("#showcase");
     const Section4 = document.querySelector("#mission");
     const Section5 = document.querySelector("#roadmap");
     const Section6 = document.querySelector("#Team");
     // const mainMenu = document.querySelector(" #main-menu ");

     //  SECTION-1 SCROLL
     $(".section-1").click(function () {
         // mainMenu.click();
         $(".hamburger-menu").removeClass("animate");
         $("#overlay").removeClass("overlay-active");
         $(".main-top-section").removeClass("mobile-view");
         $("body").removeClass("fix-screen-mobile");
         $(".main-top-section").removeClass("h-100vh");
         Section1.scrollIntoView();
     });

     // SECTION-2 SCROLL
     $(".section-2").click(function () {
         // mainMenu.click();
         $(".hamburger-menu").removeClass("animate");
         $("#overlay").removeClass("overlay-active");
         $(".main-top-section").removeClass("mobile-view");
         $("body").removeClass("fix-screen-mobile");
         $(".main-top-section").removeClass("h-100vh");
         Section2.scrollIntoView();
     });

     // SECTION-3 SCROLL
     $(".section-3").click(function () {
         // mainMenu.click();
         $(".hamburger-menu").removeClass("animate");
         $("#overlay").removeClass("overlay-active");
         $(".main-top-section").removeClass("mobile-view");
         $("body").removeClass("fix-screen-mobile");
         $(".main-top-section").removeClass("h-100vh");
         Section3.scrollIntoView();
     });

     // SECTION-4 SCROLL
     $(".section-4").click(function () {
         // mainMenu.click();
         $(".hamburger-menu").removeClass("animate");
         $("#overlay").removeClass("overlay-active");
         $(".main-top-section").removeClass("mobile-view");
         $("body").removeClass("fix-screen-mobile");
         $(".main-top-section").removeClass("h-100vh");
         Section4.scrollIntoView();
     });

     // SECTION-5 SCROLL
     $(".section-5").click(function () {
         // mainMenu.click();
         $(".hamburger-menu").removeClass("animate");
         $("#overlay").removeClass("overlay-active");
         $(".main-top-section").removeClass("mobile-view");
         $("body").removeClass("fix-screen-mobile");
         $(".main-top-section").removeClass("h-100vh");
         Section5.scrollIntoView();
     });

     // SECTION-6 SCROLL
     $(".section-6").click(function () {
         // mainMenu.click();
         $(".hamburger-menu").removeClass("animate");
         $("#overlay").removeClass("overlay-active");
         $(".main-top-section").removeClass("mobile-view");
         $("body").removeClass("fix-screen-mobile");
         $(".main-top-section").removeClass("h-100vh");
         Section6.scrollIntoView();
     });
     $(".hamburger-menu").click(function () {
         $(".main-top-section").addClass("h-100vh");
     });
 });



 /* ============== SLIDER JS ============= */

 $('.slider_responsive').slick({
     dots: false,
     arrows: false,
     infinite: true,
     autoplay: true,
     autoplaySpeed: 0,
     speed: 4000,
     cssEase: "linear",
     slidesToShow: 3.7,
     slidesToScroll: 1,
     responsive: [{
             breakpoint: 1200,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 autoplaySpeed: 0,
                 speed: 6000,
                 infinite: true,
                 dots: false
             }
         }, {
             breakpoint: 992,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1,
                 autoplaySpeed: 0,
                 speed: 6000,
                 infinite: true,
                 dots: false
             }
         },

         {
             breakpoint: 675,
             settings: {
                 slidesToShow: 1.4,
                 slidesToScroll: 1

             }
         },
         {
             breakpoint: 450,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1

             }
         },
     ]
 });






 $('.responsive').slick({
     dots: false,
     infinite: true,
     autoplay: true,
     autoplaySpeed: 3500,
     arrows: false,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 1,
     responsive: [{
             breakpoint: 992,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1,
                 infinite: true,
                 dots: false,
                 arrows: false,
             }
         },
         {
             breakpoint: 767,
             settings: {
                 slidesToShow: 1,
             }
         },
         {
             breakpoint: 576,
             settings: {
                 slidesToShow: 1,
             }
         },

     ]
 });