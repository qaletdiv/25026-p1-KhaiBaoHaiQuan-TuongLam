document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  if (!form) return; // No form found

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect all fields
    const entry = {
      firstName: document.querySelector("#firstName")?.value.trim(),
      lastName: document.querySelector("#lastName")?.value.trim(),
      email: document.querySelector("#email")?.value.trim(),
      phone: document.querySelector("#phone")?.value.trim(),
      company: document.querySelector("#company")?.value.trim(),

      service: document.querySelector("#service")?.value.trim(),
      industry: document.querySelector("#industry")?.value.trim(),

      transactionType: document.querySelector("#transactionType")?.value.trim(),
      transportMethod: document.querySelector("#transportMethod")?.value.trim(),
      country: document.querySelector("#country")?.value.trim(),

      hsCode: document.querySelector("#hsCode")?.value.trim(),
      value: document.querySelector("#value")?.value.trim(),

      weight: document.querySelector("#weight")?.value.trim(),
      dimensions: document.querySelector("#dimensions")?.value.trim(),

      message: document.querySelector("#message")?.value.trim(),

      submittedAt: new Date().toISOString(),
    };

    // Required fields for quote
    if (
      !entry.firstName ||
      !entry.lastName ||
      !entry.email ||
      !entry.company ||
      !entry.transactionType ||
      !entry.transportMethod ||
      !entry.country
    ) {
      alert("Please complete all required fields.");
      return;
    }

    // Get existing quotes from localStorage
    let storedQuotes = JSON.parse(localStorage.getItem("quoteRequests")) || [];

    // Add new submission
    storedQuotes.push(entry);

    // Save back to localStorage
    localStorage.setItem("quoteRequests", JSON.stringify(storedQuotes));

    alert("Your quote request has been submitted.");

    // Reset form
    form.reset();
  });
});
