document.addEventListener("DOMContentLoaded", function () {
  // Get all section headings
  const sectionHeadings = document.querySelectorAll(".section-heading");

  // Add click event listeners to each section heading
  sectionHeadings.forEach((heading) => {
    heading.addEventListener("click", function () {
      // Get the parent section of the clicked heading
      const section = heading.parentElement;

      // Toggle the active class on the section
      section.classList.toggle("active");
    });
  });
});
