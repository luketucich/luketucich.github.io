// DYNAMIC FEATURE #4: jQuery UI Accordion
// Expandable/collapsible sections for past meeting information

$(document).ready(function () {
  // Create expandable/collapsible meeting sections
  $("#meetings-accordion").accordion({
    collapsible: true,
    active: 0, // First meeting starts open
    heightStyle: "content",
    animate: 300,
  });
});
