document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  document.getElementById("addCourseBtn").addEventListener("click", () => {
    const div = document.createElement("div");

    div.className = "course-entry";
    div.innerHTML = `
      <button type="button" class="removeCourseBtn" onclick="this.parentElement.remove()">Remove</button>
      <label>Course Department <span>*</span></label>
      <input type="text" class="courseDept" required placeholder="e.g., ITIS" />
      <label>Course Number <span>*</span></label>
      <input type="text" class="courseNumber" required placeholder="e.g., 3135" />
      <label>Course Name <span>*</span></label>
      <input type="text" class="courseName" required placeholder="Course name" />
      <label>Reason <span>*</span></label>
      <input type="text" class="courseReason" required placeholder="Why?" />
    `;

    document.getElementById("coursesContainer").appendChild(div);
  });

  document.getElementById("clearBtn").addEventListener("click", () => {
    form.querySelectorAll("input, textarea").forEach((i) => (i.value = ""));
  });

  function generatePage() {
    // Helper to get trimmed value by ID
    const g = (id) => document.getElementById(id).value.trim();

    // Get picture or default
    const picture = document.getElementById("picture").files[0]
      ? URL.createObjectURL(document.getElementById("picture").files[0])
      : "images/retro-luke-about-me.png";

    // Divider HTML
    const div = `<p style="text-align:center;font-size:2rem;margin:var(--gap-lg) 0;">${g(
      "divider"
    )}</p>`;

    // Add all courses
    const courses = [];
    document.querySelectorAll(".course-entry").forEach((e) => {
      const d = e.querySelector(".courseDept").value.trim();
      const n = e.querySelector(".courseNumber").value.trim();
      const nm = e.querySelector(".courseName").value.trim();
      const r = e.querySelector(".courseReason").value.trim();
      if (d && n && nm && r)
        courses.push(`<li><strong>${d} ${n}</strong> - ${nm}: ${r}</li>`);
    });

    // Put together the HTML
    let html = `
      <section>
        <h2 class="text-lg title">Introduction Form</h2>
        <p class="tagline">${g("personalStatement")} | ${g("mascotAdjective")} ${g("mascotAnimal")}</p>
        ${div}
        <figure>
          <img class="img-lg" src="${picture}" alt="${g("pictureCaption")}" />
        </figure>
      </section>
      ${div}
    `;

    for (let i = 1; i <= 7; i++) {
      html += `<section><h3 class="text-md">${g(`bullet${i}Title`)}</h3>`;
      if (i === 5) {
        html += `<ul class="paragraph text-sm styled-list">${courses.join(
          ""
        )}</ul>`;
      } else if (i === 6) {
        const facts = g(`bullet${i}Content`)
          .split("||")
          .map((f) => {
            const m = f.trim().match(/(.*?)(\w+)\[\]\(([^\)]+)\)(.*)/);
            return m
              ? `<li>${m[1]}<a href="${m[3]}" target="_blank">${m[2]}</a>${m[4]}</li>`
              : `<li>${f.trim()}</li>`;
          });
        html += `<ul class="paragraph text-sm styled-list">${facts.join(
          ""
        )}</ul>`;
      } else if (i === 7) {
        html += `<blockquote class="paragraph text-md styled-quote">"${g(
          "quote"
        )}"<br /><cite>– ${g("quoteAuthor")}</cite></blockquote>`;
      } else {
        html += `<p class="paragraph text-sm">${g(`bullet${i}Content`)}</p>`;
      }
      html += `</section>${div}`;
    }

    html += `
      <section>
        <h3 class="text-md">Acknowledgment</h3>
        <p class="paragraph text-sm">${g("acknowledgment")}<br>Date: ${g(
      "acknowledgmentDate"
    )}</p>
      </section>
      ${div}
    `;

    // Optional sections
    if (g("funnyThing")) {
      html += `
        <section>
          <h3 class="text-md">Something Funny</h3>
          <p class="paragraph text-sm">${g("funnyThing")}</p>
        </section>
        ${div}
      `;
    }

    if (g("shareInfo")) {
      html += `
        <section>
          <h3 class="text-md">Something I'd Like to Share</h3>
          <p class="paragraph text-sm">${g("shareInfo")}</p>
        </section>
        ${div}
      `;
    }

    // Links section
    const links = [];
    for (let i = 1; i <= 5; i++) {
      const l = g(`link${i}Label`),
        u = g(`link${i}URL`);
      if (l && u)
        links.push(`<li><a href="${u}" target="_blank">${l}</a></li>`);
    }
    if (links.length) {
      html += `
        <section>
          <h3 class="text-md">Links</h3>
          <ul class="paragraph text-sm styled-list">${links.join("")}</ul>
        </section>
        ${div}
      `;
    }

    // Reset button
    html += `
      <section style="text-align:center;margin-top:var(--gap-lg);">
        <a href="" onclick="location.reload();return false;" class="button-nav">Reset Form</a>
      </section>
    `;

    document.querySelector("main").innerHTML = html;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    generatePage();
  });
});
