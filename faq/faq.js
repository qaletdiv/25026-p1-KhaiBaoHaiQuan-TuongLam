document.addEventListener("DOMContentLoaded", () => {

  // Accordion behavior
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });


  // Search filtering
  const searchInput = document.getElementById("faqSearch");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    faqItems.forEach(item => {
      const question = item.querySelector(".faq-question").textContent.toLowerCase();
      const answer = item.querySelector(".faq-answer").textContent.toLowerCase();

      if (question.includes(query) || answer.includes(query)) {
        item.style.display = "block";
        item.style.opacity = 1;
        item.style.maxHeight = "500px";
      } else {
        item.style.opacity = 0;
        item.style.maxHeight = "0";
        setTimeout(() => item.style.display = "none", 200);
      }
    });
  });
});
