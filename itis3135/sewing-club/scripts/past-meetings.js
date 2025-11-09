// Past meetings accordion using jQuery UI
$(document).ready(function () {
  // Create expandable/collapsible meeting sections
  $("#meetings-accordion").accordion({
    collapsible: true,
    active: 0, // First meeting starts open
    heightStyle: "content",
    animate: 300,
  });
});
