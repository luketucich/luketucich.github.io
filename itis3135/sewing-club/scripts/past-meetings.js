// Past Meetings Page - jQuery UI Accordion
$(document).ready(function () {
  // Initialize accordion
  $("#meetings-accordion").accordion({
    collapsible: true,
    active: 0, // First item open by default
    heightStyle: "content",
    animate: 300,
  });
});
