
    // Bulma original script to enable navbar on mobile

    document.addEventListener('DOMContentLoaded', function () {

        // Get all "navbar-burger" elements
        var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
        
          // Add a click event on each of them
          $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {
        
              // Get the target from the "data-target" attribute
              var target = $el.dataset.target;
              var $target = document.getElementById(target);
        
              // Toggle the class on both the "navbar-burger" and the "navbar-menu"
              $el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
        
            });
          });
        }
        
        });


// simple filter/switch between food types (only used in ruokalista.html)

$(document).ready(function(){



  $(".food-category").click(function() {


      // choosing the current class item which is clicked

      var $this = $(this).parent().find('.food-category');


      // removing active-category from other category filters

    $(".food-category").not($this).removeClass('active-category');

    $this.addClass('active-category');


      // checking which filter item was used and then showing the right food menu

    if ($this.is('#pizzaPicker')) {

        // check if pizzaSection is already shown

        if ($('#pizzaSection').is(":visible")) {
            // if shown, do nothing
        }
        // if not shown, then toggle it visible and hide others
        else {
          $("#pizzaSection").show();
          $("#saladSection, #kebabSection, #otherFoodsSection").hide();
          }
    }
    else if ($this.is('#saladPicker')) {
      if ($('#saladSection').is(":visible")) {
              // do nothing
        }
        else {
          $("#saladSection").show();
          $("#pizzaSection, #kebabSection, #otherFoodsSection ").hide();
        }
    }
    else if ($this.is('#kebabPicker')) {
      if ($('#kebabSection').is(":visible")) {
            // do nothing
        }
        else {
          $("#kebabSection").show();
          $("#pizzaSection, #saladSection, #otherFoodsSection").hide();
        }
    }
    else if ($this.is('#otherFoodsPicker')) {
      if ($('#otherFoodsSection').is(":visible")) {
            // do nothing
        }
        else {
          $("#otherFoodsSection").show();
          $("#pizzaSection, #saladSection, #kebabSection").hide();
        }
    }

});
});