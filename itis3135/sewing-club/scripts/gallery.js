// DYNAMIC FEATURE #3: jQuery UI Tooltips
// Displays meeting date and description when hovering over gallery images

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
