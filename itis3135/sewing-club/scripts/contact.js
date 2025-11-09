// Contact form submission handler
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate all fields are filled
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Show unavailable message (form keeps data so user can copy it)
    alert(
      `We're sorry ${name}, but the contact form is currently unavailable. 
      
      Please contact us directly at bjjernigan@uncg.edu, or 336-843-0070. Thank you!`
    );
  });
});
