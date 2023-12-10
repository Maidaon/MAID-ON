

 
<script>
  $(document).ready(function() {
    $('.rating').on('click', 'i', function() {
      const index = $(this).index(); // Get the index of the clicked star
      const rating = index + 1; // Calculate the rating (1-indexed)

      // Set the data-rating attribute and update star colors
      $(this).parent().attr('data-rating', rating);
      updateStarColors($(this).parent());

      // You can send the rating to the server or perform other actions here
    });

    // Helper function to update star colors based on the rating
    function updateStarColors(ratingContainer) {
      const rating = parseInt(ratingContainer.attr('data-rating'));
      ratingContainer.find('i').each(function(index) {
        if (index < rating) {
          $(this).removeClass('far').addClass('fas');
        } else {
          $(this).removeClass('fas').addClass('far');
        }
      });
    }
  });
</script>
