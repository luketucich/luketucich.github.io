document.addEventListener("DOMContentLoaded", function () {
  const generateJSONBtn = document.getElementById("generateJSONBtn");

  // Helper function to escape HTML characters
  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  if (generateJSONBtn) {
    generateJSONBtn.addEventListener("click", function () {
      // Get trimmed value by ID
      const g = (id) => document.getElementById(id).value.trim();

      // Get picture path or default
      const picture = document.getElementById("picture").files[0]
        ? "images/" + document.getElementById("picture").files[0].name
        : "images/retro-luke-about-me.png";

      // Collect all courses
      const courses = [];
      document.querySelectorAll(".course-entry").forEach((e) => {
        const dept = e.querySelector(".courseDept").value.trim();
        const number = e.querySelector(".courseNumber").value.trim();
        const name = e.querySelector(".courseName").value.trim();
        const reason = e.querySelector(".courseReason").value.trim();

        if (dept && number && name && reason) {
          courses.push({
            department: dept,
            number: number,
            name: name,
            reason: reason
          });
        }
      });

      // Collect all links
      const links = [];
      for (let i = 1; i <= 5; i++) {
        const label = g(`link${i}Label`);
        const url = g(`link${i}URL`);

        if (label && url) {
          links.push({
            name: label,
            href: url
          });
        }
      }

      // Build JSON object matching the required structure
      const jsonData = {
        firstName: g("firstName"),
        preferredName: g("nickname"),
        middleInitial: g("middleName"),
        lastName: g("lastName"),
        divider: g("divider"),
        mascotAdjective: g("mascotAdjective"),
        mascotAnimal: g("mascotAnimal"),
        image: picture,
        imageCaption: g("pictureCaption"),
        personalStatement: g("personalStatement"),
        personalBackground: g("bullet1Content"),
        professionalBackground: g("bullet2Content"),
        academicBackground: g("bullet3Content"),
        subjectBackground: g("bullet6Content"),
        primaryComputer: g("bullet4Content"),
        courses: courses,
        links: links
      };

      // Convert to formatted JSON string
      const jsonString = JSON.stringify(jsonData, null, 2);

      // Change the H2 title
      const titleElement = document.querySelector(".title");
      if (titleElement) {
        titleElement.textContent = "Introduction JSON";
      }

      // Create the JSON display with Highlight.js
      const jsonHTML = `
        <section>
          <h2 class="text-lg title">Introduction JSON</h2>
          <p class="text-sm" style="margin-bottom: var(--gap-md);">
            Highlight and copy the JSON data below:
          </p>
          <pre><code class="language-json">${escapeHTML(
            jsonString
          )}</code></pre>
          <div style="text-align:center;margin-top:var(--gap-lg);">
            <a href="" onclick="location.reload();return false;" class="button-nav">Reset Form</a>
          </div>
        </section>
      `;

      // Replace the main content
      document.querySelector("main").innerHTML = jsonHTML;

      // Apply Highlight.js syntax highlighting
      if (typeof hljs !== "undefined") {
        hljs.highlightAll();
      }
    });
  }
});
