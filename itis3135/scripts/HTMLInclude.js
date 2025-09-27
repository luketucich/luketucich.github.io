function loadHTML(file, elementId) {
  fetch(file)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(elementId).innerHTML = html;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  loadHTML("components/header.html", "header-container");
  loadHTML("components/footer.html", "footer-container");
});
