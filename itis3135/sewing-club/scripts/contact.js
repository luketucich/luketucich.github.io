document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate form
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    alert(
      `We're sorry ${name}, but the contact form is currently unavailable. 
      
      Please contact us directly:
      
      bjjernigan@uncg.edu,
      
      336-843-0070`
    );
  });
});
