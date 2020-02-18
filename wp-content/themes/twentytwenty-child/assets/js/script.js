

// loader function
    var counter_true = true;
    $(window).on('load', function () {
        $('.loader').fadeOut();
        $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: 200,
          })
    });
    $(window).on('scroll', function () {
    
        windowScrollTop = $(this).scrollTop();
        if (windowScrollTop >= 200) {
            $('.downtoup').fadeIn('slow');
        }
        else {
            $('.downtoup').fadeOut('slow');
        }
        if(windowScrollTop >= $('#our-milestone-sub').outerHeight()+ $('#our-milestone-sub').outerHeight() )
        {
          //Counter
          if(counter_true)
          {
              $('.counter').each(function () {
                  $(this).prop('Counter', 0).animate({
                      Counter: $(this).text()
                  },
                      {
                          duration: 2000,
                          easing: 'swing',
                          step: function (now) {
                              $(this).text(Math.ceil(now));
                          }
                      });
              });
              counter_true = false
          }
    
        }
    });
    $(document).ready(function () {
    
        /* $('.button').on('click',function(e){
            e.preventDefault();
            msg = "";
            error = false;
            $('#form input').each(function(i,v){
                if($(this).val() == "")
                {
                    error = true;
                    msg += $(this).data('error')+'\n';
                }
            })
            if(error)
            {
                alert(msg);
            }else{
                $('#form').submit();
    
            }
        });
     */
        // navbar sticky function
        $(document).scroll(function () {
            var $nav = $(".navbar");
    
            $nav.toggleClass('sticky', $(this).scrollTop() > $nav.height());
        });
    
        //scroll to up button
    
        $(".downtoup, .read-more > a").on('click', function (e) {
            e.preventDefault();
            if ($(this).attr('href') !== "") {
                var href = $(this).attr('href');
                $('html, body').animate({
                    scrollTop: $(href).offset().top
                }, 800);
            }
           
        });
        // Sliders
    
        if ($("#services, #spa-slider, #pool-slider").length) {
            $("#services, #spa-slider, #pool-slider").slick({
                arrows: false,
                dots: true,
                autoplay: true,
                slidesToShow: 3,
                slidesToScroll: 3
            });
        };
    
        if ($(".slider, .text-slide").length) {
            $(".slider, .text-slide").slick({
                dots: true,
                infinite: true,
                speed: 500,
                autoplay: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            });
        };
    
        if ($("#restslider").length) {
            $("#restslider").slick({
                dots: true,
                infinite: true,
                speed: 500,
                autoplay: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false
            });
        };

        //FAQs
        if ($("#faq").length) {
    
            $("#faq").accordion
                ({
                    collapsible: true
                });
        };

        //Tabs
        if ($("#tabs").length) {
            $("#tabs, #tabs2, #tabs3").tabs({
                collapsible: true
            });
        };
    
        // Masonry
        if ($(".grid").length) {
            $(".grid").masonry({
                itemSelector: '.grid-item',
                columnWidth: 200
            });
        };
    
        //LightBox
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'fitImagesInViewport': true,
            'fadeduration': 600,
    
            'alwaysShowNavOnTouchDevices': false,
            'imageFadeDuration': 600
        });
    
        $(".datepicker").datepicker({minDate:'today'})
    
        
        //reservation-form Validation
        if($("#form") .validate)
           $("#form").validate({
            rules:{
                    checkin:"required",
                    checkout:{
                         required:true
                    },
                    adults:{
                         required:true,
                         number:true
                    },
                   childrens:{
                         required:true,
                         number:true
                    }
                },
            messages:{
                 checkin:{
                      required: "CheckIn Date required",
                 },
                checkout:{
                      required:"CheckOut Date required",
                 },
                 adults:{
                      required:"Enter no. Of Adults",
                      number:"Numbers Only"
                 },
                 childrens:{
                      required:"Enter no. Of childrens",
                      number:"Numbers Only"
                 }
            }
    });
    
        //contact-us form Validation
        if($("#submit-form") .validate)
           $("#submit-form").validate({
            rules:{
                    fname:"required",
                    phonenumber:{
                         required:true,
                         number:true,
                    },
                    email:{
                         required:true,
                         email:true
                    },
                    msg:{
                         required:true,
                    }
                },
            messages:{
                 fname:{
                      required:" Name is required",
                 },
                 phonenumber:{
                      required:"Phone number is required",
                      number:"Phone number required only number",
                 },
                 email:{
                      required:"Email is required",
                      email:"Email required @ "
                 },
                 msg:{
                      required:"Message is required",
                 }
            }
    });
    

        //Social Icons Share
        $("body").flati({
            theme: "nobg",
            triggerPosition: "left",
            dockPosition: "right",
        });
    
    });
    //FOR ANIMATED TEXT
    const element = document.querySelector('.bounce')
    if (element != null) {
        element.classList.add('animated', 'bounceIn')
    }
    