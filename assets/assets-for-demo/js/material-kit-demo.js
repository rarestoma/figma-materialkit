/*! =========================================================
 *
 * Material Kit PRO Plugins Initialisation Examples - v2.0.0
 *
 * =========================================================
 *
 * Product Page: https://www.creative-tim.com/product/material-kit-pro
 * Available with purchase of license from http://www.creative-tim.com/product/material-kit-pro
 * Copyright 2017 Creative Tim (https://www.creative-tim.com)
 * License Creative Tim (https://www.creative-tim.com/license)
 *
 * ========================================================= */

 materialKitDemo = {

     checkScrollForParallax:function(){
         oVal = ($(window).scrollTop() / 3);
         big_image.css({
             'transform':'translate3d(0,' + oVal +'px,0)',
             '-webkit-transform':'translate3d(0,' + oVal +'px,0)',
             '-ms-transform':'translate3d(0,' + oVal +'px,0)',
             '-o-transform':'translate3d(0,' + oVal +'px,0)'
         });
     },

     presentationAnimations: function(){
         $(function() {

           var $window           = $(window),
               isTouch           = Modernizr.touch;

           if (isTouch) { $('.add-animation').addClass('animated'); }

           $window.on('scroll', revealAnimation);

           function revealAnimation() {
             // Showed...
             $(".add-animation:not(.animated)").each(function () {
               var $this     = $(this),
                   offsetTop = $this.offset().top,
                   scrolled = $window.scrollTop(),
                   win_height_padded = $window.height();
               if (scrolled + win_height_padded > offsetTop) {
                   $this.addClass('animated');
               }
             });
             // Hidden...
            $(".add-animation.animated").each(function (index) {
               var $this     = $(this),
                   offsetTop = $this.offset().top;
                   scrolled = $window.scrollTop(),
                   windowHeight = $window.height();

                   win_height_padded = windowHeight * 0.8;
               if (scrolled + win_height_padded < offsetTop) {
                 $(this).removeClass('animated')
               }
             });
           }

           revealAnimation();
         });

     }
};
