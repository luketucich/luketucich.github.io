// Load HTML component files into the page
function loadHTML(file, elementId) {
  return fetch(file)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(elementId).innerHTML = html;
    });
}

// Load header and footer when page is ready
document.addEventListener("DOMContentLoaded", function () {
  Promise.all([
    loadHTML("components/header.html", "header-container"),
    loadHTML("components/footer.html", "footer-container"),
  ]).then(() => {
    // Notify other scripts that components are loaded
    document.dispatchEvent(new Event("HTMLIncludeLoaded"));
  });
});
