
function toggleContact() {
    const section = document.getElementById("contactSection");
    section.style.display = section.style.display === "none" ? "block" : "none";
    section.scrollIntoView({ behavior: "smooth" });
  }
