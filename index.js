const dropdowns = document.querySelectorAll(".dropdown-menu");

dropdowns.forEach((menu) => {
  menu.addEventListener("click", () => {
    const dropdown = menu.parentElement;
    const content = dropdown.lastElementChild;
    const header = menu.firstElementChild;
    const chevron = menu.lastElementChild;

    if (content.style.display === "" || content.style.display === "none") {
      content.style.display = "block";
      header.style.fontWeight = "700";
      header.style.color = "#1E1F36";
      chevron.style.transform = "rotate(180deg)";
    } else {
      content.style.display = "none";
      header.style.fontWeight = "400";
      header.style.color = "";
      chevron.style.transform = "rotate(0deg)";
    }
  });
});
