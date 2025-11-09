function loadHTML(file, elementId) {
  return fetch(file)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(elementId).innerHTML = html;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  Promise.all([
    loadHTML("components/header.html", "header-container"),
    loadHTML("components/footer.html", "footer-container"),
  ]).then(() => {
    // Dispatch custom event when HTML is loaded
    document.dispatchEvent(new Event("HTMLIncludeLoaded"));
  });
});
