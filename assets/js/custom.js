// This is Sani's Section
$(document).ready(function(){
  if($('.product-banner').length){
    $('.product-banner').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          });
                  
        }

    // ----------------------------------Product Details--------------------------------------

    $(document).ready(function () {
      var Products = [
        {
          name: "The Criscross - C Table",
          description:
            "C tables are on of the most trending item of all times. We used wood, epoxy and a hint of blue color to come up with the design absolutely for you.",
          regular_price: "Rs.15000",
          sale_price: "Rs.12500",
          imgurl:
            "http://134.122.115.132/Resinairs/assets/images/product-ctable1.png",
          alt: "product-ctable1",
          class: "gow-img-div",
        },
        {
          name: "Dark Forest",
          description:
            "This set of tri legged table comes in pair of two tables. They top is made up with fine resin glue and a wood log placed in between. The table reflects the image of a fine dark forest.",
          regular_price: "Rs.899",
          sale_price: "Rs.799",
          imgurl:
            "http://134.122.115.132/Resinairs/assets/images/product-table2.png",
          alt: "product-table2",
          class: "gow-img-div",
        },
        {
          name: "Sunflowered - Ring",
          description:
            "Rings add to the beauty of any person wearing hand. What is beter thatn a transparent epoxy - resin ring with a hint of nature in it. You can also have them customized.",
          regular_price: "Rs.999",
          sale_price: "Rs.888",
          imgurl:
            "http://134.122.115.132/Resinairs/assets/images/product-ring1.png",
          alt: "product-ring1",
          class: "gow-img-div",
        },
        {
          name: "The Galaxy - Ring",
          description:
            "Rings add to the beauty of any person wearing hand. What is beter thatn a transparent epoxy - resin ring with secrets of galaxies involved. You can also have them customized.",
          regular_price: "Rs.999",
          sale_price: "Rs.888",
          imgurl:
            "http://134.122.115.132/Resinairs/assets/images/product-ring2.png",
          alt: "product-ring2.png",
          class: "gow-img-div",
        },
        {
          name: "Serenity - Wall Hanging",
          description:
            "This wall hanging is one our finest creation created till this day. It is made out of abosulte imagination pebbles infused to give it a look of real world.",
          regular_price: "Rs.12000",
          sale_price: "Rs.11500",
          imgurl:
            "http://134.122.115.132/Resinairs/assets/images/product-frame1.png",
          alt: "product-frame1",
          class: "gow-img-div",
        },
        {
          name: "Waves - Dicing Board",
          description:
            "Kitchen items with hint of oceans in all that your kitchen is lacking. Wooden chopping boar adds to the grace of your kitchen.",
          regular_price: "Rs.2500",
          sale_price: "Rs.2000",
          imgurl:
            "http://134.122.115.132/Resinairs/assets/images/product-board1.png",
          alt: "product-board1",
          class: "gow-img-div",
        },
        {
          name: "Wooden Time - Clock",
          description:
            "Do you want to get yourslef a clock that has a straight out vintage look? We have the eperfect item for you, made out of wood and resin.",
          regular_price: "Rs.8000",
          sale_price: "Rs.5000",
          imgurl:
            "http://134.122.115.132/Resinairs/assets/images/product-clock1.png",
          alt: "product-clock1.png",
          class: "gow-img-div",
        },
        {
          name: "Red Art",
          description:
            "Do you want a coaster that looks perfect with your cup of tea? Well this coaster with wooden chunks is all for you!",
          regular_price: "Rs.999",
          sale_price: "Rs.888",
          imgurl:
          "http://134.122.115.132/Resinairs/assets/images/product-coaster1.png",
          alt: "product-coaster1.png",
          class: "gow-img-div",
        },
        {
          name: "Ocean",
          description:
            "This is a coaster that looks perfect with your cup of tea. A theme of ocean right at your table. This coaster is the perfect pick for you.",
          regular_price: "Rs.999",
          sale_price: "Rs.888",
          imgurl:
            "http://134.122.115.132/Resinairs/assets/images/product-coaster2.png",
          alt: "product-coaster2",
          class: "gow-img-div",
        },
        {
          name: "Sea Shells",
          description:
            "Wear sea shells around your neck. This pendant is specifically designed for you to have that perfect statement look!",
          regular_price: "Rs.759",
          sale_price: "Rs.499",
          imgurl:
            "http://134.122.115.132/Resinairs/assets/images/product-locket1.png",
          alt: "product-locket1.png",
          class: "gow-img-div",
        },
      ];
    
      $.each(Products, function (index, value) {
        if (localStorage.getItem("Products_detail") != null) {
          var cart_btn_disabled = value.cart_btn_disabled === false ? "disabled" : "";
        }
       
        $(".products").append(
          '<div data-id="' +
            (index + 1) +
            '" class="card-' +
            (index + 1) +
            ' card-div"><div class="' +
            value.class +
            ' img-div"><img src=' +
            value.imgurl +
            " alt=" +
            value.alt +
            '></div><div class="text-container"><h2 class="item-name">' +
            value.name +
            '</h2><p class="date"> ' +
            value.description +
            ' </p><div class="pricing-and-cart"><div class="pricing"><p class="previous-price">' +
            value.regular_price +
            '</p><p class="current-price">' +
            value.sale_price +
            '</p></div></div><button class="addto_card" ' +
            cart_btn_disabled +' >Add</button><button class="detail_btn">Detail</button></div>'
        );
      });


      if (localStorage.getItem("Products") != null) {
      var cart_conut = JSON.parse(localStorage.getItem("Products"));
      $(".cart_icon").text(cart_conut.length);
      }

      var savedata = [];
      var cont = 0;
      $(".addto_card").click(function () {
        $(this).prop("disabled", true);
        var cart_btn = true;
        $(".cart_icon").text(++cont);
        var name = $(this)
          .parents(".card-div ")
          .children(".text-container")
          .children(".item-name")
          .text();
        var description = $(this)
          .parents(".card-div")
          .children(".text-container")
          .children(".date")
          .text();
        var sale_price = $(this)
          .parents(".card-div")
          .children(".text-container")
          .children(".pricing-and-cart")
          .children(".pricing")
          .children(".current-price")
          .text();
        var imgurl = $(this)
          .parents(".card-div")
          .children(".img-div")
          .children("img")
          .attr("src");
    
        var getdata = {
          name: name,
          description: description,
          sale_price: sale_price,
          imgurl: imgurl,
          cart_btn_disabled: cart_btn,
        };
        savedata = [...savedata, getdata];
    
        localStorage.setItem("Products", JSON.stringify(savedata));
      });
      if (localStorage.getItem("Products") != null) {
     
      var cart = JSON.parse(localStorage.getItem("Products"));
      if (cart.length > 0) {
        $.each(cart, function (index, value) {
          $(".container_cart tbody").append(
            '<tr><td><div class="product-img"><div class="img-prdct"><img src="' +
              value.imgurl +
              '"></div></div></td><td><p>' +
              value.name +
              '</p></td><td align="right"><span class="amount" id="amount">' +
              value.sale_price +
              "</span></td><td><button class='remove_cart' data-id='" +
              index +
              "'>x</button></dt></tr>"
          );
        });
      } else {
        $(".container_cart tbody").append(
          '<tr><td rowspan="3"><p>Cart empty</p></td></tr>'
        );
      }
      if (cart.length > 0) {
        $.each(cart, function (index, value) {
          $(".list-group").append(
            '<li class="list-group-item d-flex justify-content-between lh-condensed"><div><h6 class="my-0">' +
              value.name +
              '</h6></div><span class="text-muted">' +
              value.sale_price +
              "</span></li>"
          );
        });
      } else {
        $(".list-group").append(
          '<li class="list-group-item d-flex justify-content-between lh-condensed"><div><h6 class="my-0">Cart empty</h6></li></div>'
        );
      }
      }
      $(".clear_cart").click(function () {
        localStorage.setItem("Products", JSON.stringify([]));
        location.reload();
      });

      setTimeout(function () {
        $(".remove_cart").click(function () {
          var indexId = $(this).data("id");
          var cart = JSON.parse(localStorage.getItem("Products"));
          var slice = cart.slice(-indexId, -1);
          console.log(slice);
          localStorage.setItem("Products", JSON.stringify(slice));
          location.reload();
        });

        totat = [];
        $("#myTable .amount").each(function (index) {
          getcomundt = $(this).text();
          totat.push(parseInt(getcomundt.replaceAll("Rs.", "")));
        });
    
        $(".list-group .text-muted").each(function (index) {
          getcomundt = $(this).text();
          totat.push(parseInt(getcomundt.replaceAll("Rs.", "")));
        });
        const sum = totat.reduce((a, b) => a + b, 0);
        $(".total").text(sum);
    
        $(".detail_btn").click(function () {
          var savedata = [];
          localStorage.setItem("Products_detail", JSON.stringify(savedata));
          var cart = JSON.parse(localStorage.getItem("Products_detail"));
          if (cart.length > 0) {
            localStorage.setItem("Products_detail", JSON.stringify(savedata));
          }
          var cart_btn = $(this)
            .parents(".card-div ")
            .children(".text-container")
            .children(".addto_card")
            .prop("disabled");
          $(".cart_icon").text(++cont);
          var name = $(this)
            .parents(".card-div ")
            .children(".text-container")
            .children(".item-name")
            .text();
          var description = $(this)
            .parents(".card-div")
            .children(".text-container")
            .children(".date")
            .text();
          var sale_price = $(this)
            .parents(".card-div")
            .children(".text-container")
            .children(".pricing-and-cart")
            .children(".pricing")
            .children(".current-price")
            .text();
          var imgurl = $(this)
            .parents(".card-div")
            .children(".img-div")
            .children("img")
            .attr("src");
    
          var getdata = {
            name: name,
            description: description,
            sale_price: sale_price,
            imgurl: imgurl,
            cart_btn_disabled: cart_btn,
          };
          savedata = [...savedata, getdata];
    
          localStorage.setItem("Products_detail", JSON.stringify(savedata));
          window.location =
            "http://134.122.115.132/Resinairs/product_datile.html";
        });
      }, 30);
    
      var Products_detail = JSON.parse(localStorage.getItem("Products_detail"));
      $.each(Products_detail, function (index, value) {
        var cart_btn_disabled = value.cart_btn_disabled == true ? "disabled" : "";
        console.log(cart_btn_disabled);
        $(".product_datile .container-space .row").append(
          '<div class="col-md-6"><img class="img-fluid" src="' +
            value.imgurl +
            '" alt="" /><div class="product-thumbnails"><ul><li><img src="" alt=""></li></ul></div></div><div class="col-md-4"><h1 class="my-4">' +
            value.name +
            '</h1><h4 class="description">' +
            value.description +
            '</h4><h3 class="my-3">Sale price:<span>' +
            value.sale_price +
            '</span></h3><button type="button" class="products_detail_cta btn btn-outline-primary btn-lg btn-block btn-custom-color" ' +
            cart_btn_disabled +
            ">ADD TO CART</button></div>"
        );
      });
      savedatadetail = [];
      $(".products_detail_cta").click(function () {
        $(this).prop("disabled", true);
    
        var cart_btn = true;
    
        $(".cart_icon").text(++cont);
        var name = $(this).parents(".col-md-4").children(".my-4").text();
        var description = $(this)
          .parents(".col-md-4")
          .children(".description")
          .text();
        var sale_price = $(this).parents(".col-md-4").children(".my-3").text();
        var imgurl = $(this)
          .parents(".col-md-4")
          .parents(".row")
          .children(".col-md-6")
          .children(".img-fluid")
          .attr("src");
    
        var getdata = {
          name: name,
          description: description,
          sale_price: sale_price,
          imgurl: imgurl,
          cart_btn_disabled: cart_btn,
        };
        savedatadetailset = [...savedatadetail, getdata];
    
        localStorage.setItem("Products", JSON.stringify(savedatadetailset));
      });
      
      if (localStorage.getItem("Products") != null) {
      var check_card = JSON.parse(localStorage.getItem("Products"));
      console.log(check_card);
      if (check_card.length <= 0) {
        $("form input,form select, form button").prop("disabled", true);
        $(".text-center").append(
          "<h6><strong><i>Cart Cannot Be Empty,Please Add Products</i></strong></h6>"
        );
      } else {
        $("form input,form select, form button").prop("disabled", false);
      }
    }
      if ($("#datepicker").length) {
        $("#datepicker").datepicker();
      }
      if ($("form").length) {
        var $form = $("form"),
          $successMsg = $(".alert");
        $.validator.addMethod("letters", function (value, element) {
          return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
        });
        $form.validate({
          rules: {
            firstName: {
              required: true,
              minlength: 3,
              letters: true,
            },
            lastName: {
              required: true,
              minlength: 3,
              letters: true,
            },
            username: {
              required: true,
              minlength: 3,
              letters: true,
            },
            email: {
              required: true,
              email: true,
            },
            address: {
              required: true,
            },
            address2: {
              required: true,
            },
            country: {
              required: true,
            },
            state: {
              required: true,
            },
            zip: {
              required: true,
              minlength: 4,
              digits: true,
            },
            same_address: {
              required: true,
            },
            paymentMethod: {
              required: true,
            },
            cc_number: {
              required: true,
              minlength: 14,
              digits: true,
            },
            cc_expiration: {
              required: true,
              digits: true,
            },
            cc_cvv: {
              required: true,
              digits: true,
              minlength: 3,
            },
          },
          messages: {
            firstName:
              "Please specify your First name (only letters and spaces are allowed)",
            lastName:
              "Please specify your Last name (only letters and spaces are allowed)",
            email: "Please specify a valid email address",
          },
          submitHandler: function () {
            $successMsg.show();
            localStorage.setItem("Products", JSON.stringify([]));
            $("form").trigger("reset");
            setTimeout(function () {
              window.location.href =
                "http://134.122.115.132/Resinairs/product.html";
            }, 2000);
          },
        });
        $(".close").click(function () {
          $(".alert").hide();
        });
      }
    });
    
    // ============saba=======
 /*===AOS==*/
 AOS.init({
  duration: 1200,
});
  /*===read more text function===*/
$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});
/*====our client say======*/
if($('#testimonial-slider').length){

  $("#testimonial-slider").owlCarousel({
    items: 3,
    slideSpeed: 1000,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    pagination: true,
    navigation: false,
    loop:true,
  });
}

// This is Laraib's Section
if($('.faq').length){
const faqs =document.querySelectorAll(".faq");

faqs.forEach(faq =>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    })

})
}
});