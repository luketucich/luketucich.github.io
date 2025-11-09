// Gallery page tooltips using jQuery UI
$(document).ready(function () {
  // Show date and description when hovering over gallery images
  $(".gallery-item").tooltip({
    position: {
      my: "center bottom-10",
      at: "center top",
    },
    show: {
      effect: "fadeIn",
      duration: 200,
    },
    hide: {
      effect: "fadeOut",
      duration: 200,
    },
  });
});
