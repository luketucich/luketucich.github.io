// Gallery Page - jQuery UI Tooltip
$(document).ready(function () {
  // Initialize tooltips on gallery items
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
