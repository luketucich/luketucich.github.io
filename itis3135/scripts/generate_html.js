document.addEventListener("DOMContentLoaded", function () {
  const generateHTMLBtn = document.getElementById("generateHTMLBtn");

  // Helper function to escape HTML characters
  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  if (generateHTMLBtn) {
    generateHTMLBtn.addEventListener("click", function () {
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

      // Build the HTML string using template literals
      const middleInitial = g("middleName") ? ` ${g("middleName")}. ` : " ";
      const preferredName = g("nickname") ? ` "${g("nickname")}"` : "";

      const coursesHTML =
        courses.length > 0
          ? `<h3>${g("bullet5Title")}</h3>
<ul>
${courses
  .map(
    (c) => `    <li>
        <strong>${c.department} ${c.number}</strong> - ${c.name}: ${c.reason}
    </li>`
  )
  .join("\n")}
</ul>
`
          : "";

      const factsHTML = g("bullet6Content")
        .split("||")
        .map((fact) => {
          const trimmed = fact.trim();
          const match = trimmed.match(/(.*?)(\w+)\[\]\(([^)]+)\)(.*)/);
          return match
            ? `    <li>${match[1]}<a href="${match[3]}">${match[2]}</a>${match[4]}</li>`
            : `    <li>${trimmed}</li>`;
        })
        .join("\n");

      const linksHTML =
        links.length > 0
          ? `<h3>Links</h3>
<ul>
${links.map((l) => `    <li><a href="${l.href}">${l.name}</a></li>`).join("\n")}
</ul>
`
          : "";

      const htmlString = `<h2>Introduction HTML</h2>
<h3>${g("firstName")}${middleInitial}${preferredName} ${g("lastName")} ${g(
        "divider"
      )} ${g("mascotAdjective")} ${g("mascotAnimal")}</h3>
<figure>
    <img
        src="${picture}"
        alt="${g("pictureCaption")}"
    />
    <figcaption>${g("pictureCaption")}</figcaption>
</figure>
<p><em>${g("personalStatement")}</em></p>
<ul>
    <li>
        <strong>${g("bullet1Title")}:</strong> ${g("bullet1Content")}
    </li>
    <li>
        <strong>${g("bullet2Title")}:</strong> ${g("bullet2Content")}
    </li>
    <li>
        <strong>${g("bullet3Title")}:</strong> ${g("bullet3Content")}
    </li>
    <li>
        <strong>${g("bullet4Title")}:</strong> ${g("bullet4Content")}
    </li>
</ul>
${coursesHTML}<h3>${g("bullet6Title")}</h3>
<ul>
${factsHTML}
</ul>
<h3>${g("bullet7Title")}</h3>
<blockquote>
    "${g("quote")}"
    <br />
    <cite>– ${g("quoteAuthor")}</cite>
</blockquote>
${linksHTML}`;

      // Change the H2 title
      const titleElement = document.querySelector(".title");
      if (titleElement) {
        titleElement.textContent = "Introduction HTML";
      }

      // Create the HTML display with Highlight.js
      const displayHTML = `
        <section>
          <h2 class="text-lg title">Introduction HTML</h2>
          <p class="text-sm" style="margin-bottom: var(--gap-md);">
            Highlight and copy the HTML data below:
          </p>
          <pre><code class="language-html">${escapeHTML(
            htmlString
          )}</code></pre>
          <div style="text-align:center;margin-top:var(--gap-lg);">
            <a href="" onclick="location.reload();return false;" class="button-nav">Reset Form</a>
          </div>
        </section>
      `;

      // Replace the main content
      document.querySelector("main").innerHTML = displayHTML;

      // Apply Highlight.js syntax highlighting
      if (typeof hljs !== "undefined") {
        hljs.highlightAll();
      }
    });
  }
});
