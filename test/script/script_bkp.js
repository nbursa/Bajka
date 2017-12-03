(function($) {
  "use strict";
  $(window).load(function() {
    $(".loader").delay(100).fadeOut();
    $(".animationload").delay(300).fadeOut("slow");
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  $('#back-to-top').click(function() {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  $('#back-to-top').tooltip('show');
  $(".menu-wrapper").affix({
    offset: {
      top: 100,
      bottom: function() {
        return (this.bottom = $('.copyright').outerHeight(true))
      }
    }
  });
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
      $(".navbar").addClass("thin");
    } else {
      $(".navbar").removeClass("thin");
    }
  });
  $(window).scroll(function() {
    $('.fadein').each(function(i) {
      var object_bottom = $(this).offset().top + ($(this).outerHeight() * (1 / 3));
      var window_bottom = $(window).scrollTop() + $(window).height();
      if (window_bottom > object_bottom) {
        $(this).animate({
          'opacity': '1'
        }, 500);
      }
    });
  });
  $(document).ready(function() {
    $('.navbar-toggle').click(function() {
      $('#nav-icon').toggleClass("open");
    });
  });
  $(document).ready(function() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("year").innerHTML = n;
  });
  $(document).ready(function() {
    var a = $("#about-page a, #company-registration a, #debt-collection a, #litigation a, #spec-offer a, #legislature a, #real-estate a");
    var b = $("#pocetna a");
    var c = $("#about-page a.btn, #company-registration a.btn, #debt-collection a.btn, #litigation a.btn, #spec-offer a.btn, #legislature a.btn, #real-estate a.btn");
    var d = $("#pocetna a.btn");
    $(a).each(function() {
      var title = $(this).attr('title');
      var url = $(this).attr('href');
      $(this).attr("data-toggle", "tooltip").attr("data-placement", "top").attr('title', "Link to page: " + url);
    });
    $(b).each(function() {
      var title = $(this).attr('title');
      var url = $(this).attr('href');
      $(this).attr("data-toggle", "tooltip").attr("data-placement", "top").attr('title', "Link do strane: " + url);
    });
    $(c).each(function() {
      var title = $(this).attr('title');
      var url = $(this).attr('href');
      $(this).attr("data-toggle", "").attr("data-placement", "").attr('title', "");
    });
    $(d).each(function() {
      var title = $(this).attr('title');
      var url = $(this).attr('href');
      $(this).attr("data-toggle", "").attr("data-placement", "").attr('title', "");
    });
  });

  $(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });
  $(function() {
    $("#contactForm").on("submit", function(event) {
      event.preventDefault();
      if (event.preventDefault()) {
        formError();
        submitMSG(false, "Da li ste ispravno popunili formular?");
      } else {
        submitForm();
      }
    });
    function submitForm() {
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();
      $.ajax({
        type: "POST",
        url: "mail_s.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success: function(text) {
          if (text == "success") {
            formSuccess();
          } else {
            formError();
            submitMSG(false, text);
          }
        }
      });
    };
    function formSuccess(en) {
      $("#contactForm")[0].reset();
      submitMSG(true, "Poruka je poslata!")
    };
    function formError() {
      $("#contactForm").removeClass().addClass('animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
      });
    };
    function submitMSG(valid, msg) {
      if (valid) {
        var msgClasses = "h3 text-center pulse animated text-success";
      } else {
        var msgClasses = "h3 text-center pulse animated text-danger";
      }
      $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    };
  });
  $(function() {
    $("#contactForm-En").on("submit", function(event) {
      event.preventDefault();
      if (event.preventDefault()) {
        formError();
        submitMSG(false, "Did you fill in the form properly?");
      } else {
        event.preventDefault();
        submitForm();
      }
    });
    function submitForm() {
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success: function(text) {
          if (text == "success") {
            formSuccess();
          } else {
            formError();
            submitMSG(false, text);
          }
        }
      });
    };
    function formSuccess(en) {
      $("#contactForm-En")[0].reset();
      submitMSG(true, "Message Submitted!")
    };
    function formError() {
      $("#contactForm-En").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
      });
    };
    function submitMSG(valid, msg) {
      if (valid) {
        var msgClasses = "h3 text-center pulse animated text-success";
      } else {
        var msgClasses = "h3 text-center pulse animated text-danger";
      }
      $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    };
  });
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='icon ion-ios-arrow-back'></i>", "<i class='icon ion-ios-arrow-forward'></i>"],
    center: true,
    items: 4,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
  $(document).ready(function() {
    lightbox.option({
      'resizeDuration': 400,
      'disableScroling': true,
      'alwaysShowNavOnTouchDevices': true
    });
  });
  var el, ink, d, x, y;
  $(".btn, .nav a, .ripple").click(function(e) {
    el = $(this);
    if (el.find(".ink").length == 0)
      el.prepend("<span class='ink'></span>");
    ink = el.find(".ink");
    ink.removeClass("animate");
    if (!ink.height() && !ink.width()) {
      d = Math.max(el.outerWidth(), el.outerHeight());
      ink.css({
        height: d,
        width: d
      });
    }
    x = e.pageX - el.offset().left - ink.width() / 2;
    y = e.pageY - el.offset().top - ink.height() / 2;
    ink.css({
      top: y + 'px',
      left: x + 'px'
    }).addClass("animate");
  });
})(jQuery);
