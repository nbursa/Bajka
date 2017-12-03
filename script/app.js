"use strict";
window.addEventListener("load", function() {
    var e = document.getElementById("loader_screen");
    document.body.removeChild(e)
  }), $("#m-size").val($(".item_size").text()),
  function(e) {
    function a() {
      if ($("#js-parallax-window").length > 0) {
        var e = $("#js-parallax-background"),
          a = $("#js-parallax-window"),
          t = $(a).offset().top,
          n = $(window).scrollTop(),
          i = t - n,
          o = ($(e).offset().top, window.innerHeight, .25);
        e.css("top", -i * o + "px")
      }
    }! function(e) {
      e.mark = {
        jump: function(a) {
          var t = {
            selector: ".scroll-on-page-link"
          };
          return "string" == typeof a && (t.selector = a), a = e.extend(t, a), e(a.selector).click(function(a) {
            var t = e(this),
              n = t.attr("href"),
              i = e(n).offset().top;
            e("html,body").animate({
              scrollTop: i
            }, 1e3, "swing"), a.preventDefault()
          })
        }
      }
    }(e), e(function() {
        e.mark.jump()
      }),
      $(document).ready(function() {
        $("nav").hide(),
        $(".meni").on("click", function() {
          $("nav").slideToggle(),
          $(this).toggleClass("active")
        }),
        $(".meni").on("click", "li", function() {
          $(this).parent("#nav-menu").slideUp(400),
          $(".nav-link").click(),
          $(".meni").toggleClass("active")
        }),
          // $(".meni").on("click", function() {
          //   $("nav").slideToggle(),
          //   $(this).toggleClass("active")
          // }),
          // $(".meni").on("click", "li", function() {
          //   $("nav").slideToggle(),
          //   $(".nav-link").click(),
          //   $(".meni").toggleClass("active")
          // }),
          // $("nav").hide(),
          // $(".meni").hover(function() {
          //   $(this).children("nav").slideDown(400)
          // }, function() {
          //   $(this).children("nav").slideUp(400)
          // }),
          $(".scroll-on-page-link").click(function() {
            $(this).children("nav-menu").slideUp(400)
          })
      }),
      $(document).ready(function() {
        // $(".korpa").hide(), $(".korpa-nav").hover(function() {
        //   $(this).children(".korpa").slideDown(400)
        // }, function() {
        //   $(this).children(".korpa").slideUp(400)
        // })
        $(".korpa").hide(),
          $(".korpa-nav").on("click", function() {
            $(".korpa").slideToggle(),
              $(this).toggleClass("active")
          })
      }),
      $(document).ready(function() {
        $("#js-parallax-window").length && a()
      }), $(window).scroll(function() {
        $("#js-parallax-window").length && a()
      }), $(function() {
        $("#modal-1").on("change", function() {
          $(this).is(":checked") ? $("body").addClass("modal-open") : $("body").removeClass("modal-open")
        }), $(".modal-fade-screen, .modal-close").on("click", function() {
          $(".modal-state:checked").prop("checked", !1).change(), $("#video-wrapper iframe").attr("src", $("#video-wrapper iframe").attr("src")), $("#video-wrapper-1 iframe").attr("src", $("#video-wrapper-1 iframe").attr("src"))
        }), $(".modal-inner").on("click", function() {})
      }), $(window).load(function() {
        $(".grid").masonry({
          itemSelector: ".grid-item",
          columnWidth: ".grid-sizer",
          isFitWidth: !0,
          isResizable: !0,
          gutterWidth: 0
        })
      }), lightbox.option({
        resizeDuration: 200,
        wrapAround: !0,
        fitImagesInViewport: !0,
        alwaysShowNavOnTouchDevices: !0
      }), $(function() {
        var e = $("#ajax-contact"),
          a = $("#form-messages");
        $(e).submit(function(t) {
          t.preventDefault();
          var n = $(e).serialize();
          $.ajax({
            type: "POST",
            url: $(e).attr("action"),
            data: n
          }).done(function(e) {
            $(a).removeClass("error"), $(a).addClass("success"), $(a).text(e), $("#ime").val(""), $("#mail").val(""), $("#poruka").val("")
          }).fail(function(e) {
            $(a).removeClass("success"), $(a).addClass("error"), $(a).text("" !== e.responseText ? e.responseText : "Ups! Došlo je do greške i Vaša poruka nije poslata.")
          })
        })
      }), $(function() {
        var e = $("#ajax-poruci"),
          a = $("#form-izvestaj");
        $(e).submit(function(t) {
          t.preventDefault(), $("#cart_item_name").val($("#item_name").text()), $("#cart_item_quantity").val($("#quantity").text()), $("#cart_item_tax").val($("#tax").text()), $("#cart_item_shipping").val($("#shipping").text()), $("#cart_item_grandtotal").val($("#grandtotal").text()), $("#cart_item_size").val($("#m-size").html());
          var n = $(e).serialize();
          $.ajax({
            type: "POST",
            url: $(e).attr("action"),
            data: n
          }).done(function(e) {
            $(a).removeClass("error"), $(a).addClass("success"), $(a).text(e), $("#first_name").val(""), $("#last_name").val(""), $("#email-address").val(""), $("#telephone").val(""), $("#company").val(""), $("#s-address").val(""), $("#city").val(""), $("#zip").val(""), $("#napomena").val(""), $("#cart_item_name").val(""), $("#cart_item_quantity").val(""), $("#cart_item_size").val(""), $("#cart_item_tax").val(""), $("#cart_item_shipping").val(""), $("#cart_item_grandtotal").val(""), $("#form-izvestaj").val("")
          }).fail(function(e) {
            $(a).removeClass("success"), $(a).addClass("error"), $(a).text("" !== e.responseText ? e.responseText : "Ups! Došlo je do greške i Vaša poruka nije poslata.")
          })
        })
      }), $(function() {
        var e = $("#nenad-contact"),
          a = $("#nenad-messages");
        $(e).submit(function(t) {
          t.preventDefault();
          var n = $(e).serialize();
          $.ajax({
            type: "POST",
            url: $(e).attr("action"),
            data: n
          }).done(function(e) {
            $(a).removeClass("error"), $(a).addClass("success"), $(a).text(e), $("#ime").val(""), $("#mail").val(""), $("#poruka").val("")
          }).fail(function(e) {
            $(a).removeClass("success"), $(a).addClass("error"), $(a).text("" !== e.responseText ? e.responseText : "Ups! Došlo je do greške i Vaša poruka nije poslata.")
          })
        })
      }), simpleCart({
        cartStyle: "div",
        cartColumns: [{
          attr: "name",
          label: !1
        }, {
          attr: "price",
          label: !1,
          view: "currency"
        }, {
          view: "decrement",
          label: !1,
          text: "-"
        }, {
          attr: "quantity",
          label: !1
        }, {
          view: "increment",
          label: !1,
          text: "+"
        }]
      }), simpleCart.currency({
        code: "RSD",
        name: "Dinar",
        symbol: "rsd",
        delimiter: " ",
        decimal: ",",
        after: !0,
        accuracy: 2
      }), $(document).ready(function() {
        $("#co-form").hide(), $("#tax").hide(), $("#shipping").hide(), simpleCart.item - quantity == 0 && $(".simpleCart_empty").hide(), $(".pouzece").click(function() {
          $("#co-form").show()
        })
      }), $(function() {
        $(".item_add").click(function(e) {
          e.preventDefault(), $(".korpa-nav").addClass("animated flash").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
            $(".korpa-nav").removeClass("animated flash")
          })
        })
      }),
      function(e, a, t) {
        var n, i = e.getElementsByTagName(a)[0];
        e.getElementById(t) || (n = e.createElement(a), n.id = t, n.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5", i.parentNode.insertBefore(n, i))
      }(document, "script", "facebook-jssdk")
  }(jQuery);
//# sourceMappingURL=app.js.map
