// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devoured").on("click", function(event) {
      var id = $(this).data("id");
      var Devoured = $(this).data("Devoured");
  
      var eaten = {
        devoured: eatenBurger
      };
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: eaten
      }).then(
        function() {
          console.log("are you working", eatenBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".form-group").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bun").val().trim(),
        
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newburger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // $(".delete-cat").on("click", function(event) {
    //   var id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax("/api/cats/" + id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("deleted cat", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  });
  